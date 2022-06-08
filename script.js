const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const password = document.getElementById('password')
const email = document.getElementById('email')
const tel = document.getElementById('pnumber')
const confirm_pass = document.getElementById('confirm_password')
const form = document.getElementById('myform')
const error = document.getElementById('error')
const status = document.getElementById('status')

form.addEventListener('submit',(e) => {
    
    if (password.value != confirm_pass.value) {
        error.innerText = 'Passwords dont match'
        e.preventDefault()
        status.innerText = 'Try again'
    } else {
        status.innerText = 'Request sent successfully'
    }
})




// form.addEventListener('submit',(e)=>{
//     result.push(fname.value,lname.value,password.value,confirm_pass.value)
//     console.log(result)
// })



