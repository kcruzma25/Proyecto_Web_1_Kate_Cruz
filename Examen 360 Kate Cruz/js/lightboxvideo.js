// Abre el lightbox y carga el video
function verVideo(url) {
  const box = document.getElementById("lightboxVideo");
  const frame = document.getElementById("lbFrame");

  frame.src = url + "?autoplay=1";
  box.style.display = "flex";
}

// Cierra el video y lo detiene
function cerrarVideo() {
  const box = document.getElementById("lightboxVideo");
  const frame = document.getElementById("lbFrame");

  frame.src = "";
  box.style.display = "none";
}