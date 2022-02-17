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
    
    start()
})

stopBtn.addEventListener('click', () => {
    modal.classList.toggle('change')
    clearInterval(int)
})

pauseBtn.addEventListener('click', () =>{
    clearInterval(int)
})

function changeReference(){
    img.src = references[Math.floor(Math.random() * references.length)].src
}

let seconds = 0
let minutes = 2

let int

function start(){
    int = setInterval(watch, 1000)
}

function pause(){
    clearInterval(int)
}

function stop(){
    clearInterval(int)
    seconds = 0
    minutes = 0
    time.textContent = "00:00"
}

function watch(){
    seconds--
    if(seconds < 0){
        minutes--
        seconds = 60
    }

    if(seconds == 0 && minutes == 0){
        minutes = 5
        seconds = 0
        changeReference()
    }

    time.textContent = twoDigits(minutes) + ":" + twoDigits(seconds)
}

function twoDigits(digit){
    if(digit < 10){
        return "0" + digit
    }else{
        return digit
    }
}