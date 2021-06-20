let cvv = document.getElementById('cvv')
let notCvv = document.querySelectorAll('.notCvv')
let card = document.getElementById('card')
let holderNameValue = document.querySelector('.holderNameValue')
let holderName = document.getElementById('holderName')
let year = document.getElementById('year')
let yearValue = document.querySelector('.yearValue')
let month = document.getElementById('month')
let monthValue = document.querySelector('.monthValue')
let cardNumber = document.querySelectorAll('.card_number span')
let cardNumberValue = document.getElementById('cardNumberValue')
let form = document.querySelector('form')

cvv.addEventListener('click', () => {
    card.classList.add('rotate')
})

notCvv.forEach((each) => {
    each.addEventListener('click', () => {
        if(document.querySelector('.rotate')){
            card.classList.remove('rotate')
        } else {
            return
        }
    })
})


let checkName = () => {
    if (holderNameValue.value === ''){
        return
    } else {
        holderName.innerText  = holderNameValue.value
        // holderNameValue.value = ''
    }
}

let checkDate = () => {
    if (!monthValue.value && !yearValue.value){
        return
    } else {
        year.innerText = yearValue.value
        month.innerText = monthValue.value
    }
}


let checkNumber = () => {
    let text = cardNumberValue.value
    let splited = text.split('')
    for(i = 0; i <= splited.length; i++){
        cardNumber.forEach((eachNumber) => {
            eachNumber.innerText[i] = splited[i]
        })
    }
}








form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkName()
    checkDate()
    checkNumber()
})