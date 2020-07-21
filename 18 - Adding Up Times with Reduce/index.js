const data = [...document.querySelectorAll('[data-time')]
const timesArray = data
  .map(timeString => timeString.dataset.time)
  .map(time => {
    const [mins, seconds] = time.split(':').map(parseFloat)
    return (mins * 60) + seconds //array of integers representing seconds
  })

const totalSeconds = timesArray.reduce((total, secs) => total + secs)

let secondsLeft = totalSeconds
const hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft - (hours * 3600) 
const min = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft - (min * 60)

console.log(`Total Time ${hours}:${min}:${secondsLeft}`)

//look in index-FINISHED for alternate solution