import {getWitnesses, useWitnesses} from "./WitnessProvider.js"
import {WitnessHTMLRepresentation} from "./Witness.js"

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showWitnessesClicked", clickEvent =>{
    WitnessList()
})


export const WitnessList = () =>{
    getWitnesses()
    .then(() => {
        const witnessArray = useWitnesses()
        console.log(witnessArray)
        render(witnessArray)
    })
    

}
const render = (witnessArray) => {
    contentTarget.innerHTML = `
    <h3>Witness</h3>
    ${witnessArray.map(witness => WitnessHTMLRepresentation(witness)).join("")}
    `
}