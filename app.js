const button =document.querySelector("#add")
const section=document.querySelector("#container")
const overlay=document.querySelector(".overlay")
const overlayCont=document.querySelector(".overlay-container")
function addNote(message,color){
    const note=document.createElement("div")
    const div=document.createElement("div")
    const butt=document.createElement("button")
    const img=document.createElement("img")
    const textarea=document.createElement("textarea")
    textarea.value=message
    div.style.backgroundColor=color
    img.src="color.png"
    note.className="note"
    butt.appendChild(img)
    div.appendChild(butt)
    note.appendChild(div)
    note.appendChild(textarea)
    
    section.appendChild(note)
}
button.onclick=()=>{
    overlayCont.style.display="block"
    var message=document.querySelector("#input").value
    var color=""
    document.querySelector("#red").onclick=()=>{color="rgb(216, 32, 32)"}
    document.querySelector("#green").onclick=()=>{color="rgb(19, 179, 19)"}
    document.querySelector("#blue").onclick=()=>{color="rgb(22, 136, 189)"}
    document.querySelector("#yellow").onclick=()=>{color="rgb(221, 142, 23)"}
    document.querySelector("#create").onclick=()=>{
     overlayCont.style.display="none"
     document.querySelector("#input").value=""
     addNote(message,color)
    }
}

