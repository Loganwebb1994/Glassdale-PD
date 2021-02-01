const contentContainer = document.querySelector(".associatesContainer")

import {useCriminals} from"../criminals/CriminalProvider.js"
export const AssociatesModal = (criminalObject) =>{
  
    const HTMLRep = `
    <div id="alibi__modal" class="modal--parent">
        <div class="modal--content">
            <h1>Known associates for ${criminalObject.name}</h1>
            ${criminalObject.known_associates.map(associate=>{
        return `<section class="associate__container>
                    <div class="associate__name">Associate: ${associate.name}</section>
                    <div class="associate__alibi">Alibi: ${associate.alibi}</section>
                </section>`
                }).join("")}
                <button id="modal--close">close modal</button>
        </div>
    </div>
                `
    contentContainer.innerHTML = HTMLRep
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("AssociatesClicked", event =>{
    console.log("associates click heard by list component")
    const selectedCriminalId = event.detail.criminalID
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminal) => criminal.id === selectedCriminalId)
    console.log(selectedCriminal)
    AssociatesModal(selectedCriminal)
})

eventHub.addEventListener("click", event => {
    if (event.target.id === "modal--close") {
        closeModal()
    }
})

const closeModal = () => {
    contentContainer.innerHTML = ""
}