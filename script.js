const interval = document.querySelector('.interval')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const modal = document.querySelector('.modal')
const time = document.querySelector('.time')

startBtn.addEventListener('click', () => {
    time.innerHTML = `<span>${interval.value}:00</span>`
    modal.classList.toggle('change')
})

stopBtn.addEventListener('click', () => {
    modal.classList.toggle('change')
})

let timer = interval.value * 60
function countdown(){
    time.innerHTML = `<span>${timer--}</span>`
    console.log(timer)
}

setInterval(countdown, 1000)