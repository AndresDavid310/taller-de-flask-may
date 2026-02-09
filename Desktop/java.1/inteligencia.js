// CALCULADORA DE PROMEDIO - VERSION CON INTERFAZ
function calcular() {
    // Capturamos datos desde los inputs
    let nombre = document.getElementById("nombre").value;
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;
    // Elemento donde se mostrará el resultado
    let resultado = document.getElementById("resultado");
    // Validamos datos vacíos
    if (nombre === "" || nota1 === "" || nota2 === "" || nota3 === "") {
        resultado.innerText = "Por favor completa todos los campos.";
        resultado.style.color = "orange";
        return;
    }
    // Convertimos a número
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);
    // Proceso
    let promedio = (nota1 + nota2 + nota3) / 3;
    // Decisión y cambio de color
    if (promedio >= 3) {
        resultado.innerText =
            "Aprendiz " + nombre + ", tu promedio es " + promedio + ". ¡Aprobaste!";
        resultado.style.color = "green";
    } else {
        resultado.innerText =
            "Aprendiz " + nombre + ", tu promedio es " + promedio + ". Debes mejorar.";
        resultado.style.color = "red";
    }
}