import {ShowAssociatesButton} from "../associates/ShowAssociatesButton.js"
const eventHub = document.querySelector(".container")




export const Criminal = (criminalObject, facilities) => {
    return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <div>Facilities:</div>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            ${ShowAssociatesButton(criminalObject)}
        </div>
    </div>
    `
}