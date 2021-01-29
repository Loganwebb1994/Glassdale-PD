import { saveNote } from "./NoteProvider.js"
import {ShowNoteButton} from "./ShowNotesButton.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
const render = () => {
    const noteButton = ShowNoteButton()
    contentTarget.innerHTML = `
        <h3>Case Note<h3>
        <fieldset class="caseNotesForm">
            <label for="note-date">Date of Entry</label>
            <input class="noteDateEntry" type="date" name="journalDate" id="note-date">
            <label for="note-suspect">Suspect</label>
            <input class="noteSuspectEntry" type="text" name="note-suspect" id="note-suspect">
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
    if (clickEvent.target.id === "saveNote") {
        const date = document.getElementById("note-date").value
        const suspect = document.getElementById("note-suspect").value
        const notes = document.getElementById("note-text").value
        
        // Make a new object representation of a note
        const newNote = {
            date: date,
            suspect: suspect,
            text: notes,

        }

        // Change API state and application state
        saveNote(newNote)
    }
})
