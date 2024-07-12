var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");


function criptografar() {
  var texto = textInput.value;

  var resultCripto = texto.replace(/e/gi, "enter")
  .replace(/i/gi, "imes")
  .replace(/a/gi, "ai")
  .replace(/o/g, "ober")
  .replace(/u/g, "ufat")

  document.getElementById('output').innerHTML = '<textarea readonly id="result">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="result">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('result');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  