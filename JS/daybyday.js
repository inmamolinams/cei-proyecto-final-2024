//Crear una galeria modal

const imagenes = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
let indiceImg = 0;

imagenes.forEach((imagen, i) => {
    imagen.addEventListener("click", evento => {
        evento.preventDefault();
        indiceImg = i;
        imgModal.setAttribute("src", imagen.getAttribute("href"));
        modal.classList.add("visible");
    });
});

modal.addEventListener("click", () => {
    modal.classList.remove("visible");
});

flechas.forEach((flecha, i) => {
    flecha.addEventListener("click", evento => {
        evento.stopPropagation();
        if (i === 0) {
            indiceImg = indiceImg > 0 ? indiceImg - 1 : imagenes.length - 1;
        } else {
            indiceImg = indiceImg < imagenes.length - 1 ? indiceImg + 1 : 0;
        }
        imgModal.setAttribute("src", imagenes[indiceImg].getAttribute("href"));
    });
});
