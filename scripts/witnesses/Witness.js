export const WitnessHTMLRepresentation = (witness) => {
    return `<section class="witness" id="${witness.id}>
                <div class="witness__name">${witness.name}</div>
                <div class="witness__statements">${witness.statements}
            </section>`
}