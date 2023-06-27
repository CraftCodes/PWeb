const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const Show = "17 Nov 2023";

function countdown();

    const ShowDate = new Date(Show);
    const currentDate = new Date();

    const totalSeconds = (newShowDate - currentDate) / 1000;