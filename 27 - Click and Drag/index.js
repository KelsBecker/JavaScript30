const slider = document.querySelector('.items')
//flag variable to determine when the user clicks
let isDown = false
//will be assigned once the user clicks
let scrollLeft;
let startX;

slider.addEventListener('mousedown', (event) => {
    isDown = true;
    //adds css animation when clicked down
    slider.classList.add('active')
    //calculates the mouses position on the page when mouseddown. have to subtract slider.offsetLeft to account for margins.
    startX = event.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseup', () => {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.classList.remove('active')
})

//has some weir behavior when scrolled to the end
slider.addEventListener('mousemove', (event) => {
  if (!isDown) return; //if isDown is false exit the function
  event.preventDefault()
  const x = event.pageX - slider.scrollLeft
  //tells me how far the mouse has moved since the initial click
  const walk = x - startX
  slider.scrollLeft = scrollLeft - walk
  console.log({x, startX, walk})
})