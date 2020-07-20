
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


function handleSubmit(event){
  event.preventDefault()
  const text = event.target.item.value
  const item = {
    text,
    done: false
  }
  items.push(item)
  displayList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
  addItems.reset()
};

function displayList(items = [], itemsList){
  itemsList.innerHTML = items.map((item, index) => {
    return `
      <li>
        <input type='checkbox'data-index=${index} id='item${index}' ${item.done ? 'checked' : ''} />
        <label for='item${index}'>${item.text}</label>
      </li>
    `
  }).join('')
}

addItems.addEventListener('submit', handleSubmit)

console.log(items)
displayList(items, itemsList)