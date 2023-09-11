document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  //variables

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  name.addEventListener("blur", validar);
  email.addEventListener("blur", validar);
  message.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      showAlert(e.target, `${e.target.id} is required`);
      return;
    }

    if (e.target.id === "email") {
      validateMail(e.target.id);
    }

    clearAlert(e.target);
  }

  function showAlert(input, message) {
    input.style.borderBottom = "1px solid #ff3434";
    input.previousElementSibling.style.border = "3px solid #ff3434";

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
