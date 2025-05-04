const hamburgerIcon = document.querySelector(".hamburger-icon")
const nav = document.querySelector("#menu")
let isOpen = false

hamburgerIcon.addEventListener("click", () => {
    if(isOpen) {
        hamburgerIcon.innerHTML = '<i class="fas fa-bars"></i>'
        nav.classList.add("hidden")
    } else {
        hamburgerIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        nav.classList.remove("hidden")
    }
    isOpen = !isOpen
})

