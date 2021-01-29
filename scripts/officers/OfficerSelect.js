import {getOfficers, useOfficers} from "./OfficerProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect"){
        const selectedOfficer = changeEvent.target.value
        
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                selectedOfficerName: selectedOfficer
            }

        })

        eventHub.dispatchEvent(customEvent)
    }
})

const render = (officersCollection) => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <h3>Filter by arresting officer...</h3>
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officersCollection.map(officersObject =>`<option value="${officersObject.name}">${officersObject.name}</option>`).join("")
            }
        </select>
    `
    
}
export const OfficerSelect = () => {
    //fetches officers
    getOfficers()
    .then(() => {
        //takes slice of officers array from api and stores it in variable officers
        const officers = useOfficers()
        //renders the <option> tags for the officer select element
        render(officers)
    })
}