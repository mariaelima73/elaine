// Usando Condicionais e Loops no JavaScript
// As instruções if e else são fundamentais em praticamente todas as linguagens de programação, pois permitem que o código tome decisões com base em condições específicas. Aqui está uma explicação detalhada e significativa de como if e else funcionam:

// Conceito
// if: A palavra-chave if é usada para verificar se uma determinada condição é verdadeira (true). Se for, o bloco de código dentro do if é executado.
// else: A palavra-chave else é usada para definir o que deve ser feito caso a condição no if seja falsa (false). O bloco de código dentro do else só será executado se a condição no if não for atendida.
// if = se
// else = se não
// else if = senão se

let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
}
let chuva = true;
if (chuva) {
    console.log("Leve um guarda-chuva!");
}


let sol = false;
if (sol) {
    console.log("Use óculos de sol.");
} else {
    console.log("Você não precisa de óculos de sol.");
}
let temperatura = 15;
if (temperatura > 30) {
    console.log("Está muito quente!");
} else if (temperatura > 20) {
    console.log("Está quente.");
} else {
    console.log("Está frio.");
}