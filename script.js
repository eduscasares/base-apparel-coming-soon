const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');

const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const validarCorreo = (input) => {

    // console.log(input.value);

    if(!input.value.match(pattern)) {
        form.classList.add('invalid')
    } else {
        form.classList.remove('invalid')
    }

}