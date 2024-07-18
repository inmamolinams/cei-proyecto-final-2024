//crear una galeria modal pero con una sola imagen

const imagenes = document.querySelectorAll(".proyecto a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");

// abrir la imagen
imagenes.forEach(imagen => {
    imagen.addEventListener("click", evento => {
        evento.preventDefault();   // Evita que el enlace navegue a la URL
            imgModal.setAttribute("src", imagen.getAttribute("href"));
            modal.classList.add("visible");
        });
});

// cerrar la imagen con un click en el fondo
modal.addEventListener("click", () => {
    modal.classList.remove("visible");
});

// Evitar que el clic en la imagen cierre el modal
modal.querySelector(".contenedor-img").addEventListener("click", evento => {
    evento.stopPropagation();
});