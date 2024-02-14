// Obtener nodos del DOM para elementos relacionados con las opciones

const padre = document.querySelectorAll('.option');
const hijos = document.querySelectorAll('.option__container-extract--height');
const btnPLus = document.querySelectorAll('.option__btn-plus');
const btnMinus = document.querySelectorAll('.option__btn-minus');


// Añadir un evento de clic a cada elemento padre
padre.forEach((padre, index) => {
    padre.addEventListener('click', () => {
         // Determinar la altura deseada del contenedor (abierto o cerrado)
        let height = 0;
        if (hijos[index].clientHeight == "0") {
            height = hijos[index].scrollHeight;
        }

        // Aplicar la altura calculada al contenedor
        hijos[index].style.height = `${height}px`;

        // Alternar la visibilidad de los botones (más y menos)
        btnPLus[index].classList.toggle('hidden');
        btnMinus[index].classList.toggle('hidden');
    });
});