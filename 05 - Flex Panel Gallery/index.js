const panels = document.querySelectorAll('.panel')

function handleClick() {
    this.classList.toggle('open')
}

function toggleText(event) {
    if (event.propertyName.includes('flex')){
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click', handleClick))
panels.forEach(panel => panel.addEventListener('transitionend', toggleText))

