export const messageSucces = (resp, inputs) => {
  inputs.forEach((element) => {
    element.value = "";
  });
  alertSucces(resp);
};

function alertSucces(resp) {
  const alerts = document.querySelector("#container-alert");
  const html = `<div class="alert alert-success d-flex justify-content-center align-items-center w-75 h-50" role="alert">
   <div>
     <i class="bi bi-check-circle-fill me-2"></i>
     <span>${resp.message}</span>
   </div>
</div>`;

  alerts.innerHTML = html;
  alerts.classList.add("opacity-1");

  setTimeout(() => {
    alerts.classList.remove("opacity-1");
    window.location.href = resp.redirect;
  }, 2500);
}
