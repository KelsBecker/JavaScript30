const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100; 

function moveShadow(event){
  //this will always be hero in this function
  const {offsetWidth: width, offsetHeight: height} = hero
  let {offsetX: x, offsetY: y} = event
  //have to account for child element within hero 
  if (this !== event.target){
    x = x + event.target.offsetLeft
    y = y + event.target.offsetTop
  }

  //keeps pixels between 50 and -50
  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / height * walk) - (walk / 2))

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 green `
}

hero.addEventListener('mousemove', moveShadow)