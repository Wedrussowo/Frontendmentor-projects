const rateBtns = document.querySelectorAll('.rate-btn')
const submit = document.querySelector('.submit-btn ')

rateBtns.forEach(rateBtn => {
    rateBtn.addEventListener('click', () => {
        rateBtns.forEach(rateButton => {
            rateButton.classList.remove('selected-rate')
        })
        rateBtn.classList.add('selected-rate')
        submit.classList.add('submit-hover')
    })
})

let isButtonClicked = false;
function getValue(value) {
    sessionStorage.setItem("value", value);
    isButtonClicked = true;
}

submit.addEventListener('click', () => {
    if (!isButtonClicked) {
        event.preventDefault();
        }
     return true;
    })