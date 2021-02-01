import"./AssociatesModal.js"
export const ShowAssociatesButton= (criminalObject) => {
    return `<button id="associates--${criminalObject.id}">Alibis and Lyin' Eyes</button>`

}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event =>{
    console.log(`event`, event.target.id)
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