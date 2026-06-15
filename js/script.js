const contenedor = document.getElementById("malla");

materias.forEach(materia => {
    const tarjeta = document.createElement("div");

    tarjeta.classList.add("materia");
    tarjeta.classList.add("desbloqueada");

    tarjeta.innerHTML = `
        <h3>${materia.nombre}</h3>
        <div>
            <span>${materia.creditos} créditos</span>
            <span>-</span>
        </div>
    `;

    contenedor.appendChild(tarjeta);
});