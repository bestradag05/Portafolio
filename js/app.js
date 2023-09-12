document.addEventListener("DOMContentLoaded", () => {


  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  let info = {
    name: '',
    email: '',
    message: ''
  }


  //variables

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const form = document.querySelector("#formContact");
  const buttonForm = document.querySelector("#buttonform");

  name.addEventListener("blur", validate);
  email.addEventListener("blur", validate);
  message.addEventListener("blur", validate);
  form.addEventListener("submit", validateForm)

  function validate(e) {

    clearAlert(e.target);

    if (e.target.value.trim() === "") {
      showAlert(e.target, `${e.target.id} is required`);

      info[e.target.id] = '';
      validateInfo();


      return;
    }

    if (e.target.id === "email" && !validateMail(e.target.value)) {
      showAlert(e.target, "the email is not valid ");
      validateInfo();

      return;
    }

    clearAlert(e.target);

    info[e.target.id] = e.target.value.trim().toLowerCase();

    validateInfo();

  }

  function showAlert(input, message) {
    tooltip(input, message);
  }


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


  function validateForm(e) {

    e.preventDefault();


    buttonForm.innerHTML = '<i class="fa-solid fa-ellipsis fa-beat-fade fa-2xl"></i>';

    $.ajax({
      url: "https://formsubmit.co/ajax/bestradag0511@gmail.com",
      method: "POST",
      data: {
        name: `${info.name}`,
        email: `${info.email}`,
        message: `${info.message}`
      },
      dataType: "json"
    }).done(function () {

        buttonForm.classList.add('btn-confirm');
        buttonForm.innerHTML = '<i class="fa-solid fa-circle-check"></i> Success';

      setTimeout(() => {
        buttonForm.classList.remove('btn-confirm');
        buttonForm.innerHTML = ' <i class="fa-sharp fa-solid fa-paper-plane-top"></i> Send';
        for (let key in info) {
          info[key] = '';
        }
        form.reset();
        validateInfo();
      }, 2000);

    }).fail(function () {
      alert("error");
    });





  }

  function validateInfo() {
    if (Object.values(info).includes('')) {
      console.log(info);
      buttonForm.disabled = true;

      return;
    }

    console.log(info);
    buttonForm.disabled = false;

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




});

