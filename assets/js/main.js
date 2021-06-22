let cvv = document.getElementById('cvv')
let cvvValue = document.getElementById('cvvValue')
let notCvv = document.querySelectorAll('.notCvv')
let card = document.getElementById('card')
let holderNameValue = document.querySelector('.holderNameValue')
let holderName = document.getElementById('holderName')
let year = document.getElementById('year')
let yearValue = document.querySelector('.yearValue')
let month = document.getElementById('month')
let monthValue = document.querySelector('.monthValue')
let cardNumber = document.getElementById('cardNumber')
let cardNumberValue = document.getElementById('cardNumberValue')
let backCard = document.querySelector('.back_card')
let frontCardType = document.getElementById('cardType')
let backCardType = document.getElementById('back_cardType')
let form = document.querySelector('form')

cvvValue.addEventListener('click', () => {
    backCard.classList.add('visible')
    card.classList.add('rotate')
})

notCvv.forEach(each => {
    each.addEventListener('click', () => {
        if(document.querySelector('.rotate')){
            backCard.classList.remove('visible')
            card.classList.remove('rotate')
        } else {
            return
        }
    })
})

let letters = /^([^0-9]*)$/
let reg = /^[0-9]*[.]?[0-9]*$/

holderNameValue.addEventListener('keyup', () => {
    holderName.innerText  = holderNameValue.value
    if(!holderNameValue.value.match(letters)){
        document.querySelector('.nameError').classList.add('showError')
    } else {
        document.querySelector('.nameError').classList.remove('showError')
    }
})

let checkDate = () => {
        year.innerText = yearValue.value
        if(monthValue.value < 10){
            month.innerText = '0' + monthValue.value
        } else {
            month.innerText = monthValue.value
        }
}

frontCardType.style.display = 'none'
backCardType.style.display = 'none'

cardNumberValue.addEventListener('keyup', () => {
    cardNumber.innerHTML = cardNumberValue.value
    if(!reg.test(cardNumberValue.value)){
        document.querySelector('.numberError').classList.add('showError')
        return
    } else {
        document.querySelector('.numberError').classList.remove('showError')
    }
    
    frontCardType.style.display = 'block'
    backCardType.style.display = 'block'

    if(cardNumberValue.value.slice(0, 1) === "1"){
        frontCardType.src = 'assets/img/mastercard.png'
        frontCardType.style.width = '60px'
        frontCardType.style.height = '60px'
    } else if(cardNumberValue.value.slice(0, 1) === '2'){
        frontCardType.src = 'assets/img/paypal.png'
        frontCardType.style.width = '60px'
        frontCardType.style.height = '60px'
    } else if(cardNumberValue.value.slice(0, 1) === "3") {
        frontCardType.src = 'assets/img/visacard.png'
        frontCardType.style.width = '90px'
        frontCardType.style.height = '50px'
        backCardType.style.width = '80px'
        backCardType.style.height = '50px'
    } else {
        frontCardType.src = 'assets/img/discovercard.png'
        frontCardType.style.width = '60px'
        frontCardType.style.height = '40px'
        backCardType.style.width = '80px'
        backCardType.style.height = '50px'
    }

    if(cardNumberValue.value === '' ){
        frontCardType.style.display = 'none'
        backCardType.style.display = 'none'
    }
    backCardType.src = frontCardType.src
})


cvvValue.addEventListener('keyup', () => {
    cvv.innerText = cvvValue.value
    if(!reg.test(cvvValue.value)){
        document.querySelector('.cvvError').classList.add('showError')
    } else {
        document.querySelector('.cvvError').classList.remove('showError')
    }
})



form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkDate()
    if(!holderNameValue.value || !cardNumberValue.value || !monthValue.value || !yearValue.value || !cvvValue.value){
        alert('Please Complete Card Information')
    } else {
        // let cardInfo = JSON.parse(localStorage.getItem('Card'))
        // let user = () => {
        //     cardInfo.push({
        //         Name: holderNameValue.value,
        //         CardNumber: cardNumberValue.value,
        //         Month: monthValue.value,
        //         Year: yearValue.value,
        //         CVV: cvvValue.value,               
        //     })
            
        //     localStorage.setItem('Card', JSON.stringify(cardInfo))
            
        //     return {
        //         Name,
        //         CardNumber,
        //         Month,
        //         Year,
        //         Cvv,
        //     }
        // }
        
        // user()
        alert("Your Card Information Has Been Submited")
            holderNameValue.value = ''
            cardNumberValue.value = ''
            monthValue.value = ''
            yearValue.value = ''
            cvvValue.value = ''
    }
})
