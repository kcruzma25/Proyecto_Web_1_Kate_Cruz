// Esperar que cargue todo
window.addEventListener("DOMContentLoaded", () => {

  const userInput = document.getElementById("in-txt-user");
  const passInput = document.getElementById("in-txt-pass");
  const btnLogin = document.getElementById("btn-login");

  // Credenciales correctas
  const USER_OK = "cenfo";
  const PASS_OK = "123";

  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    const usuario = userInput.value.trim();
    const clave = passInput.value.trim();

    // Validación campos vacíos
    if (usuario === "" || clave === "") {
      Swal.fire({
        title: "Campos vacíos",
        html: `
          <iframe src="https://lottie.host/embed/09e2b6e9-f163-47cf-b7c9-c90a5e303b6d/JWPjVt7ANe.json"
                  width="170" height="170" frameborder="0"></iframe>
          <p>Debe completar todos los campos.</p>
        `,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#D32F2F",
      });
      return;
    }

    // Validar credenciales
    if (usuario === USER_OK && clave === PASS_OK) {
      Swal.fire({
        title: "Acceso correcto",
        html: `
          <iframe src="https://lottie.host/embed/00a0bed5-8035-4586-92b3-9f11105d7211/SlvbuToQiw.json"
                  width="170" height="170" frameborder="0"></iframe>
          <p>Bienvenido, redirigiendo...</p>
        `,
        showConfirmButton: false,
        timer: 2500,
        background: "#ffffff",
      }).then(() => {
        window.location.href = "landing.html";
      });
    } else {
      // Credenciales incorrectas
      Swal.fire({
        title: "Credenciales inválidas",
        html: `
          <iframe src="https://lottie.host/embed/09e2b6e9-f163-47cf-b7c9-c90a5e303b6d/JWPjVt7ANe.json"
                  width="170" height="170" frameborder="0"></iframe>
          <p>Usuario o contraseña incorrecta.</p>
        `,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#D32F2F",
      });
    }
  });

});
