import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {Criminal} from "./Criminal.js"
import {useConvictions} from "./../convictions/ConvictionProvider.js"
import {getFacilities, useFacilities} from "./../facility/FacilityProvider.js"
import{getCriminalFacilities, useCriminalFacilities} from "./../facility/CriminalFacilityProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

const renderToDom = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}
export const CriminalsList = () => {
    getFacilities()
    .then(getCriminalFacilities)
    .then(
        () => {
            // Pull in the data now that it has been fetched
            const facilities = useFacilities()
            const crimFac = useCriminalFacilities()
            const criminals = useCriminals()

            // Pass all three collections of data to render()
            renderToDom(criminals, facilities, crimFac)
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

