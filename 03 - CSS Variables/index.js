const inputs = document.querySelectorAll('input')

function handleChange() {
    const suffix = this.dataset.sizing || ''; //have to add or to account for color selector does not have a dataset
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)    
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));