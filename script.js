let btn = document.getElementById("btn-calcular");

btn.addEventListener("click", function (event){
  event.preventDefault();
  
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let imc = peso / (altura * altura);
  let imcValue = document.getElementById("imc-value");
  let imcClassification = document.getElementById("imc-classification");
  
  imcValue.textContent = imc.toFixed(2);
  
  if (imc < 18.5) {
    imcClassification.textContent = "Abaixo do peso";
  } else if (imc < 25) {
    imcClassification.textContent = "Peso normal";
  } else if (imc < 30) {
    imcClassification.textContent = "Sobrepeso";
  } else if (imc < 35) {
    imcClassification.textContent = "Obesidade grau 1";
  } else if (imc < 40) {
    imcClassification.textContent = "Obesidade grau 2";
  } else {
    imcClassification.textContent = "Obesidade grau 3";
  }
});
