const interval = document.querySelector('.interval')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const modal = document.querySelector('.modal')
const time = document.querySelector('.time')
const img = document.querySelector('.reference-img')

startBtn.addEventListener('click', () => {
    // time.innerHTML = interval.value
    modal.classList.toggle('change')
})

stopBtn.addEventListener('click', () => {
    modal.classList.toggle('change')
})

const timer = parseInt(interval.value / 100) * 60 + interval.value % 100

//Conversão para segundos
let duration = timer

let minutes
let seconds

function startTimer(){
    setTimer()

    time.textContent = minutes + ":" + seconds

    seconds--
    if(seconds === 0){
        minutes--
        seconds = 60
    }

    if(seconds < 0){
        duration = timer
        setTimer()
        time.textContent = minutes + ":" + seconds
    }

    duration--
}

function setTimer(){
    minutes = parseInt(duration / 60)
    seconds = parseInt(duration % 60)

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds; 
}

function changeReference(){
    
}

setInterval(startTimer, 1000)