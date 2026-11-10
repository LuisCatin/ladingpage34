//variables
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

// 1. Capturamos los parámetros de la URL
const parametros = new URLSearchParams(window.location.search);
const productoSeleccionado = parametros.get("producto"); // Recibe "chocolate" o "maracuya"
// 2. Buscamos los elementos HTML por su ID
const titulo = document.getElementById("titulo-detalle");
const imagen = document.getElementById("img-detalle");
const descripcion = document.getElementById("desc-detalle");

//funcion boton más información
if(btn1){
btn1.addEventListener("click", function(){
    window.location.href = "detalle.html?producto=chocolate";
});
}

if(btn2){
    btn2.addEventListener("click", function(){
        window.location.href = "detalle.html?producto=maracuya";
    });
}

// 3. Evaluamos qué mostrar según el producto que viajó en el enlace
if (productoSeleccionado === "chocolate") {
    titulo.textContent = "¿Qué ves? Sé te perdió algo, o qué?";
    imagen.src = "./img/dora.jpeg";
    descripcion.textContent = "Esta obra es incopiable, si lo haces, amas el pene";
} else if (productoSeleccionado === "maracuya") {
    titulo.textContent = "La Pareja Feliz";
    imagen.src = "./img/maridos.jpeg";
    descripcion.textContent = "Coito, abichuelas y dulce de leche. De eso viven";
}