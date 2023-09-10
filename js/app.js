document.addEventListener('DOMContentLoaded', () => {

    //variables

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    name.addEventListener('blur',validar);
    email.addEventListener('blur',validar);
    message.addEventListener('blur',validar);

    function validar(e){
        if(e.target.value.trim() === ""){
            console.log("Salida");
        }
    }
    
});