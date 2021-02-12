import { saveNote } from "./NoteProvider.js"
import {ShowNoteButton} from "./ShowNotesButton.js"
import {useCriminals} from "./../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
const render = () => {
    const criminalArray = useCriminals()
    const noteButton = ShowNoteButton()
    contentTarget.innerHTML = `
        <h3>Case Note<h3>
        <fieldset class="caseNotesForm">
            <label for="note-date">Date of Entry</label>
            <input class="noteDateEntry" type="date" name="journalDate" id="note-date">
            <label for="noteForm--criminal">Suspect</label>
            <select id="noteForm--criminal" class="criminalSelect">
            <option value="0">Suspects...</option>
            ${criminalArray.map(criminal => `<option value="${ criminal.id }">${ criminal.name }</option>`)}
            </select>
            <label for="note-text">Notes</label>
            <textarea class="caseNote" name="caseNote" id="note-text" cols="30" rows="15"></textarea>
            <button id="saveNote">Save</button>
            ${noteButton}
        </fieldset>
        
    `
}

export const NoteForm = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    // clickEvent.preventDefault()
    if (clickEvent.target.id === "saveNote") {
        const date = document.getElementById("note-date").value
        const suspect = document.getElementById("noteForm--criminal").value
        const notes = document.getElementById("note-text").value
        
        // Make a new object representation of a note
        const newNote = {
            date: date,
            criminalId: parseInt(suspect),
            text: notes,

        }

        // Change API state and application state
        saveNote(newNote)
    }
})
