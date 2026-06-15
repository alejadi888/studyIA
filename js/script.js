const contenedor = document.getElementById("malla");

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
        tarjeta.classList.add("desbloqueada");

        tarjeta.innerHTML = `
        <h3 class="nombre-materia">${materia.nombre}</h3>
        <div class="info-materia">
            <span>${materia.creditos} créditos</span>
            <span>${materia.notaFinal ?? "-"}</span>
        </div>
    `;
        columna.appendChild(tarjeta);

    });


    contenedor.appendChild(columna);
}