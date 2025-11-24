//variables controladoras 
var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/foto.png');

// Zona 1: Silla dental
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(500, -131, 253);
infospot1.addHoverText('Silla dental', -60);
infospot1.element.innerHTML =
  '<div style="background-color:#FFFFFF; color:#000; text-align:center; border-radius:8px; padding:12px; width:240px; text-shadow:none;">' +
    '<h3 style="margin:0; font-size:16px; font-weight:700; text-shadow:none; color:#1BA6A3;">Silla dental</h3>' +
    '<p style="margin-top:6px; font-size:14px; text-shadow:none;">Base, respaldo y cabecera ajustable para posicionar al paciente.</p>' +
  '</div>';
panorama.add(infospot1);

// Zona 2: Audio panorámica
var infospot2 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot2.position.set(342, 403, -500);
infospot2.addHoverText('', -60);

infospot2.element.innerHTML =
  '<div style="background-color:#FFFFFF; color:#000; text-align:center; border-radius:8px; padding:8px; width:200px; text-shadow:none;">' +
    '<audio controls style="width:100%; margin-top:6px;">' +
       '<source src="audios/panoramica.mp3" type="audio/mpeg">' +
    '</audio>' +
  '</div>';

panorama.add(infospot2);

// Zona 3: Video técnica de cepillado
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(175, 57, -500);
infospot3.addHoverText('Video: Técnica de cepillado', -60);

infospot3.element.innerHTML =
  '<div style="background-color:#FFFFFF; color:#000000; text-align:center; border-radius:12px; padding:12px; width:auto; display:inline-block; text-shadow:none;">' +
    '<iframe width="320" height="180" src="https://www.youtube.com/embed/p2KiPXjVOFc?si=Dpis-Bl6HdCVH0wr" allowfullscreen style="border-radius:10px; margin:0;"></iframe>' +
  '</div>';

panorama.add(infospot3);

// Zona 4: PDF escupidera
var infospot4 = new PANOLENS.Infospot(50, 'imagenes/info.png');
infospot4.position.set(500, 10, -58);
infospot4.addHoverText('Abrir PDF: uso de la escupidera', -60);

infospot4.element.innerHTML =
  '<div style="background-color:#FFFFFF; color:#000; text-align:center; border-radius:8px; padding:12px; width:260px; text-shadow:none;">' +
    '<h3 style="margin:0; font-size:16px; font-weight:700; text-shadow:none; color:#1BA6A3;">Uso de la escupidera</h3>' +
    '<p style="margin-top:6px; font-size:14px; text-shadow:none;">Haz clic para abrir el PDF con la información completa.</p>' +
  '</div>';

infospot4.addEventListener("click", function () {
  window.open("./pdf/tour.pdf", "_blank");
});
panorama.add(infospot4);

// Zona 5: Imagen Tijeras
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(-192, -501, -399);
infospot5.addHoverText('Tijeras dentales', -60);
infospot5.element.innerHTML =
  '<div style="background-color:#FFFFFF; color:#000; text-align:center; border-radius:8px; padding:10px; width:240px; text-shadow:none;">' +
    '<h3 style="margin:0; font-size:15px; font-weight:700; text-shadow:none; color:#1BA6A3;">Tijeras dentales</h3>' +
    '<img src="imagenes/tijeras.png" width="200" style="margin-top:6px;">' +
    '<p style="margin-top:6px; text-shadow:none;">Se utilizan para cortar suturas y materiales auxiliares.</p>' +
  '</div>';
panorama.add(infospot5);

// Zona 6: Herramientas lado derecho
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-132, 116, 500);
infospot6.addHoverText('Herramientas', -60);

infospot6.element.innerHTML =
  '<div style="background-color:#FFFFFF; color:#000; text-align:center; border-radius:10px; padding:14px; width:260px; text-shadow:none;">' +

    '<h3 style="margin:0; font-size:16px; font-weight:700; color:#1BA6A3;">' +
      '<i class="fa-solid fa-tooth" style="margin-right:6px;"></i>Herramientas' +
    '</h3>' +

    '<p style="margin:6px 0 10px;">Lado derecho de la unidad dental</p>' +

    // 🔽 Desplegable AQUÍ
    '<div style="text-align:left; margin-top:10px;">' +

      '<button onclick="event.stopPropagation(); this.nextElementSibling.style.display = (this.nextElementSibling.style.display==\'block\'?\'none\':\'block\')" ' +
      'style="width:100%; background:#1BA6A3; color:white; border:none; padding:10px; border-radius:8px; font-size:14px; cursor:pointer;">' +
        '<i class="fa-solid fa-list-ul" style="margin-right:6px;"></i> Ver elementos' +
      '</button>' +

      '<div style="display:none; background:#1BA6A3; color:white; padding:10px; border-radius:8px; margin-top:8px;">' +
        '<ul style="padding-left:18px; margin:0; font-size:13px; line-height:1.5;">' +
          '<li>Jeringa triple (aire/agua)</li>' +
          '<li>Pieza de mano de alta velocidad</li>' +
          '<li>Pieza de mano de baja velocidad</li>' +
          '<li>Cureta ultrasónica</li>' +
          '<li>Micro motor</li>' +
          '<li>Succión de alta potencia</li>' +
          '<li>Control digital de funciones</li>' +
        '</ul>' +
      '</div>' +

    '</div>' +
  '</div>';

