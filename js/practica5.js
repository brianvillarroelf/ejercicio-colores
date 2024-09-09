/* Hacer un CRUD:
    C (create) = ingresar un color por el input.
    R (read) = renderizar el color dentro de la ul en una li.
    U (update) = dentro del li crear un boton para actualizar y hacer que funcione.
    D (delete) = dentro del li crear un boton para eliminar y hacer que funcione.
    
    -Utilizar el localstorage para emular una base de datos donde se guarden los colores y se renderizen.

    -Por ultimo subir la carpeta practicaJs5 a su github personal.
*/
const loadColor = () => {
    let colors = JSON.parse(localStorage.getItem('colors')) || [];
    let result = "";
    let container = document.getElementById('container');
    if (colors.length == 0) {

        result += `<li>
              <div class="d-flex justify-content-center">
                <span>No hay ningún color registrado</span>
              </div>
            </li>`;
        container.innerHTML = result;
    } else {
        colors.forEach((element, i) => {
            result += `<li class="border border-3 shadow p-1">
           <div class="d-flex justify-content-between">
             <span class="my-2 bg-${element}">${element}</span>
             <div>
               <button class="btn btn-warning" onclick=editColor(${i})>
                 <i class="fa fa-pencil"></i>
               </button>
               <button class="btn btn-danger" onclick=deleteColor(${i})>
                 <i class="fa fa-trash"></i>
               </button>
             </div>
           </div>
         </li>`
        });
        container.innerHTML = result;
        localStorage.setItem("colors", JSON.stringify(colors));
    }
}

const createColor = () => {
    let color = document.getElementById('color').value;
    if (verifyColor(color)) {
        let colors = JSON.parse(localStorage.getItem('colors')) || [];
        colors.push(color.toLowerCase());
        localStorage.setItem("colors", JSON.stringify(colors));
        document.getElementById('color').value = "";
        loadColor();
    } else {
        alert("It's not color");
    }

}

const editColor = (index) => {
    let colors = JSON.parse(localStorage.getItem('colors')) || [];
    let edited = prompt("Please enter the new color: ")
    if (verifyColor(edited)) {
        colors[index] = edited;
        localStorage.setItem("colors", JSON.stringify(colors));
        loadColor();
    } else {
        alert("It's not color")
    }
}

const deleteColor = (index) => {
    let colors = JSON.parse(localStorage.getItem('colors')) || [];
    colors.splice(index, 1);
    localStorage.setItem("colors", JSON.stringify(colors));
    loadColor();
}


const verifyColor = (color) => {
    let colors = [
        "rojo",
        "verde",
        "azul",
        "amarillo",
        "morado",
        "naranja",
        "rosa",
        "marrón",
        "negro",
        "blanco",
        "gris",
        "cian",
        "magenta",
        "lima",
        "oliva",
        "azul marino",
        "turquesa",
        "aguamarina",
        "granate",
        "plateado",
        "dorado",
        "beige",
        "coral",
        "salmón",
        "índigo",
        "violeta",
        "lavanda",
        "turquesa",
        "menta",
        "durazno",
        "carmesí",
        "celeste"
    ];
    return Object.values(colors).includes(color.toLowerCase());
}

loadColor();