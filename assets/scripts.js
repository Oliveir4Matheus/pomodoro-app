
let pomodoroTimer = document.querySelector("#pomodoroTimer")
let numberSessions = document.querySelector('#numberSessions')
let loopPomodoroTimer

function convertDataInDisplayInNumber(){
    timeInDisplay = pomodoroTimer.innerHTML.split(":")
    timeInDisplay[0] = Number(timeInDisplay[0])
    timeInDisplay[1] = Number(timeInDisplay[1])
    return timeInDisplay
}
function showTimerInDisplay(min,seg){
    seg = seg < 10 ? `0${seg}` : seg
    pomodoroTimer.innerHTML = `${min}:${seg}`
}
function controlTimer(valueControl){
    let [min,seg] = convertDataInDisplayInNumber()
    switch(valueControl){
        case "+":
            if (min < 60){
                min++
            }
        break
        case "-":
            if (min > 0) {
                min--
            }
        break
    }
    showTimerInDisplay(min,seg)
}
function decreaseTimer(min,seg) {
    if(seg == 0){
        seg = 59
        min--
    }
    else {
        seg --
    }
    return [min,seg]

}

function selectShortBreakSession() {
    breakPomodoroTimer()
    showTimerInDisplay(10,0)
}
function selectLongBreakSession() {
    breakPomodoroTimer()
    showTimerInDisplay(20,0)
}
function selectPomodoroSession() {
    breakPomodoroTimer()
    showTimerInDisplay(25,0)
}
function breakPomodoroTimer(){
    if(loopPomodoroTimer){
        clearInterval(loopPomodoroTimer)
    }
}

function controlSession(valueControl){
    switch(valueControl){
        case "+":
            numberSessions.innerHTML++
        break
        case "-":
            numberSessions.innerHTML--
        break
    }
}

function reset(){
    selectPomodoroSession()
}
function start(){
    let [min,seg] = convertDataInDisplayInNumber()
    loopPomodoroTimer = setInterval(() => {
        [min,seg] =  decreaseTimer(min,seg)
        showTimerInDisplay(min,seg)
        if(numberSessions.innerHTML == "0"){
            selectLongBreakSession()
            start()
        }
        if (min == 0 && seg == 0 && numberSessions.innerHTML >= 0){
            selectShortBreakSession()
            controlSession("-")
            start()
        } 
        if (numberSessions.innerHTML =="0" && min == 0 && seg == 0){
            numberSessions.innerHTML = 4
            selectPomodoroSession()
        }
    },1000)
}
