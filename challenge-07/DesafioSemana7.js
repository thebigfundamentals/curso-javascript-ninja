/*
Crie um array com 5 items (tipos variados).
*/
let arr = [1, 'gsc', null, undefined, 0]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
let addItem = function (x) {
    arr.push(x);
    return arr;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

console.log(addItem([5, 'mdn', NaN]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log(`O segundo elemento do segundo array é ${arr[5][1]}`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O primeiro array tem ${arr.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arr[5].length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('Números pares entre 10 e 20:');
let qtd = 10;
while (qtd <= 20) {
    qtd % 2 === 0 ? console.log(qtd) : console.log("");
    qtd++
};

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('Números ímpares entre 10 e 20:');
let qtdImp = 10;
while (qtdImp <= 20) {
    qtdImp % 2 !== 0 ? console.log(qtdImp) : console.log("");
    qtdImp++
};

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

console.log('Números pares entre 100 e 120:');

for (let qtdPar = 100; qtdPar <= 120; qtdPar++) {
    qtdPar % 2 === 0 ? console.log(qtdPar) : console.log("");
    qtdPar++
};

console.log('Números ímpares entre 111 e 125:');
for (let qtdImpar2 = 111; qtdImpar2 <= 125; qtdImpar2++) {
    qtdImpar2 % 2 !== 0 ? console.log(qtdImpar2) : console.log("");
    qtdImpar2++
};