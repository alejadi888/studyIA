const contenedor = document.getElementById("malla");

let materiaAnimada = null;
cargarNotas();
actualizarMalla();

function guardarNotas(){

    localStorage.setItem(
        "notasStudyIA",
        JSON.stringify(materias)
    );

}

function cargarNotas(){

    const datosGuardados = localStorage.getItem("notasStudyIA");


    if(datosGuardados){

        const materiasGuardadas = JSON.parse(datosGuardados);


        materiasGuardadas.forEach(materiaGuardada => {

            const materia = materias.find(
                m => m.id === materiaGuardada.id
            );


            if(materia){

                materia.notaFinal = materiaGuardada.notaFinal;

            }

        });

    }

}

function calcularEstado(materia) {

    // Si ya tiene nota
    if (materia.notaFinal !== null) {

    if (materia.notaFinal >= 3) {
        return "aprobada";
    } else {
        return "repetir";
    }

}

    // Revisar prerrequisitos
    const requisitosCumplidos = materia.prerequisitos.every(id => {

        const requisito = materias.find(
            materia => materia.id === id
        );

        return requisito.notaFinal >= 3;
    });


    if (requisitosCumplidos) {
        return "desbloqueada";
    }


    return "bloqueada";
}

function abrirModal(materia){

    const modal = document.getElementById("modal");
    const nombre = document.getElementById("nombreMateria");
    const input = document.getElementById("notaInput");
    const boton = document.getElementById("guardarNota");
    const cerrar = document.getElementById("cerrarModal");
    const borrar = document.getElementById("borrarNota");


    nombre.textContent = materia.nombre;

    input.value = materia.notaFinal ?? "";


    modal.classList.remove("oculto");


    boton.onclick = () => {

        const nota = Number(input.value);

            if (isNaN(nota)) {
                alert("Ingresa una nota válida");
                return;
            }


            if (nota < 0 || nota > 5) {
                alert("La nota debe estar entre 0 y 5");
                return;
            }

        materia.notaFinal = nota;  

        materiaAnimada = materia.id;

        guardarNotas();

        modal.classList.add("oculto");

        actualizarMalla();
    };

        cerrar.onclick = () => {
        modal.classList.add("oculto");
    };


    borrar.onclick = () => {

        materia.notaFinal = null;

        guardarNotas();

        input.value = "";

        modal.classList.add("oculto");

        actualizarMalla();
    };


}

function actualizarMalla(){

    contenedor.innerHTML = "";
    document.getElementById("promedio-acumulado").textContent =
        calcularPromedioAcumulado();

    const progreso = calcularProgreso();

    document.getElementById("creditos-progreso").textContent =
    `${progreso.aprobados} / ${progreso.total} créditos (${progreso.porcentaje}%)`;

    document.getElementById("barra").style.width =
    `${progreso.porcentaje}%`;

    for (let semestre = 1; semestre <= 8; semestre++) {

        const columna = document.createElement("div");
        columna.classList.add("semestre");

        const promedioSemestre = calcularPromedioSemestre(semestre);
        columna.innerHTML = `
            <h2>Semestre ${semestre}</h2>
            <p class="promedio-semestre">
                ${promedioSemestre}
            </p>
        `;


        const materiasSemestre = materias.filter(
            materia => materia.semestre === semestre
        );


        materiasSemestre.forEach(materia => {

            const tarjeta = document.createElement("div");

            tarjeta.classList.add("materia");

            const estado = calcularEstado(materia);
            tarjeta.classList.add(estado);
                if (materia.id === materiaAnimada && estado === "aprobada") {
                    tarjeta.classList.add("animacion-aprobada");
                }

        let contenidoAtras = "";

        if (estado === "bloqueada") {

            const faltantes = obtenerPrerequisitosFaltantes(materia);

            contenidoAtras = `
                <h3> </h3>
                <p>Prerequisito:</p>
                <p>${faltantes.join(", ")}</p>
            `;

        } else if (estado === "aprobada") {

            contenidoAtras = `
                <h3> Aprobada</h3>
                <p>Nota: ${materia.notaFinal}</p>
                <p>${materia.creditos} créditos</p>
            `;

        } else {

            contenidoAtras = `
                <h3> Disponible</h3>
                <p>Lista para cursar</p>
            `;

        }

        if (materia.prerequisitos.length > 0) {

            tarjeta.innerHTML = `

                <div class="tarjeta-inner">

                    <div class="frente">

                        <h3 class="nombre-materia">
                            ${materia.nombre}
                        </h3>

                        <div class="info-materia">
                            <span>
                                ${materia.creditos} créditos
                            </span>

                            <span>
                                ${materia.notaFinal ?? "-"}
                            </span>
                        </div>

                    </div>


                    <div class="atras">

                        ${contenidoAtras}

                    </div>

                </div>

        `;

        } else {

            tarjeta.innerHTML = `

                <h3 class="nombre-materia">
                    ${materia.nombre}
                </h3>

                <div class="info-materia">

                    <span>
                        ${materia.creditos} créditos
                    </span>

                    <span>
                        ${materia.notaFinal ?? "-"}
                    </span>

                </div>

        `;

        }

            if (estado !== "bloqueada") {

                tarjeta.addEventListener("click", () => {
                    abrirModal(materia);
                });

            }


            columna.appendChild(tarjeta);

        });


        contenedor.appendChild(columna);

    }
}

function calcularPromedioSemestre(numeroSemestre){

    const materiasSemestre = materias.filter(
        materia => materia.semestre === numeroSemestre
    );


    let sumaNotas = 0;
    let sumaCreditos = 0;


    materiasSemestre.forEach(materia => {

        if(materia.notaFinal !== null){

            sumaNotas += materia.notaFinal * materia.creditos;
            sumaCreditos += materia.creditos;

        }

    });


    if(sumaCreditos === 0){
        return "-";
    }


    return (sumaNotas / sumaCreditos).toFixed(2);

}

function calcularPromedioAcumulado(){

    let sumaNotas = 0;
    let sumaCreditos = 0;


    materias.forEach(materia => {

        if(materia.notaFinal !== null){

            sumaNotas += materia.notaFinal * materia.creditos;
            sumaCreditos += materia.creditos;

        }

    });


    if(sumaCreditos === 0){
        return "-";
    }


    return (sumaNotas / sumaCreditos).toFixed(2);

}

function calcularProgreso(){

    let creditosAprobados = 0;
    let creditosTotales = 0;


    materias.forEach(materia => {

        creditosTotales += materia.creditos;


        if(materia.notaFinal !== null && materia.notaFinal >= 3){

            creditosAprobados += materia.creditos;

        }

    });


    const porcentaje = 
        (creditosAprobados / creditosTotales) * 100;


    return {
        aprobados: creditosAprobados,
        total: creditosTotales,
        porcentaje: porcentaje.toFixed(1)
    };

}

function obtenerPrerequisitosFaltantes(materia){

    return materia.prerequisitos
        .map(id => materias.find(m => m.id === id))
        .filter(m => m && (m.notaFinal === null || m.notaFinal < 3))
        .map(m => m.nombre);

}