panorama.add(infospot6);


// Zona 7: Video caries
var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(-373, -286, 500);
infospot7.addHoverText('Video: Qué es la caries', -60);

infospot7.element.innerHTML =
  '<div style="background-color:#FFFFFF; color:#000000; text-align:center; ' +
    'border-radius:12px; padding:12px; width:auto; display:inline-block; text-shadow:none;">' +
      '<iframe width="320" height="180" ' +
      'src="https://www.youtube.com/embed/BSPIH1mlNJs?si=n813bOcpoVZ8D0ks" ' +
      'allowfullscreen style="border-radius:10px;"></iframe>' +
  '</div>';

panorama.add(infospot7);

// Zona 8: Audio rayos X
var infospot8 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
infospot8.position.set(-154, 159, -500);
infospot8.addHoverText('', -60);

infospot8.element.innerHTML =
  '<div style="background-color:#FFFFFF; color:#000; text-align:center; border-radius:8px; padding:8px; width:200px; text-shadow:none;">' +
    '<audio controls style="width:100%; margin-top:6px;">' +
       '<source src="audios/rayosx.mp3" type="audio/mpeg">' +
    '</audio>' +
  '</div>';

panorama.add(infospot8);

// Zona 9: Imagen lámpara dental
var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot9.position.set(420, 500, 64);
infospot9.addHoverText('Lámpara dental', -60);
infospot9.element.innerHTML =
  '<div style="background-color:#FFFFFF; color:#000; text-align:center; border-radius:8px; padding:10px; width:240px; text-shadow:none;">' +
    '<h3 style="margin:0; font-size:15px; font-weight:700; text-shadow:none; color:#1BA6A3;">Lámpara dental</h3>' +
    '<img src="imagenes/lampara.png" width="200" style="margin-top:6px;">' +
    '<p style="margin-top:6px; text-shadow:none;">Proporciona iluminación focal para la cavidad oral.</p>' +
  '</div>';
panorama.add(infospot9);

// Zona 10: Video odontólogos
var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot10.position.set(-500, -188, -395);
infospot10.addHoverText('Video: Profesión del odontólogo', -60);

infospot10.element.innerHTML =
  '<div style="background-color:#FFFFFF; color:#000000; text-align:center; border-radius:8px; padding:10px; width:260px; text-shadow:none;">' +
    '<h3 style="margin:0; font-size:15px; font-weight:700; text-shadow:none; color:#1BA6A3;">' +
      '<i class="fa-solid fa-teeth" style="margin-right:6px;"></i>Profesión del odontólogo' +
    '</h3>' +
    '<video width="220" height="160" controls style="border-radius:8px; margin-top:6px;">' +
      '<source src="videos/clinica.mp4" type="video/mp4">' +
    '</video>' +
    '<p style="margin:6px 0 0; text-shadow:none;">Se encargan del cuidado, prevención y tratamiento de los dientes y la salud bucodental.</p>' +
  '</div>';

panorama.add(infospot10);

// Zona 11: Presentación del Doctor
var infospot11 = new PANOLENS.Infospot(70, PANOLENS.DataImage.Info);
infospot11.position.set(-500, 109, -203);  // ← NUEVA UBICACIÓN
infospot11.addHoverText('Conoce a nuestro especialista', -60);

infospot11.element.innerHTML = `
  <div style="
    background-color: rgba(255, 255, 255, 0.95);
    text-align: center;
    color: #000;
    border-radius: 16px;
    padding: 18px;
    width: 270px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.25);
    text-shadow: none;
  ">

    <div style="font-size: 20px; color:#1BA6A3; margin-bottom: 6px;">
      <i class="fa-solid fa-tooth"></i> Especialista
    </div>

    <img src="imagenes/perfil.png" 
      style="
        width: 95px; 
        height: 95px; 
        border-radius: 50%; 
        object-fit: cover; 
        margin-bottom: 10px; 
        border: 3px solid #1BA6A3;
      ">

    <h3 style="margin: 0; font-size: 18px; font-weight: 700;">Dr. Alejandro Gómez</h3>
    <p style="margin: 4px 0 10px; font-size: 14px; opacity:0.8;">
      Especialista en Ortodoncia y Ortopedia Maxilar
    </p>

    <div style="
      background:#F0F0F0; 
      border-radius: 10px; 
      padding: 10px;
      font-size: 13px; 
      text-align:left;
      text-shadow:none;
    ">
      <p style="margin:4px 0;">
        Estudios realizados en Buenos Aires, Argentina.
      </p>
      <p style="margin:4px 0;">
        Más de 10 años de experiencia en tratamientos ortodóncicos avanzados.
      </p>
      <p style="margin:4px 0;">
        Atención personalizada y enfocada en el bienestar del paciente.
      </p>
    </div>

  </div>
`;

panorama.add(infospot11);

// Agrega la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);
