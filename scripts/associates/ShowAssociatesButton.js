import"./AssociatesModal.js"
export const ShowAssociatesButton= (criminalObject) => {
    return `<button id="associates--${criminalObject.id}">Alibis</button>`

}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event =>{
    if(event.target.id.startsWith("associates")){
    const [prefix, criminalId]  =  event.target.id.split("--")
    const customEvent = new CustomEvent("AssociatesClicked",{
        detail:{
            criminalID: parseInt(criminalId)
        }
    })
    eventHub.dispatchEvent(customEvent)
}
})