// menu desplegable - menu bocadillo

const botones = document.querySelectorAll(".abrir,.cerrar");
const navegacion = document.querySelector("nav");

function toggleNavegacion (){
    navegacion.classList.toggle("desplegado");
}

for(let i= 0; i < botones.length; i++){
    botones[i].addEventListener("click", toggleNavegacion);
}


// animación entrada

var elementosAnimar = document.querySelectorAll(".animar");

// para mostrar elementos con retraso
function mostrarElementosConRetraso(elementos, retraso) {
    elementos.forEach(function(elemento, i) {
        setTimeout(function() {
            elemento.classList.add("mostrar");
        }, i * retraso);
    });
}

// llamar a la función para mostrar elementos con un retraso de 300ms
mostrarElementosConRetraso(elementosAnimar, 300);










