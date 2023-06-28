const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours"); // elementos do cronômetro sendo declarados
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const taylorShow = "20 Jul 2023"; // data de referência ao cronômetro

function countdown(){

    const taylorShowDate = new Date(taylorShow); // atribuição da data relativa a data pré-definida
    const currentDate = new Date();

    const totalSeconds = (taylorShowDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24 ; // cálculos necessários para dias, horas, minutos e segundos
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins); // inserção dos dados ao HTML
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);