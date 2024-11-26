/*
- [ ] selectPomodoroSession()
- [ ] selectShortBreakSession()
- [ ] SelectLongBreakSession()
- [ ] increaseTime()
- [ ] decreaseTime()
- [ ] startPomodoro()
- [ ] resetPomodoro()
- [ ] configPomodoro()


*/
let pomodoroTimer = document.querySelector("#pomodoroTimer")

function convertDataInDisplayInNumber(){
    timeInDisplay = pomodoroTimer.innerHTML.split(":")
    timeInDisplay[0] = Number(timeInDisplay[0])
    timeInDisplay[1] = Number(timeInDisplay[1])
    return timeInDisplay
}
function showTimerInDisplay(min,seg){
    console.log(seg)
    seg = seg < 10 ? `0${seg}` : seg
    pomodoroTimer.innerHTML = `${min}:${seg}`
}
function decreaseTime(){
    let [min,seg] = convertDataInDisplayInNumber()
    if (min > 0) {
        min--
        showTimerInDisplay(min,seg)
    }
}
function increaseTime(){
    let [min,seg] = convertDataInDisplayInNumber()
    if (min < 60){
        min++
        showTimerInDisplay(min,seg)
    }
}
function startDecreaseTime(min,seg) {
    if(seg == 0){
        seg = 59
        min--
    }
    else {
        seg --
    }
    return [min,seg]

}

function startPomodoro(){
    let [min,seg] = convertDataInDisplayInNumber()
    let timerPomodoro = setInterval(() => {
        [min,seg] =  startDecreaseTime(min,seg)
        showTimerInDisplay(min,seg)
        console.log(min,seg)
        if (min == 0 && seg == 0){
            clearInterval(timerPomodoro)
        }
    },1000)
}