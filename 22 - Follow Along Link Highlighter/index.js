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
  const coords = {
    height: linkCoordinates.height,
    width: linkCoordinates.width,
    left: linkCoordinates.left + window.scrollX,
    top: linkCoordinates.top + window.scrollY
  }
  highlight.style.height = `${coords.height}px`
  highlight.style.width = `${coords.width}px`
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', addHighlight))
