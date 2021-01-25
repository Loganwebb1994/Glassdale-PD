import { getOfficers, useOfficers} from "./OfficerProvider.js"
import {Officer} from "./Officer.js"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            console.log(officerArray)
            // debugger
            let officersHTMLRepresentation = ""
            for (const officer of officerArray) {
                officersHTMLRepresentation += Officer(officer)
            }
            officersContainer.innerHTML = `
            <h3>Glassdale Officers</h3>
            <section class="officersList">
            ${officersHTMLRepresentation}
            </section>
            `
        })
}