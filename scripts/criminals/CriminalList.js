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
    
    
    const convictionsArray = useConvictions()
    const chosenConvictionObject = convictionsArray.find(convictionObj => {
        return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
    })
    
    
    const criminalsArray = useCriminals()

    const filteredCriminalsArray = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)

    renderToDom(filteredCriminalsArray)
    }
})

eventHub.addEventListener("officerChosen", customEvent => {
    const officer = customEvent.detail.selectedOfficerName
    console.log(officer)
    //now get criminals
    const criminals = useCriminals()
    //now filter criminals
    const filteredCriminalsArray = criminals.filter(
        criminalObject => {
            if(criminalObject.arrestingOfficer === officer){
                return true
            }
        }
    )
    renderToDom(filteredCriminalsArray)
})