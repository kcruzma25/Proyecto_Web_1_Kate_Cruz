/* Esperar que la página cargue */
window.addEventListener('load', init, false);

function init() {

  /* ================================
     VARIABLES DEL FORMULARIO CONTACTO
     ================================ */

  const nombre = document.querySelector('#nombreTxt');
  const apellido = document.querySelector('#apellidoTxt');
  const email = document.querySelector('#emailTxt');
  const telefono = document.querySelector('#numberTxt');
  const servicio = document.querySelector('#servicioSelect');
  const mensaje = document.querySelector('#mensajeTxt');
  const alerta = document.querySelector('#mensajeAlert');
  const btnEnviar = document.querySelector('#btnSend');

  /* Expresión regular para email válido */
  const regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  /* Acción del botón Enviar */
  btnEnviar.onclick = function (e) {
    e.preventDefault();

    /* Validación de campos */
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

    /* Validar correo electrónico */
    if (!regexEmail.test(email.value)) {
      alerta.textContent = 'Correo electrónico inválido.';
      alerta.classList.add('alertaRoja');
      alerta.classList.remove('alertaVerde');
      return;
    }

    /* Enviar con EmailJS - service ID / template ID / ID form / Public key */
    emailjs
      .sendForm('service_ea076d5', 'template_galbwvg', '#formCita', 'k9mdSViw6izpOsXZQ')
      .then(() => {

        alerta.textContent = '✅ ¡Mensaje enviado correctamente!';
        alerta.classList.add('alertaVerde');
        alerta.classList.remove('alertaRoja');

        /* SweetAlert de éxito */
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

  /* Limpiar campos del formulario */
  function limpiar() {
    nombre.value = '';
    apellido.value = '';
    email.value = '';
    telefono.value = '';
    servicio.value = '';
    mensaje.value = '';
  }

  /* ===============================================
     VARIABLES PARA LA SECCIÓN DE COTIZACIÓN
     =============================================== */

  const tratamientoSelect = document.querySelector('#tratamientoSelect');
  const sesionesInput = document.querySelector('#sesionesInput');
  const extrasChecks = document.querySelectorAll('.chk-extra');
  const planRadios = document.querySelectorAll('input[name="plan"]');
  const btnCalcular = document.querySelector('#btnCalcular');
  const montoTotalSpan = document.querySelector('#montoTotal');

  /* Acción del botón Calcular cotización */
  if (btnCalcular) {
    btnCalcular.addEventListener('click', function () {

      /* Validar que se seleccione un tratamiento */
      const opcion = tratamientoSelect.selectedOptions[0];

      if (!opcion || !opcion.dataset.precio) {
        Swal.fire({
          title: 'Seleccione un tratamiento',
          text: 'Debe elegir un tratamiento principal antes de calcular.',
          icon: 'warning',
          confirmButtonColor: '#004187'
        });
        return;
      }

      /* Precio base del tratamiento x sesiones */
      const precioTratamiento = parseInt(opcion.dataset.precio);
      let sesiones = parseInt(sesionesInput.value);

      /* Validación de número de sesiones */
      if (isNaN(sesiones) || sesiones < 1) sesiones = 1;
      if (sesiones > 10) sesiones = 10;

      const subtotalTratamiento = precioTratamiento * sesiones;

      /* Precio del plan mensual */
      let precioPlan = 0;
      let nombrePlan = "Sin plan mensual";

      planRadios.forEach(r => {
        if (r.checked && r.dataset.precio) {
          precioPlan = parseInt(r.dataset.precio);
          nombrePlan =
            r.value === "basico" ? "Plan Básico" :
            r.value === "premium" ? "Plan Premium" :
            "Sin plan mensual";
        }
      });

      /* Extras marcados */
      let subtotalExtras = 0;
      extrasChecks.forEach(chk => {
        if (chk.checked) subtotalExtras += parseInt(chk.dataset.precio);
      });

      /* Total final */
      const total = subtotalTratamiento + precioPlan + subtotalExtras;

      /* Mostrar el total en el recuadro */
      montoTotalSpan.textContent = '₡' + total.toLocaleString("es-CR");

      /* SweetAlert con detalle de cobro */
      Swal.fire({
        title: 'Cotización estimada',
        html: `
          <p><strong>Tratamiento:</strong> ${opcion.textContent} × ${sesiones} sesión(es) =
          <br>₡${subtotalTratamiento.toLocaleString("es-CR")}</p>

          <p><strong>Plan mensual:</strong> ${nombrePlan} =
          ₡${precioPlan.toLocaleString("es-CR")}</p>

          <p><strong>Extras:</strong> ₡${subtotalExtras.toLocaleString("es-CR")}</p>

          <hr>
          <h3>Total: ₡${total.toLocaleString("es-CR")}</h3>
          <small>*Estimado final sujeto a valoración profesional.</small>
        `,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#004187'
      });

    });
  }

}
