// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hay algo más", time: 0.5},
  { text: "Inexplicable como su mirada", time: 3.5 },
  { text: "Inigualable como la manera en que me cela", time: 9 },
  { text: "Y trata de disimular que no está mal", time: 15.5 },
  { text: "Voy a cuidarte por las noches", time: 19 },
  { text: "Voy a amarte sin reproches", time: 22.5 },
  { text: "Te voy a extrañar en la tempestad", time: 29 },
  { text: "Y aunque existan mil razones para renunciar", time: 31.5 },
  { text: "No hay nadie más", time: 38.5 },//
  { text: "Se llevó todo, se llevó tristeza ya no existe espacio en la melancolía", time: 48 },
  { text: "Porque a su lado todo tiene más razón me llevé sus lágrimas, llegaron risas", time: 53.5 },
  { text: "Cuando estamos juntos la tierra se paraliza se paraliza", time: 60.5 },
  { text: "Hay algo más", time: 65 },//////
  { text: "Inexplicable como su mirada", time: 67.5 },
  { text: "Inigualable como la manera en que me cela", time: 73.5 },
  { text: "Y trata de disimular que no está mal", time: 79.5 },
  { text: "Voy a cuidarte por las noches", time: 84.5 },
  { text: "Voy a amarte sin reproches", time: 88.5 },
  { text: "Te voy a extrañar en la tempestad", time: 92.5 },
  { text: "Y aunque existan mil razones para renunciar", time: 97.5 },
  { text: "Voy a cuidarte por las noches", time: 102.5 },
  { text: "Voy a amarte sin reproches", time: 106.5 },
  { text: "Te voy a extrañar en la soledad", time: 111.5 },
  { text: "Y aunque existan mil razones para terminar", time: 116.5 },
  { text: "No hay nadie más", time: 121.5 },
  { text: "No quiero a nadie más, oh-uoh", time: 129.5 },
  { text: "♥♥solo te amo a ti cariño♥♥", time: 144.5 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 1.5s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);