const rateBtns = document.querySelectorAll('.circle-box')
const submit = document.querySelector('.submit-btn ')
const beforeSubmit = document.querySelector('.before-submit')
const afterSubmit = document.querySelector('.after-submit')
const rateNumber = document.querySelector('#rate-number')

// Add an event listener to each rate button to toggle the "selected-rate" class
rateBtns.forEach(rateBtn => {
    rateBtn.addEventListener('click', () => {
        rateBtns.forEach(rateButton => {

            // Remove the "selected-rate" class from all rate buttons
            rateButton.classList.remove('selected-rate')
        })
        // Add the "selected-rate" class to the clicked rate button
        rateBtn.classList.add('selected-rate')
        // set the value of isButtonClicked to true
        isButtonClicked = true;
        // Add the "submit-hover" class to the submit button
        submit.classList.add('submit-hover')
        rateNumber.textContent = rateBtn.value
        submit.classList.remove('inaccessible')
    })
})

// A flag to track whether a rate button has been clicked
let isButtonClicked = false;

// Add an event listener to the submit button
submit.addEventListener('click', () => {

    // If one of rate buttons has been clicked, display after submit article
    if (isButtonClicked === true) {
        beforeSubmit.classList.add('display-none')
        afterSubmit.classList.remove('display-none')
        }
    })