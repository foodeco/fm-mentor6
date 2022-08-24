const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const button = document.querySelector('button');

const input = document.querySelectorAll('input');

function texting() {
    this.style.border = '1px solid var(--Grayish-Blue)';
    this.nextElementSibling.classList.add('icon');
    this.nextElementSibling.classList.remove('alarm_icon');
    this.nextElementSibling.nextElementSibling.style.display = 'none';
}
for (i=0;i<input.length;i++) {
    input[i].addEventListener('keyup', texting);
}

button.addEventListener('click', function(e){

    var emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if (e.target.form[0].value == "") {
        firstName.style.border = '2px solid var(--Red)';
        firstName.nextElementSibling.classList.add('alarm_icon');
        firstName.nextElementSibling.classList.remove('icon');
        firstName.nextElementSibling.nextElementSibling.style.display = 'block';
    }
    if (e.target.form[1].value == "") {
        lastName.style.border = '2px solid var(--Red)';
        lastName.nextElementSibling.classList.add('alarm_icon');
        lastName.nextElementSibling.classList.remove('icon');
        lastName.nextElementSibling.nextElementSibling.style.display = 'block';
    }
    if (emailReg.test(e.target.form[2].value) === false) {
        email.style.border = '2px solid var(--Red)';
        email.nextElementSibling.classList.add('alarm_icon');
        email.nextElementSibling.classList.remove('icon');
        email.nextElementSibling.nextElementSibling.style.display = 'block';
    }
    if (e.target.form[3].value == "") {
        password.style.border = '2px solid var(--Red)';
        password.nextElementSibling.classList.add('alarm_icon');
        password.nextElementSibling.classList.remove('icon');
        password.nextElementSibling.nextElementSibling.style.display = 'block';
    }
    // console.log(e);
    // console.log(e.target.form[3].value.length);
});