let tareas = JSON.parse(localStorage.getItem("tareasStudyIA")) || [];

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



    const nuevaTarea = {
        id: Date.now(),
        titulo: titulo,
        fecha: fecha,
        prioridad: prioridad,
        completada: false
    };
    tareas.push(nuevaTarea);
    guardarTareas();
    mostrarTareas();

    document.getElementById("tituloTarea").value = "";

});


function guardarTareas(){

    localStorage.setItem(
        "tareasStudyIA",
        JSON.stringify(tareas)
    );

}


function crearTarea(tarea){
    const elementoTarea = document.createElement("div");
    elementoTarea.classList.add(
        "tarea",
        datosTarea.prioridad
    );
    
    elementoTarea.innerHTML = `

        <div class="nombre-tarea">
            ${tarea.titulo}
        </div>


        <div class="fecha-tarea">
            ${fecha || "Sin fecha"}
        </div>


        <div class="prioridad-tarea">
            ${prioridad}
        </div>


        <div class="botones-tarea">

            <button class="completar">
                Completar
            </button>


            <button class="eliminar">
                Eliminar
            </button>

        </div>

    `;



    listaTareas.appendChild(elementoTarea);

    elementoTarea.querySelector(".completar")
    .addEventListener("click", () => {

        datosTarea.completada = !datosTarea.completada;
            guardarTareas();
            mostrarTareas();

    });



    elementoTarea.querySelector(".eliminar")
    .addEventListener("click", () => {

        tareas = tareas.filter(
            t => t.id !== datosTarea.id
        );
        guardarTareas();
        mostrarTareas();
    });

}

function mostrarTareas(){

    listaTareas.innerHTML = "";
    tareas.forEach(tarea => {
        crearTarea(tarea);
    });
}

mostrarTareas();