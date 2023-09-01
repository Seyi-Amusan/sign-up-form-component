const inputElsObj = document.querySelectorAll('input');
const inputElsArr = Object.values(inputElsObj);
const btnEl = document.querySelector('.main__form--btn');
const errorMsgELsObj = document.querySelectorAll('.main__form--input-error-msg');
const errorMsgElsArr = Object.values(errorMsgELsObj);
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emptyStringRegex = /^$/

const validateEmail = () => {
    if (!inputElsArr[2].value.match(emailRegex)) {
        errorMsgElsArr[2].textContent = 'Please provide a vaild email';
        errorMsgElsArr[2].classList.add('active');
        inputElsArr[2].style.marginBottom = '0';
        inputElsArr[2].style.borderColor = 'red';
    }
}

const displayError = () => {
    for (const inputEl of inputElsArr) {
        if (inputEl.value === '') {
            let index = inputElsArr.indexOf(inputEl);
            errorMsgElsArr[index].classList.add('active');
            inputEl.style.marginBottom = '0';
            inputEl.style.borderColor = 'red';
        }
    }

    validateEmail();
}

const removeError = () => {
    for (const inputEl of inputElsArr) {
        if (!inputEl.value.match(emptyStringRegex)) {
            let index = inputElsArr.indexOf(inputEl);
            errorMsgElsArr[index].classList.remove('active');
            inputEl.style.marginBottom = '2rem';
            inputEl.style.borderColor = 'hsl(0deg 0% 46.27%)';
            inputEl.style.borderWidth = '1px';
        }
    }

    validateEmail();
}


const initApp = () => {
    btnEl.addEventListener('click', () => {
        displayError();
        removeError();
        event.preventDefault();
    });
}


document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 'complete') {
        initApp();
    }
})









