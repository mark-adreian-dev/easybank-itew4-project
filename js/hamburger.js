const hamburgerIcon = document.querySelector(".hamburger-menu")
const menu = document.querySelector("#mobile-menu")

let isOpen = false 
let isFromDesktop = window.innerWidth >= 1440

hamburgerIcon.addEventListener("click", () => {
    isOpen = !isOpen
    if(isOpen) { 
        openMenu(hamburgerIcon.getAttribute('data-page'))
    } else {
        closeMenu(hamburgerIcon.getAttribute('data-page'))
    }
})

window.addEventListener("resize", () => {
    if(window.innerWidth >= 1440) {
        if(menu.classList.contains("hidden")){
            menu.classList.remove("hidden")
            isOpen = true
            openMenu(hamburgerIcon.getAttribute('data-page'))
        }
    } else {
        if(!menu.classList.contains("hidden") && isFromDesktop){
            menu.classList.add("hidden")
            isOpen = false
            closeMenu(hamburgerIcon.getAttribute('data-page'))
        }
    }
})

const openMenu = (page) => {
    menu.classList.remove("hidden") 

    if(page === 'index') {
        hamburgerIcon.innerHTML = '<img src="./assets/svg/icon-close.svg" alt="close-menu" />'
    } else {
        hamburgerIcon.innerHTML = '<img src="../assets/svg/icon-close.svg" alt="close-menu" />'
    }
}
   

const closeMenu = (page) => {
    menu.classList.add("hidden") 
    if(page === 'index') {
        hamburgerIcon.innerHTML = '<img src="./assets/svg/icon-hamburger.svg" alt="hamburger-menu" />'
    } else {
        hamburgerIcon.innerHTML = '<img src="../assets/svg/icon-hamburger.svg" alt="hamburger-menu" />'
    }
}