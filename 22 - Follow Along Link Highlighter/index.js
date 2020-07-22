const triggers = document.querySelectorAll('a')

//creates the actual hightlight element 
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.appendChild(highlight)

//adds and sizes the highlight based on links positiong on screen
const addHighlight = (event) => {
  //could also use this in place of event.target if not using arrow function
  const linkCoordinates = event.target.getBoundingClientRect()
  //allows me to adjust to window scroll
  const cords = {
    height: linkCoordinates.height,
    width: linkCoordinates.width,
    left: linkCoordinates.left + window.scrollX,
    top: linkCoordinates.top + window.scrollY
  }
  highlight.style.height = `${cords.height}px`
  highlight.style.width = `${cords.width}px`
  highlight.style.transform = `translate(${cords.left}px, ${cords.top}px)`
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', addHighlight))
