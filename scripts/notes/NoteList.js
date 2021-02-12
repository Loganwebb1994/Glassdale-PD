import {getNotes, useNotes} from "./NoteProvider.js"
import {NoteHTMLRepresentation} from "./Note.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import {deleteNote} from "./NoteProvider.js"
const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", clickEvent =>{
    NoteList()
})
const render = (noteArray, criminalArray) =>{
    const allNotesAsStrings = noteArray.map(noteObject =>{
        const relatedCriminal = criminalArray.find(criminal => criminal.id === noteObject.criminalId)
        return NoteHTMLRepresentation(noteObject, relatedCriminal)
    }).join("")

    contentTarget.innerHTML =`
 
    <section class="notesList>
    ${allNotesAsStrings}
    </section>
    `
}
export const NoteList = () =>{
    getNotes()
    .then(getCriminals)
    .then(()=>{
        const allNotes = useNotes()
        const allCriminals = useCriminals()
        render(allNotes, allCriminals)

    })
}

eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
    })


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteNote(id).then(
            () => {
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
            }
        )
        }
    })