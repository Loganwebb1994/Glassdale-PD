
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    console.log("button clicked")
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNoteButton = () => {
    return "<button id='showNotes'>Show Notes</button>"
}