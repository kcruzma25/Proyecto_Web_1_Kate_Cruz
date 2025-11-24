// Esperar que la página cargue
window.addEventListener('load', init, false);

function init() {
  // Variables
  const nombre = document.querySelector('#nombreTxt');
  const apellido = document.querySelector('#apellidoTxt');
  const email = document.querySelector('#emailTxt');
  const telefono = document.querySelector('#numberTxt');
  const servicio = document.querySelector('#servicioSelect');
  const mensaje = document.querySelector('#mensajeTxt');
  const alerta = document.querySelector('#mensajeAlert');
  const btnEnviar = document.querySelector('#btnSend');

  // Expresión regular para email válido
  const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  // Acción del botón
  btnEnviar.onclick = function (e) {
    e.preventDefault();

    // Validación de campos
    if (
      nombre.value === '' ||
      apellido.value === '' ||
      email.value === '' ||
      telefono.value === '' ||
      servicio.value === '' ||
      mensaje.value === ''
    ) {
      alerta.textContent = 'Debe llenar todos los campos.';
      alerta.classList.add('alertaRoja');
      alerta.classList.remove('alertaVerde');
      return;
    }

    if (!regexEmail.test(email.value)) {
      alerta.textContent = 'Correo electrónico inválido.';
      alerta.classList.add('alertaRoja');
      alerta.classList.remove('alertaVerde');
      return;
    }

    // Enviar con EmailJS
    // service ID / template ID / ID del formulario / Public key
    emailjs
      .sendForm('service_ea076d5', 'template_galbwvg', '#formCita', 'k9mdSViw6izpOsXZQ')
      .then(() => {
        alerta.textContent = '✅ ¡Mensaje enviado correctamente!';
        alerta.classList.add('alertaVerde');
        alerta.classList.remove('alertaRoja');

        // SweetAlert animado
        Swal.fire({
          title: '¡Gracias por contactarnos!',
          html:
            '<iframe src="https://lottie.host/embed/00a0bed5-8035-4586-92b3-9f11105d7211/SlvbuToQiw.json" width="150" height="150" frameborder="0"></iframe><p>Tu mensaje ha sido enviado con éxito. Pronto te contactaremos.</p>',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#004187',
          background: '#fefefe',
        });

        limpiar();
      })
      .catch((error) => {
        alerta.textContent = 'Error al enviar el mensaje. Intente más tarde.';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');
        console.error('Error EmailJS:', error);
      });
  };

  // Limpiar campos del formulario
  function limpiar() {
    nombre.value = '';
    apellido.value = '';
    email.value = '';
    telefono.value = '';
    servicio.value = '';
    mensaje.value = '';
  }
}
