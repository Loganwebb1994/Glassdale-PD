export const NoteHTMLConverter = (note) => {
    return `
    <section class="note">
        <div class="note__date">Date: ${new Date(note.date).toLocaleDateString('en-US')}</div>
        <div class="note__suspect">Title: ${note.suspect}</div>
        <div class="note__text">${note.text}</div>
    </section>
    `
}