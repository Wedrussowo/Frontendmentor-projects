const rateBtns = document.querySelectorAll('.rate-btn')
const submit = document.querySelector('.submit-btn ')

// Add an event listener to each rate button to toggle the "selected-rate" class
rateBtns.forEach(rateBtn => {
    rateBtn.addEventListener('click', () => {
        rateBtns.forEach(rateButton => {

            // Remove the "selected-rate" class from all rate buttons
            rateButton.classList.remove('selected-rate')
        })
        // Add the "selected-rate" class to the clicked rate button
        rateBtn.classList.add('selected-rate')

        // Add the "submit-hover" class to the submit button
        submit.classList.add('submit-hover')
    })
})

// A flag to track whether a rate button has been clicked
let isButtonClicked = false;

// A function to set the session storage value and update the isButtonClicked flag
function getValue(value) {
    sessionStorage.setItem("value", value);
    isButtonClicked = true;
}

// Add an event listener to the submit button
submit.addEventListener('click', () => {

    // If a rate button has not been clicked, prevent the default action and stop the function
    if (!isButtonClicked) {
        event.preventDefault();
        }
     return true;
    })