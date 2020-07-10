const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const setDate = () => {
    const now = new Date(); //gets the date
    
    const seconds = now.getSeconds(); //gets the seconds from the current date
    const secondsDegrees = ((seconds / 60) * 360) + 90; //have to add 90 to account for offsetting by 90 degreess in style.css
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes(); //gets the minute from the current date
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getHours(); //gets the hour from the current date
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000)