let tareas = JSON.parse(localStorage.getItem("tareasStudyIA")) || [];

const botonAgregar = document.getElementById("agregarTarea");
console.log(botonAgregar);

const listaTareas = document.getElementById("listaTareas");
console.log(listaTareas);


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
        tarea.prioridad
    );

    if(tarea.completada){
        elementoTarea.classList.add("terminada");
    }
    
    elementoTarea.innerHTML = `

        <div class="nombre-tarea">
            ${tarea.titulo}
        </div>


        <div class="fecha-tarea">
            ${tarea.fecha || "Sin fecha"}
        </div>


        <div class="prioridad-tarea">
            ${tarea.prioridad}
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

        tarea.completada = !tarea.completada;
            guardarTareas();
            mostrarTareas();

    });



    elementoTarea.querySelector(".eliminar")
    .addEventListener("click", () => {

        tareas = tareas.filter(
            t => t.id !== tarea.id
        );
        guardarTareas();
        mostrarTareas();
    });

}

function mostrarTareas(){

    listaTareas.innerHTML = "";
    actualizarContador();
    tareas.sort((a, b) => {
        if(a.completada !== b.completada){

            return a.completada - b.completada;
        }
        const prioridad = {
            alta: 1,
            media: 2,
            baja: 3

        };
        return prioridad[a.prioridad] - prioridad[b.prioridad];
    });

    tareas.forEach(tarea => {
        crearTarea(tarea);
    });
}

mostrarTareas();

function actualizarContador(){

    const pendientes = tareas.filter(
        tarea => !tarea.completada
    ).length;


    const completadas = tareas.filter(
        tarea => tarea.completada
    ).length;


    document.getElementById("contadorTareas").textContent =
    ` ${pendientes} pendientes | ${completadas} completadas`;

}