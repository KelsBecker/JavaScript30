//set all the checkboxes to a variable
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

//loop over the checkboxes and add a click event listener
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

//create a variable to hold the last input that is clicked
let lastChecked;
function handleCheck(event){
    let inBetween = false 
    // if the shift key is held and lastChecked is checked
    // loop over all the checkboxes
    if (event.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            //when the checkbox is one of the two checked boxes
            //toggle inBetween
            //inBetween will be true once the first checked box is reached, will toggle to false when the second box is reached
            if (checkbox === lastChecked || checkbox === this ){
                inBetween = !inBetween
            }
            // when flag is true manually check each checkbox
            if(inBetween){
                checkbox.checked = true
            }
        })
    }
    lastChecked = this
}
//research this and arrow functions