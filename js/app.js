document.addEventListener("DOMContentLoaded", () => {

 
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  const info = {
    name: '',
    email: '',
    message: ''
  }


  //variables

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const form = document.querySelector("#formContact");

  name.addEventListener("blur", validate);
  email.addEventListener("blur", validate);
  message.addEventListener("blur", validate);
  form.addEventListener("submit", validateForm)

  function validate(e) {

    clearAlert(e.target);

    if (e.target.value.trim() === "") {
      showAlert(e.target, `${e.target.id} is required`);
      return;
    }

    if (e.target.id === "email" && !validateMail(e.target.value)) {
        showAlert(e.target, "the email is not valid ");
        return;
    }

    clearAlert(e.target);

    info[e.target.id] = e.target.value.trim().toLowerCase();

  }

  function showAlert(input, message) {
    console.log(input);

    tooltip(input, message);
  }
});

function clearAlert(input) {
  input.style.borderBottom = "1px solid #fff";
  input.previousElementSibling.style.border = "3px solid #f9c542";

  clearTooltip(input.previousElementSibling);
}

function validateMail(email) {
  // Expresion regular para validar un email
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const resultado = regex.test(email); // Valida el email recibido

  return resultado;
}


function validateForm(e){
  e.preventDefault();

  
 
}

function clearTooltip(input) {
  const icon = input;
  $(icon).tooltip("dispose");
}

function tooltip(input, message) {
  const icon = input.previousElementSibling;

  $(icon).tooltip({
    title: message,
    placement: "left",
    trigger: "manual",
  });

  $(icon).tooltip("show");
}
