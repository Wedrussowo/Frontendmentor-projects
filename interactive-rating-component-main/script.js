const rateBtns = document.querySelectorAll('.rate-btn')

// rateBtns.forEach(rateBtn => {
//     rateBtn.addEventListener('click', () => {
//         removeSelectedClasses()
//         rateBtn.classList.add('selected-rate')
//     })
// })

// function removeSelectedClasses() {
//     rateBtns.forEach(rateBtn => {
//         rateBtn.classList.remove('selected-rate')
//     })
// }

rateBtns.forEach(rateBtn => {
    rateBtn.addEventListener('click', () => {
        rateBtns.forEach(rateButton => {
            rateButton.classList.remove('selected-rate')
        })
        rateBtn.classList.add('selected-rate')
    })
})

