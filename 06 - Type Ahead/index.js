const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = []
const search = document.querySelector('.search')
const display = document.querySelector('.suggestions')


fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data)) //spread operator ensures it is not an array nested in another array

function findMatches(wordToMatch, cities){
    return cities.filter(location => {
        return location.city.toLowerCase().includes(wordToMatch) || location.state.toLowerCase().includes(wordToMatch)})
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities)
    const html = matchArray.map(location => {
        const population = parseInt(location.population).toLocaleString('en')
        const regex = new RegExp(this.value, 'gi')
        const cityName = location.city.replace(regex, `<span class='hl'>${this.value}</span>`)
        const stateName = location.state.replace(regex, `<span class='hl'>${this.value}</span>`)
        return`
        <li>
            <span class='name'>${cityName}, ${stateName}</span>
            <span class='population'>${population}</span>
        </li>
        `
    }).join(' ') //use join to remove the comma between each location object
    display.innerHTML = html
}

search.addEventListener('change', displayMatches) //only fires when user goes off the input, has to click outside to box for the event listener to fire
search.addEventListener('keyup', displayMatches) //adding keyup listener allows me to capture inpute everytime a key is released
