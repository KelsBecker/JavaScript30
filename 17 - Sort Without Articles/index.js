const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
  // ^ means starts with
  // | means or
  // spacing is important if I have a space at the beginning of word it doesn't capture it
  // i means insensitive/case insensitive
  return bandName.replace(/^(the |a |an )/i, "").trim()
}
// only remove the word when sorting, so I don't remove the word from the array itself
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1)

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('')