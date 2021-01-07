const accordion = async ()=>{
    let elms = document.querySelectorAll(".aya-header button")
    elms.forEach(elm => {
        elm.addEventListener("click" ,e=> accordionHander(e.target))
    });
}

let accordionHander = (t)=>{
    reset()
    t.classList.toggle("at")
    set(t)
}

let reset = ()=>{
    let es = document.querySelectorAll(".aya-header button")
    es.forEach(e=>{
        e.classList.remove("at")
        resetHeight()
    })
}
let set = (t)=>{
    let p = t.closest(".aya-header").nextElementSibling
    resetHeight()
    p.style.maxHeight=`${p.scrollHeight + 50}px`
}
let resetHeight = ()=>{
 let bs = document.querySelectorAll(".tafseer-body")
 bs.forEach(b =>{
    b.style.maxHeight = "0px"
})
}
export default accordion
