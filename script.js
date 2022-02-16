const interval = document.querySelector('.interval')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const modal = document.querySelector('.modal')
const time = document.querySelector('.time')

startBtn.addEventListener('click', () => {
    // time.innerHTML = interval.value
    
    modal.classList.toggle('change')
})

stopBtn.addEventListener('click', () => {
    modal.classList.toggle('change')
})

