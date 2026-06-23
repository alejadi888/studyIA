const botonAgregar = document.getElementById("agregarTarea");

const listaTareas = document.getElementById("listaTareas");


botonAgregar.addEventListener("click", () => {


    const titulo = document.getElementById("tituloTarea").value;

    const fecha = document.getElementById("fechaTarea").value;

    const prioridad = document.getElementById("prioridadTarea").value;



    if(titulo === ""){
        alert("Escribe el nombre de la tarea");
        return;
    }



    crearTarea(titulo, fecha, prioridad);



    document.getElementById("tituloTarea").value = "";

});





function crearTarea(titulo, fecha, prioridad){


    const tarea = document.createElement("div");

    tarea.classList.add("tarea");


    tarea.innerHTML = `

        <h3>
            ${titulo}
        </h3>


        <p>
            ${fecha || "Sin fecha"}
        </p>


        <p>
            Prioridad: ${prioridad}
        </p>


        <button class="completar">
            Completar
        </button>


        <button class="eliminar">
            Eliminar
        </button>

    `;



    listaTareas.appendChild(tarea);



    tarea.querySelector(".completar")
    .addEventListener("click", () => {

        tarea.classList.toggle("terminada");

    });



    tarea.querySelector(".eliminar")
    .addEventListener("click", () => {

        tarea.remove();

    });


}