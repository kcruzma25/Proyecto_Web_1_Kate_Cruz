document.addEventListener("DOMContentLoaded", () => {
  
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");
  const dotsContainer = document.querySelector(".carrusel-dots");

  let index = 0;

  // Crear puntos
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => irSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function actualizarCarrusel() {
    slides.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    // detener audios al cambiar
    document.querySelectorAll("audio").forEach(a => {
      a.pause();
      a.currentTime = 0;
    });
  }

  function irSlide(i) {
    index = i;
    actualizarCarrusel();
  }

  prevBtn.addEventListener("click", () => {
    index = (index === 0) ? slides.length - 1 : index - 1;
    actualizarCarrusel();
  });

  nextBtn.addEventListener("click", () => {
    index = (index === slides.length - 1) ? 0 : index + 1;
    actualizarCarrusel();
  });

});
