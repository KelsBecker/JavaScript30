const images = document.querySelectorAll('img')

//this will run a function after whatever wait time provided
//improves performance, scroll event will only fire appox 6 - 12 times per page, vs 60+ times withoug debounce
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//loop over every image and figure out where it should be shown
function checkSlide(event){
  images.forEach(image => {
    //window.scrollY tells us where we are from the top of the window, 
    //adding innerHeight, lets me know where I am in relation to the bottom of the window
    //height of the image / 2 will allow the image to scroll in when the pixel level is halfway through the image
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2
    //image bottom gives me the pixels where the bottom of the image is
    const imageBottom = image.offsetTop + image.height
    const isHalfShown = slideInAt > image.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom
    //slide in when scrolling up and down
    if(isHalfShown && isNotScrolledPast){
      image.classList.add('active')
    //slide out when scrolled past
    } else {
      image.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide))