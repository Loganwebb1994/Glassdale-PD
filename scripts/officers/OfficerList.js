import { getOfficers, useOfficers} from "./OfficerProvider.js"
import {Officer} from "./Officer.js"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            console.log(officers)
            // debugger
            let officersHTMLRepresentation = ""
            for (const officerObj of officers) {
                officersHTMLRepresentation += Officer(officerObj)
            }
            officersContainer.innerHTML = `
            <h3>Glassdale Officers</h3>
            <section class="officersList">
            ${officersHTMLRepresentation}
            </section>
            `
        })
}
