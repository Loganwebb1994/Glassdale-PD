import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {Criminal} from "./Criminal.js"
import {useConvictions} from "./../convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")

const renderToDom = (criminalCollection) => {
    let criminalsHTMLRepresentation = ""

    for (const criminal of criminalCollection){
        criminalsHTMLRepresentation += Criminal(criminal)
    }

    criminalsContainer.innerHTML = `
    <h3>Criminals</h3>
    <section class="criminalsList">
    ${criminalsHTMLRepresentation}
    </section>
    `
}

export const CriminalsList = () => {
    getCriminals()
        .then(() => {
            const criminalsArray = useCriminals()
            renderToDom(criminalsArray)
        }
        
        )
}
// Listen for the "crimeChosen" custom event you dispatched in ConvictionSelect

eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
    if(crimeChosenEvent.detail.crimeThatWasChosen !== "0"){
        // debugger
    /* 
    We have the the id of the conviction that the user selected from the drop down (crimeChosenEvent.target.crimeThatWasChosen). But each criminal object has the name of the crime they were convicted for. So we need to get the name of the conviction associated with the unique identifier. To get the name, we get the conviction object which has the property for name. 
    */

    // Get a copy of the array of convictions from the data provider
    const convictionsArray = useConvictions()
    const chosenConvictionObject = convictionsArray.find(convictionObj => {
        return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
    })
    /*
    Now that we have the name of the chosen crime, filter the criminals data down to the people that committed the crime
    */
  //  debugger
    
    const criminalsArray = useCriminals()

    const filteredCriminalsArray = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)

    renderToDom(filteredCriminalsArray)
    }
})