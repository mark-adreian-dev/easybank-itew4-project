const message = document.querySelector(".success-message")
const timeInterval = 1 // seconds
const miliseconds = 1000

let timer = 30

setInterval(() => {
    timer -= 1

    message.innerHTML = `You will be automatically redirected to dashboard after <span class="text-lime-green font-bold">${timer}</span> seconds or use the button below to proceed.`
    if(timer == 0) window.location.href = "/index.html"

}, timeInterval * miliseconds)