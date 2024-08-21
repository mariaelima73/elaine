//Declarando Variáveis em JavaScript
var x;
let y;
const z = 10; // const precisa ser inicializado no momento da declaração.
//Tipagem para conter números, textos e listas
var number = 123; // número
console.log(number);

var text = "Olá, Mundo!"; // texto (string)
console.log(text);
var list = [1, 2, 3, 4, 5]; // lista (array)
//Nomes de Variaveis
let myVariable = "correto"; //  Recomendado - usando camelCase
let _privateVar = "correto"; // variavel privada
let $specialVar = "correto"; // variavel não recomendado utilizada no jQuery
// let 123 wrong = "errado"; // Nomes não podem começar com números!



// Switch
// A instrução switch é outra estrutura de controle de fluxo que pode ser usada como alternativa ao if...else if...else quando você tem várias condições para avaliar, especialmente quan
let fruta = "maçã";
switch (fruta) {
case "banana":
console.log("Eu sou uma banana!");
break;
case "maçã":
console.log("Eu sou uma maçã!");
break;
default:
console.log("Não sei que fruta sou.");
}

// Switch 2 Exemplo
let animal = "gato";
switch (animal) {
case "cachorro":
console.log("Au au!");
break;
case "gato":
console.log("Miau!");
break;
default:
console.log("Não sei que som faço.");
}
