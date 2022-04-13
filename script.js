import { references } from "./references.js"

const min = document.querySelector('.minute')
const sec = document.querySelector('.second')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const modal = document.querySelector('.modal')
const time = document.querySelector('.time')
const img = document.querySelector('.reference-img')
const pauseBtn = document.querySelector('.pause-btn')
const skipBtn = document.querySelector('.skip-btn')
const rotateBtn = document.querySelector('.rotate-btn')

startBtn.addEventListener('click', () => {
    modal.classList.toggle('change')
    changeReference()
    if(min.value === ""){
        min.value = 3
        minutes = min.value
    }else{
        minutes = min.value
    }

    if(sec.value === ""){
        sec.value = 0
        seconds = sec.value
    }else{
        seconds = sec.value
    }

    start()
})

rotateBtn.addEventListener('click', () =>{
    img.classList.toggle('flip')
    rotateBtn.classList.toggle('flip')
})

stopBtn.addEventListener('click', () => {
    modal.classList.toggle('change')
    stop()
})

pauseBtn.addEventListener('click', () => {
    // clearInterval(int)
    // resume.classList.add('change')
    pause()
})

function pause(){
    if(!pauseBtn.classList.contains('paused')){
        clearInterval(int)
        pauseBtn.textContent = "Continuar"
        pauseBtn.classList.add('paused')
    }else{
        start()
        pauseBtn.textContent = "Pausar"
        pauseBtn.classList.remove('paused')
    }
}

skipBtn.addEventListener('click', () => {
    clearInterval(int)
    changeReference()
    minutes = min.value
    seconds = sec.value
    start()
})

function changeReference(){
    img.src = references[Math.floor(Math.random() * references.length)].src
    img.classList.contains('flip') && img.classList.remove('flip')
    if(rotateBtn.classList.contains('flip')){
        rotateBtn.classList.remove('flip')
    }
    if(pauseBtn.classList.contains('paused')){
        pauseBtn.textContent = "Pausar"
        pauseBtn.classList.remove('paused')
    }

    sound.pause()
    sound.currentTime = 0
}

let seconds
let minutes 

let int

function start(){
    int = setInterval(countdown, 1000)
}

function stop(){
    clearInterval(int)
    seconds = 0
    minutes = 0
    time.textContent = "00:00"
}

const sound = new Audio('Attention_Question.mp3')
sound.volume = 0.4

function countdown(){
    seconds--
    if(seconds < 0){
        minutes--
        seconds = 60
    }

    if(seconds == 0 && minutes == 0){
        minutes = min.value
        seconds = sec.value
        changeReference()
    }

    if(minutes == 0 && seconds == 10){
        sound.play()
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

// Validação de dados

min.addEventListener('keypress', function(e){
    if(!checkChar(e)){
        e.preventDefault()
    }
})

sec.addEventListener('keypress', e =>{
    if(!checkChar(e)){
        e.preventDefault()
    }
})

// Verifica se é número
function checkChar(e){
    const char = String.fromCharCode(e.keyCode)
    console.log(char)

    const pattern = `[0-9]`

    if(char.match(pattern)){
        return true
    }
}


