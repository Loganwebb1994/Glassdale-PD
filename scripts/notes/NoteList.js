import {getNotes, useNotes} from "./NoteProvider.js"
import {NoteHTMLConverter} from "./Note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent =>{
    NoteList()
})
const render = (noteArray) =>{
    const allNotesAsStrings = noteArray.map(noteObject =>{
        return NoteHTMLConverter(noteObject)
    }).join("")

    contentTarget.innerHTML =`
    <h3>Notes</h3>
    <section class="notesList>
    ${allNotesAsStrings}
    </section>
    `
}
export const NoteList = () =>{
    getNotes()
    .then(()=>{
        const allNotes = useNotes()
        render(allNotes)
    })
}

eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
    })