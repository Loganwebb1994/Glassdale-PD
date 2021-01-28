const contentTarget = document.querySelector(".noteFormContainer")

const renderNote = () => {
    contentTarget.innerHTML = `
        <h3>Case Notes<h3>
        <fieldset class="caseNotesForm">
            <label for="noteDateLabel">Date of Entry</label>
            <input class="noteDateEntry" type="date" name="journalDate" id="journalDate">
            <label for="suspectNoteLabel">Suspect</label>
            <input class="noteSuspectEntry" type="text" name="noteSuspectEntry" id="noteSuspectEntry>
            <label for="caseNoteLabel">Notes</label>
            <textarea class="caseNote" name="caseNote" id="caseNote" cols="30" rows="15"></textarea>
            <button id="saveNote">Save</button>
        </fieldset>
        
    `
}

export const NoteForm = () => {
    renderNote()
}