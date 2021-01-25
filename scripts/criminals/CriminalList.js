import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {Criminal} from "./Criminal.js"

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalsList = () => {
    getCriminals()
        .then(() => {
            const criminalsArray = useCriminals()
            console.table(criminalsArray)
            let criminalsHTMLRepresentation = ""
            for (const criminal of criminalsArray) {
                criminalsHTMLRepresentation += Criminal(criminal)
            }
            criminalsContainer.innerHTML = `
            <section class="criminalsList">
            ${criminalsHTMLRepresentation}
            </section>
            `
        }
        
        )
}