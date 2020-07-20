//to do: have a check all button at the bottom
//have a delete all button at the bottom
//check all will check/uncheck all list items
//delete all will remove all the items **remember to delete from localStorage

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


const handleSubmit = (event) => {
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

//have items set to an empty array to avoid errors from .map()
const displayList = (items = [], itemsList) => {
  itemsList.innerHTML = items.map((item, index) => {
    return `
      <li>
        <input type='checkbox'data-index=${index} id='item${index}' ${item.done ? 'checked' : ''} />
        <label for='item${index}'>${item.text}</label>
      </li>
    `
  }).join('')
}

//changes done status and persists checked/unchecked
const toggleDone = (event) => {
  if(!event.target.matches('input')) return; //exit the function unless the target is <input>
  const index = event.target.dataset.index
  items[index].done = !items[index].done
  localStorage.setItem('items', JSON.stringify(items))
  displayList(items, itemsList)
}

addItems.addEventListener('submit', handleSubmit)
itemsList.addEventListener('click', toggleDone)

displayList(items, itemsList)