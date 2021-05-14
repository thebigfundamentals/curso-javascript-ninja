/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/

let championship = 'Brasileirão';
console.log(championship)

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/

let teams = ['Corinthians', 'Palmeiras', 'São Paulo', 'Santos', 'RB Bragantino']

console.log('Times que estão participando do campeonato:', teams);


/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/

let showTeamPosition = function (x) {
    x = --x;
    if (x < teams.length) {
        console.log(`O time que está em ${x + 1}º lugar é o nome ${teams[x]}.`)
    }
    else {
        console.log('Não temos a informação sobre o time que está nessa posição.')
    }
}



/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

showTeamPosition(1);
showTeamPosition(2);
showTeamPosition(3);
showTeamPosition(6);

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
let counter = 20;
while (counter <= 30) {
    console.log(counter);
    counter++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/

let convertToHex = function (cor) {
    let vermelho = 'FC0606';
    let azul = '0663FC';
    let amarelo = 'F1FC06';
    let verde = '06FC33';
    let preto = '000000';

    switch (cor) {
        case 'vermelho':
            console.log(`O hexadecimal para ${cor} é ${vermelho}.`);
            break;
        case 'azul':
            console.log(`O hexadecimal para ${cor} é ${azul}.`);
            break;
        case 'amarelo':
            console.log(`O hexadecimal para ${cor} é ${amarelo}.`);
            break;
        case 'verde':
            console.log(`O hexadecimal para ${cor} é ${verde}.`);
            break;
        case 'preto':
            console.log(`O hexadecimal para ${cor} é ${preto}.`);
            break;
        default:
            console.log(`Não temos o equivalente hexadecimal para ${cor}.`)
    }
};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex('azul');
convertToHex('verde');
convertToHex('amarelo');
convertToHex('roxo');
convertToHex('vermelho');
convertToHex('cinza');
convertToHex('preto');
convertToHex('branco');