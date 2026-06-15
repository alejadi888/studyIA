const contenedor = document.getElementById("malla");

actualizarMalla();

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

        materia.notaFinal = Number(input.value);

        modal.classList.add("oculto");

        actualizarMalla();
    };

        cerrar.onclick = () => {
        modal.classList.add("oculto");
    };


    borrar.onclick = () => {

        materia.notaFinal = null;

        input.value = "";

        modal.classList.add("oculto");

        actualizarMalla();
    };


}

function actualizarMalla(){

    contenedor.innerHTML = "";

    for (let semestre = 1; semestre <= 8; semestre++) {

        const columna = document.createElement("div");
        columna.classList.add("semestre");

        columna.innerHTML = `
            <h2>Semestre ${semestre}</h2>
            <p class="promedio-semestre">
                -
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