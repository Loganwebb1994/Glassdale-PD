export const NoteHTMLRepresentation = (note, criminal) => {
    return `
    <section class="note">
        <h3>Note about ${criminal.name}</h3>
        <div class="note__date">Date: ${new Date(note.date).toLocaleDateString('en-US')}</div>
        <div class="note__text">${note.text}</div>
        <button id="deleteNote--${note.id}">Delete</button>
    </section>
    `
}