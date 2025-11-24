// Modal
var modal = document.getElementById("modal1");

// Imagen pequeña
var img = document.getElementById("myImg");

// Imagen del modal
var modalImg = document.getElementById("img01");

// Texto del modal
var captionText = document.getElementById("caption");

// Abrir modal
img.onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Botón cerrar
var cerrar = document.getElementsByClassName("close")[0];
cerrar.onclick = function () {
    modal.style.display = "none";
}

// Cerrar clickeando fuera
modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
