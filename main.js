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
    
    formValido = validaFormulario(numA.value, numB.value);
    if(formValido){
        const containerMS = document.querySelector('.message-sucess');
        containerMS.innerHTML = mensagemSucess;
        containerMS.style.display = 'block';

        
    } else {
        const containerME = document.querySelector('.message-error');
        containerME.innerHTML = mensagemError;
        numB.style.border = '1px solid red';
        containerME.style.display = 'block';
    }
    
    numB.addEventListener('keyup', function(e){
        const containerME = document.querySelector('.message-error');
        formValido = validaFormulario(numA.value, e.target.value);

        if(!formValido){
            containerME.innerHTML = mensagemError;
        } else {
            containerME.innerHTML = '';
            numB.style = '';
            containerME.style.display = 'none';
        }
    })

})