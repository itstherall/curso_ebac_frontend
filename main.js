const form = document.getElementById('form-two-number');
const numA = document.getElementById('numero-a');
const numB = document.getElementById('numero-b');
let formValido = false;

function validaFormulario(A, B){ 
    return (B > A);
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucess = 'Tudo certo! Podemos prosseguir.';
    const mensagemError = 'O numero B precisa ser maior que o A!';
    const containerMS = document.querySelector('.message-sucess');
    const containerME = document.querySelector('.message-error');
    
    formValido = validaFormulario(numA.value, numB.value);
    if(formValido){
        containerMS.innerHTML = mensagemSucess;
        containerMS.style.display = 'block';

        numA.value = '';
        numB.value = '';  
    } else {
        containerMS.innerHTML = '';
        containerME.innerHTML = mensagemError;
        numB.style.border = '1px solid red';
        containerME.style.display = 'block';
    }
})

numB.addEventListener('keyup', function(e){
        const containerME = document.querySelector('.message-error');
        formValido = validaFormulario(numA.value, e.target.value);

        if(!formValido){
            containerME.innerHTML = mensagemError;
            numB.classList.add('.input-error');
        } else {
            containerME.innerHTML = '';
            numB.style = '';
            containerME.style.display = 'none';
        }
    })