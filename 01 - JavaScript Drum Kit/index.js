const playSound = (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`)
    if (!audio) return; //if there is no audio for the keypress, exit the function
    key.classList.add('playing'); //adds css styling 
    audio.currentTime = 0; //resets audio so key can be repeatedly clicked
    audio.play();   
}

const removeTransition = (event) => {
    if (event.propertyName !== 'transform') return; //if the key is not playing exit the function
    event.target.classList.remove('playing'); //removes additional css styling when we added class playing in playSound
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeTransition ))

window.addEventListener('keyup', playSound)