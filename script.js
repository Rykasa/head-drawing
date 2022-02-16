const interval = document.querySelector('.interval')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const modal = document.querySelector('.modal')
const time = document.querySelector('.time')
const img = document.querySelector('.reference-img')

startBtn.addEventListener('click', () => {
    time.innerHTML = `<span>${interval.value}:00</span>`
    modal.classList.toggle('change')
})

stopBtn.addEventListener('click', () => {
    modal.classList.toggle('change')
})

let timer = interval.value * 2
function countdown(){
    if(timer === 0){
        timer = 300
        img.src = "ley-bowen-.jpg"
    }
    time.innerHTML = `<span>${timer--}</span>`
    console.log(timer)
}

setInterval(countdown, 1000)