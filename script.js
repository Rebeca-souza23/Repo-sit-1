function calcularIMC() {

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Digite valores válidos!";
        resultado.style.color = "red";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    resultado.style.color = "green";
    resultado.innerHTML =
        `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>${classificacao}`;
}
