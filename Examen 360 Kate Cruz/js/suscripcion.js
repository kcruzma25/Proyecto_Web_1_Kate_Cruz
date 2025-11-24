// Esperar DOM cargado
document.addEventListener("DOMContentLoaded", () => {

  const formSus = document.getElementById("formSuscripcion");
  const emailInput = document.getElementById("susEmail");
  const alerta = document.getElementById("susAlert");

  const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  formSus.addEventListener("submit", function(e) {
    e.preventDefault();

    const correo = emailInput.value.trim();

    // Validación
    if (!regexEmail.test(correo)) {
      alerta.textContent = "Correo electrónico inválido.";
      alerta.className = "suscribcion-alert error";
      return;
    }

    // Enviar por EmailJS
    emailjs.send("service_ea076d5", "template_hxecrqo", {
      correo: correo,
      nombre: "Suscripción",
      apellidos: "No aplica",
      telefono: "No aplica",
      servicio: "Suscripción",
      comentarios: "Nuevo suscriptor a promociones."
    }, "k9mdSViw6izpOsXZQ")

    .then(() => {
      alerta.textContent = "¡Gracias por suscribirte! Ahora recibirás promociones y noticias.";
      alerta.className = "suscribcion-alert ok";
      emailInput.value = "";
    })
    .catch(() => {
      alerta.textContent = "Ocurrió un error. Intenta de nuevo más tarde.";
      alerta.className = "suscribcion-alert error";
    });

  });
});
