
// Permitir que los desplegables funcionen también con clics en móviles
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(drop => {
    const button = drop.querySelector('.dropbtn');

    button.addEventListener('click', (e) => {
      e.preventDefault();
      drop.classList.toggle('active');

      // cerrar otros menús
      dropdowns.forEach(other => {
        if (other !== drop) other.classList.remove('active');
      });
    });
  });

  // Cerrar menús si se hace clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(drop => drop.classList.remove('active'));
    }
  });
});
