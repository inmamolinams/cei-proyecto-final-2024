//crear una galeria modal

const imagenes = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
let indiceImg = 0;

// abrir la imagen
imagenes.forEach((imagen, i) => {
    imagen.addEventListener("click", evento => {
        evento.preventDefault(); // evita el comportamiento predeterminado del enlace
        indiceImg = i; // actualiza el índice de la imagen actual
        imgModal.setAttribute("src", imagen.getAttribute("href")); // muestra la imagen 
        modal.classList.add("visible"); //muestra la modal
    });
});

// cerrar la imagen con un click en el fondo
modal.addEventListener("click", () => {
    modal.classList.remove("visible");
});

// para cambiar de foto
flechas.forEach((flecha, i) => {
    flecha.addEventListener("click", evento => {
        evento.stopPropagation();
        if (i === 0) {
            indiceImg = indiceImg > 0 ? indiceImg - 1 : imagenes.length - 1; // imagen anterior
        } else {
            indiceImg = indiceImg < imagenes.length - 1 ? indiceImg + 1 : 0; // siguiente imagen
        }
        imgModal.setAttribute("src", imagenes[indiceImg].getAttribute("href")); //enseña la nueva imagen
    });
});