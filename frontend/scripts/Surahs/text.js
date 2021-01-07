// change font size
export const fontSizer = ()=>{
    const size = document.getElementById("font-size")
    size.addEventListener("change" , sizeHandler)
    localFontSize()
    
}
// handel the change event on the range of the font
let sizeHandler = ()=>{
    const elms = document.querySelectorAll("[data-font]")
    const size = document.getElementById("font-size").value
    window.localStorage.setItem("font-size" , size)
    sizer(elms ,size)
}
// get the font size from  the local storage and change it
const localFontSize = ()=>{
    let size = window.localStorage.getItem("font-size")
    const elms = document.querySelectorAll("[data-font]")
    document.getElementById("font-size").value = size
    sizer(elms ,size)

} 
// looper for font size
const sizer = (elms , size)=>{
    document.getElementById("size-amount").textContent = `${size}px`
    elms.forEach(elm => {
        elm.style.fontSize = `${size}px`
    });
}

// change font weight make it bolder ot thinner

export const fontBolder = ()=>{
    const size = document.getElementById("bold-size")
    size.addEventListener("change" , boldHandler)
    localFontWeight()
}
// handel the chage event on the range
let boldHandler = ()=>{
    const elms = document.querySelectorAll("[data-bold]")
    const bold = document.getElementById("bold-size").value
    window.localStorage.setItem("font-weight" , bold)
    bolder(elms ,bold )
}
// get font ewight from the local storage and change the concurrent porperity
const localFontWeight =  ()=>{
    let bold = window.localStorage.getItem("font-weight")
    document.getElementById("bold-size").value = bold
    const elms = document.querySelectorAll("[data-font]")
    bolder(elms ,bold)

} 
// looper for the bolder
const bolder = (elms , size)=>{
    document.getElementById("bold-amount").textContent = size
    elms.forEach(elm => {
        elm.style.fontWeight = size
    });
}


