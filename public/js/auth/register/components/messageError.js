const camposPassword = ["password", "Password_dos"];
const campoEmail = ["email"];

const messageErrorPassword = (message, inputs) => {
  limpiarInputs(inputs, camposPassword);
  alertError(message);
};

const messageErrors = ({ msg, path }, inputs) => {
  if (path === "User_Email") {
    alertError(msg);
    limpiarInputs(inputs, campoEmail);
  } else {
    alertError(msg);
    limpiarInputs(inputs, camposPassword);
  }
};

function limpiarInputs(inputs, campos) {
  inputs.forEach((element) => {
    if (campos.includes(element.id)) {
      element.value = "";
    }
  });
}

function alertError(message) {
  const alerts = document.querySelector("#container-alert");
  const html = `<div class="alert alert-danger notification-failure d-flex justify-content-center align-items-center w-75 h-50" role="alert">
  <div>
   <i class="bi bi-exclamation-triangle-fill me-2"></i>
   <span>${message}</span> 
  </div>
</div>`;

  alerts.innerHTML = html;
  alerts.classList.add("opacity-1");

  setTimeout(() => {
    alerts.classList.remove("opacity-1");
  }, 5000);
}

export { messageErrorPassword, messageErrors };
