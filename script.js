// Fetching the value
const countValue = document.getElementById('counter');

window.alert('Hello, World');

const increment = function(){

    // Get the value from the UI
    let val = parseInt(countValue.innerText);

    // Increment the value
    val = val+1;

    // Update the value
    countValue.innerText = val;
};

const decrement = function() {

    // Get the value from the UI
    let val = parseInt(countValue.innerText);

    // Decrement the value
    val = val-1;

    // Update the value
    countValue.innerText = val;

};