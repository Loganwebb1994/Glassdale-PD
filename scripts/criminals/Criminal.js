import {ShowAssociatesButton} from "../associates/ShowAssociatesButton.js"
const eventHub = document.querySelector(".container")



export const Criminal = (criminalObject) => {
    return `
        <div class="criminalCard">    
            <h3>${criminalObject.name}</h3>
            <div>Age: ${criminalObject.age}</div>
            <div>Crime: ${criminalObject.conviction}</div>
            <div>Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
            ${ShowAssociatesButton(criminalObject)}
        </div>
    `
}


