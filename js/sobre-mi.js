// para animar el texto

const p_animar = document.querySelectorAll(".contenedor-derecha p");
const lista_animar = document.querySelectorAll(".contenedor-derecha li");
const span_animar = document.querySelectorAll(".contenedor-derecha span");
 
//para el párrafo
p_animar.forEach((p, index) => {
    setTimeout(() => {
        p.classList.add('animar'); 
    }, index * 200); // Añade un pequeño retraso entre cada elemento
});

//para la lista
lista_animar.forEach((li, index) => {
    setTimeout(() => {
        li.classList.add('animar'); 
    }, index * 200); // Añade un pequeño retraso entre cada elemento
});

//para los spans
span_animar.forEach((span, index) => {
    setTimeout(() => {
        span.classList.add('animar');
    }, index * 200); // Añade un pequeño retraso entre cada elemento
});
