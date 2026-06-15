const materias = [
{
    id: "calculo1",
    nombre: "Cálculo de Funciones en una Variable " ,
    semestre: 1 ,
    creditos: 4,
    prerequisitos: [],
    notaFinal: null 
}, 
{
    id: "algebra1",
    nombre: "Introducción al Algebra Lineal ",
    semestre: 1,
    creditos: 3,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "ingenieriaia",
    nombre: "Introducción a la Ingeniería en Inteligencia Artificial ",
    semestre: 1,
    creditos: 2,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "quimica",
    nombre: "Química para Ingeniería  ",
    semestre: 1,
    creditos: 3,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "procesoscognitivos",
    nombre: "Procesos Cognitivos ",
    semestre: 1,
    creditos: 3,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "calculo2",
    nombre: "Cálculo de Funciones en Varias Variables ",
    semestre: 2,
    creditos: 3,
    prerequisitos: ["calculo1"],
    notaFinal: null
}, 
{
    id: "algebra2",
    nombre: "Algebra Lineal en Espacios Vectoriales Generales ",
    semestre: 2,
    creditos: 3,
    prerequisitos: ["algebra1"],
    notaFinal: null
}, 
{
    id: "matematicasdiscretas",
    nombre: "Matemáticas Discretas ",
    semestre: 2,
    creditos: 2,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "mecanica",
    nombre: "Mecánica ",
    semestre: 2,
    creditos: 3,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "algoritmosyprogramacion",
    nombre: "Algoritmos y Programación ",
    semestre: 2,
    creditos: 3,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "ingles1",
    nombre: "Lengua Extranjera I: Inglés ",
    semestre: 2,
    creditos: 2,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "ecuacionesdiferenciales",
    nombre: "Ecuaciones Diferenciales ",
    semestre: 3,
    creditos: 3,
    prerequisitos: ["calculo2"],
    notaFinal: null
}, 
{
    id: "estadistica",
    nombre: "Estadística Descriptiva y Probabilidades ",
    semestre: 3,
    creditos: 3,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "representaciondedatos",
    nombre: "Visualización y Representación de Datos ",
    semestre: 3,
    creditos: 2,
    prerequisitos: ["algebra2"],
    notaFinal: null
}, 
{
    id: "laboratorio",
    nombre: "Laboratorio de Mecánica ",
    semestre: 3,
    creditos: 2,
    prerequisitos: ["mecanica"],
    notaFinal: null
}, 
{
    id: "estructuradedatos",
    nombre: "Estructura de Datos ",
    semestre: 3,
    creditos: 2,
    prerequisitos: ["algoritmosyprogramacion"],
    notaFinal: null
}, 
{
    id: "deportes",
    nombre: "Cultura Física y Deportes ",
    semestre: 3,
    creditos: 1,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "ingles2",
    nombre: "Lengua Extranjera II: Inglés ",
    semestre: 3,
    creditos: 2,
    prerequisitos: ["ingles1"],
    notaFinal: null
}, 
{
    id: "metodosnumericos",
    nombre: "Métodos Numéricos y Optimización ",
    semestre: 4,
    creditos: 3,
    prerequisitos: ["ecuacionesdiferenciales"],
    notaFinal: null
}, 
{
    id: "estadisticainferencial",
    nombre: "Estadística Inferencial ",
    semestre: 4,
    creditos: 3,
    prerequisitos: ["estadistica"],
    notaFinal: null
}, 
{
    id: "aprendizajemaquina",
    nombre: "Aprendizaje de Máquina ",
    semestre: 4,
    creditos: 3,
    prerequisitos: ["estadistica"],
    notaFinal: null
}, 
{
    id: "programacionorientadaaobjetos",
    nombre: "Programación Orientada a Objetos ",
    semestre: 4,
    creditos: 3,
    prerequisitos: ["estructuradedatos"],
    notaFinal: null
}, 
{
    id: "procesamiento",
    nombre: "Procesamiento de Información Humana e Inteligencia Artificial ",
    semestre: 4,
    creditos: 2,
    prerequisitos: ["procesoscognitivos"],
    notaFinal: null
}, 
{
    id: "ingles3",
    nombre: "Lengua Extranjera III: Inglés ",
    semestre: 4,
    creditos: 2,
    prerequisitos: ["ingles2"],
    notaFinal: null
}, 
{
    id: "pln",
    nombre: "Procesamiento del Lenguaje Natural  ",
    semestre: 5,
    creditos: 3,
    prerequisitos: ["aprendizajemaquina"],
    notaFinal: null
}, 
{
    id: "aprendizajeprofundo",
    nombre: "Aprendizaje Profundo ",
    semestre: 5,
    creditos: 3,
    prerequisitos: ["aprendizajemaquina"],
    notaFinal: null
}, 
{
    id: "electivaIntegral1",
    nombre: "Electiva Formacion Integral I ",
    semestre: 5,
    creditos: 3,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "basesdedatos",
    nombre: "Bases de Datos ",
    semestre: 5,
    creditos: 3,
    prerequisitos: ["programacionorientadaaobjetos"],
    notaFinal: null
}, 
{
    id: "iaysociedad",
    nombre: "IA y sociedad  ",
    semestre: 5,
    creditos: 2,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "ingles4",
    nombre: "Lengua Extranjera IV: Inglés ",
    semestre: 5,
    creditos: 2,
    prerequisitos: ["ingles3"],
    notaFinal: null
}, 
{
    id: "visioncomputadora",
    nombre: "Visión por Computadora ",
    semestre: 6,
    creditos: 3,
    prerequisitos: ["pln"],
    notaFinal: null
}, 
{
    id: "iagenerativa1",
    nombre: "IA Generativa I ",
    semestre: 6,
    creditos: 3,
    prerequisitos: ["pln"],
    notaFinal: null
}, 
{
    id: "aprendizajenosupervisado",
    nombre: "Aprendizaje No Supervisado ",
    semestre: 6,
    creditos: 3,
    prerequisitos: ["aprendizajeprofundo"],
    notaFinal: null
}, 
{
    id: "ingenieriasoftware",
    nombre: "Ingeniería de Software ",
    semestre: 6,
    creditos: 3,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "eticaia",
    nombre: "Ética en IA ",
    semestre: 6,
    creditos: 2,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "electivaIntegral2",
    nombre: "Electiva Formacion Integral II ",
    semestre: 6,
    creditos: 2,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "disenoingenieria1",
    nombre: "Diseño en ingeniería I ",
    semestre: 7,
    creditos: 4,
    prerequisitos: ["aprendizajeprofundo"],
    notaFinal: null
}, 
{
    id: "iagenerativa2",
    nombre: "IA Generativa II ",
    semestre: 7,
    creditos: 3,
    prerequisitos: ["iagenerativa1"],
    notaFinal: null
}, 
{
    id: "aprendizajerefuerzo",
    nombre: "Aprendizaje por Refuerzo ",
    semestre: 7,
    creditos: 3,
    prerequisitos: ["aprendizajenosupervisado"],
    notaFinal: null
}, 
{
    id: "electivadisciplina1",
    nombre: "Electiva Disciplinar I ",
    semestre: 7,
    creditos: 3,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "gestionproyectos",
    nombre: "Gestión de Proyectos Software ",
    semestre: 7,
    creditos: 3,
    prerequisitos: ["ingenieriasoftware"],
    notaFinal: null
}, 
{
    id: "disenoproductos",
    nombre: "Diseño de Productos de IA   ",
    semestre: 8,
    creditos: 4,
    prerequisitos: ["disenoingenieria1"],
    notaFinal: null
}, 
{
    id: "cd4ml",
    nombre: "CD4ML",
    semestre: 8,
    creditos: 3,
    prerequisitos: ["ingenieriasoftware"],
    notaFinal: null
}, 
{
    id: "electivadisciplina2",
    nombre: "Electiva Disciplinar II ",
    semestre: 8,
    creditos: 4,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "electivadisciplina3",
    nombre: "Electiva Disciplinar III ",
    semestre: 8,
    creditos: 4,
    prerequisitos: [],
    notaFinal: null
}, 
{
    id: "electivatransdisciplinar",
    nombre: "Electiva Transdisciplinar ",
    semestre: 8,
    creditos: 3,
    prerequisitos: [],
    notaFinal: null
}, 
]; 
