const btn = document.querySelector('button')
const password1 = document.querySelector('#password-1')
const password2 = document.querySelector('#password-2')
const email = document.querySelector('#email')
const form = document.querySelector('form')
const phone = document.querySelector('input[type=tel]')



function trimPhone(){
    phone.value = phone.value.replace(' ','')
    }

function validatePassword1(e){
    const regex =     /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{12,})/
    const errorMsg = document.querySelector('#psw-error-msg')
    if(regex.test(password1.value)){
        errorMsg.textContent = 'Strong Password'
        password1.style.borderColor = 'var(--success-color)'       
        errorMsg.style.color = 'var(--success-color)'
        
    }
    else{
        errorMsg.textContent = 'Use Stronger alphanumeric Password'
        errorMsg.style.color = 'var(--danger-color)'
    }
}

function validatePassword2(){
    const errorMsg = document.querySelector('#psw-error-msg')
    if(password1.value === password2.value){
        password2.style.borderColor = 'var(--success-color)' 
        errorMsg.textContent = ''
    }
    else {
        errorMsg.textContent = 'Passwords do not match'
        errorMsg.style.color = 'var(--danger-color)'      
        password2.style.borderColor = 'var(--danger-color)'       
    }

}
phone.addEventListener('input', trimPhone)
password1.addEventListener('input', validatePassword1)
password2.addEventListener('input', validatePassword2)

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    

})