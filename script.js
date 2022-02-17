const references = [
    {
        id: 0,
        src: "mikasa.jpg",
        view: "3/4"
    },
    {
        id: 1,
        src: "ley-bowen-.jpg",
        view: "3/4"
    }
]

const interval = document.querySelector('.interval')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const modal = document.querySelector('.modal')
const time = document.querySelector('.time')
const img = document.querySelector('.reference-img')
const pauseBtn = document.querySelector('.pause-btn')
const skipBtn = document.querySelector('.skip-btn')

startBtn.addEventListener('click', () => {
    modal.classList.toggle('change')
    changeReference()
})

stopBtn.addEventListener('click', () => {
    modal.classList.toggle('change')
    duration = timer
})

skipBtn.addEventListener('click', () =>{
    changeReference()
    duration = timer
    startTimer()
})

//Conversão para segundos
let timer = parseInt(interval.value / 100) * 60 + interval.value % 100
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
        changeReference()
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
    img.src = references[Math.floor(Math.random() * references.length)].src
}

setInterval(startTimer, 1000)

console.log(references)