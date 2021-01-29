export const NoteHTMLRepresentation = (note) => {
    return `
    <section class="note">
        <div class="note__date">Date: ${new Date(note.date).toLocaleDateString('en-US')}</div>
        <div class="note__suspect">Suspect: ${note.suspect}</div>
        <div class="note__text">${note.text}</div>
    </section>
    `
}