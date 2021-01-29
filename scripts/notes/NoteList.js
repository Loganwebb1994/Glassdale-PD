import {getNotes, useNotes} from "./NoteProvider.js"
import {NoteHTMLRepresentation} from "./Note.js"

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", clickEvent =>{
    NoteList()
})
const render = (noteArray) =>{
    const allNotesAsStrings = noteArray.map(noteObject =>{
        return NoteHTMLRepresentation(noteObject)
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