const color = ()=>{
    let changeHandler = (color)=>{
        let elms = document.querySelectorAll("[data-theme]")
        window.localStorage.setItem("data-theme" , color) 
        looper({elms , color})
      }
    const btn = document.getElementById("color-theme")
    btn.addEventListener("change" , e =>changeHandler(e.target.value))
}
export default color

export const localTheme = ()=>{
    let color =  window.localStorage.getItem("data-theme")
    let fontColor =  window.localStorage.getItem("font-color")
    let elms = document.querySelectorAll("[data-theme]")
    let fontElms = document.querySelectorAll("[data-font]")
     document.getElementById("color-theme").value = color
     document.getElementById("color").value = fontColor
     looper({elms , color  , fontColor , fontElms})
}

export const fontColor = ()=>{
    let color = document.getElementById("color")
    color.addEventListener("change" , e=>fontColorHandler(e.target.value))
}

let fontColorHandler = (fontColor)=>{
    let elms = document.querySelectorAll("[data-font]")
    window.localStorage.setItem("font-color" , fontColor)
    looper({elms , fontColor})
}

const looper = ({...params})=>{
    let {
        elms ,
        color ,
        fontColor , 
        fontElms
        } = params
     // set the bg from the slider 
     if(elms&&color)elms.forEach(elm=>{
         elm.style.backgroundColor = color
         elm.style.color = "#fff"
        })
     // change the font from the slider
     if(elms && fontColor)elms.forEach(elm => elm.style.color = fontColor);
     // get colot from the localstorage
     if(fontElms&&fontColor) fontElms.forEach(elm => elm.style.color = fontColor);
    
}


