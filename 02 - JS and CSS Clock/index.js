const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const setDate = () => {
    const now = new Date(); //gets the date
    
    const seconds = now.getSeconds(); //gets the seconds from the current date
    const secondsDegrees = ((seconds / 60) * 360) + 90; //have to add 90 to account for offsetting by 90 degreess in style.css
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //fixes the weird glitch when the second hand transitions from 60 seconds back to 0 seconds
    //when the hand reaches the end of the 60 seconds and transitions to 0, the degress reduce and the hand makes a reverse anti-clockwise animation to reach 0 degrees
    //this is visible because the transition is set to 0.05s
    //the class of fast changes the transition to 0s add this class at every 0 remove it at 1
    if (seconds === 0){
        secondHand.classList.add('fast')
    }
    if (seconds === 1){
        secondHand.classList.remove('fast')
    }

    const minutes = now.getMinutes(); //gets the minute from the current date
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getHours(); //gets the hour from the current date
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000)