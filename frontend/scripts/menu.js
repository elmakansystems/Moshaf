const openMenu = ()=>{
        const btn = document.querySelector(".menu-btn")
        btn.addEventListener("click" , openHandler)
}
let openHandler = ()=>{
    let sidebar = document.getElementById("sidebar")
    sidebar.style.right = "0%"
}
export const closeMenu = ()=>{
        const btn = document.querySelector(".close-btn")
        btn.addEventListener("click" , closeHandler)
}
let closeHandler = ()=>{
    let sidebar = document.getElementById("sidebar")
    sidebar.style.right = "-100%"
}
export default openMenu