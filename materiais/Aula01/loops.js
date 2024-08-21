
// For, While e Do While
// do as condições envolvem comparar o mesmo valor com diferentes constantes. O switch pode tornar o código mais limpo e legível em certos casos.
// O loop for é ideal quando você sabe de antemão quantas vezes deseja repetir um bloco de código.
// O loop while é usado quando você não sabe exatamente quantas vezes o código deve ser repetido, mas sabe que a repetição deve continuar enquanto uma condição for verdadeira.
// O loop do...while é semelhante ao while, mas com uma diferença crucial: o bloco de código é executado pelo menos uma vez, porque a condição é verificada depois que o código é executado.
// Qualquer laço vai imprimir os números de 0 a 4
console.log("FOR----------");
for (let a = 0; a < 5; a++) {
console.log(a);
}
console.log("WHILE----------");
let b = 0;
while (b < 5) {
console.log(b);
b++;
}
console.log("DO WHILE----------");
let i = 0;
do {
console.log(i);
i++;
} while (i < 5);