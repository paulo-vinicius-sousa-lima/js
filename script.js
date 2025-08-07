const readline = require('readline-sync');
let salarios = [];

for (let i = 0; i < 4; i++) {
  let salario = Number(readline.question(`Salário do professor [${i}]: `));
  salarios.push(salario);
}

for (let i = 0; i < salarios.length - 1; i++) {
  for (let j = 0; j < salarios.length - 1 - i; j++) {
    if (salarios[j] < salarios[j + 1]) {
      let temp = salarios[j];
      salarios[j] = salarios[j + 1];
      salarios[j + 1] = temp;
    }
  }
}

console.log("Salários ordenados (maior → menor):", salarios);


































// READLINE SYNC

/*

const readline = require('readline-sync');

let linhas = 3;
let colunas = 3; 
let matriz = [];

for (let i = 0; i < linhas; i++) {
  matriz[i] = []; 
  matriz[i][0] = readline.question(`Nome do aluno ${i + 1}: `);
  for (let j = 1; j < colunas; j++) {
    matriz[i][j] = parseFloat(readline.question(`Nota ${j} do aluno ${matriz[i][0]}: `));
  }
}

console.table(matriz);

*\

// Vetor interativo via terminal

/* 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vetor = new Array(5);
let i = 0;

function perguntar() {
  if (i < 5) {
    rl.question(`Valor da posição [${i}]: `, function(valor) {
      vetor[i] = valor;
      i++;
      perguntar();
    });
  } else {
    rl.close();
    console.log("Vetor preenchido:", vetor);
  }
}

perguntar();
*\

// Length

/*
var vetor = new Array(20);

console.log("O tamanho desse vetor é " + vetor.length);
*\

// Array com números aleatórios

/* var array = new Array(10);

for(var i = 0; i < 10; i++){
    array[i] = Math.floor(Math.random() * 10);
    console.log("Na posição " + i + " temos o valor: " + array[i]);
}
*\

// Array Simples

/*var nome = new Array(5);

nome[0] = "P";
nome[1] = "a";
nome[2] = "u";
nome[3] = "l";
nome[4] = "o";

for(var i = 0; i < 5; i++){
    console.log(nome[i]);
}*\

/*

// Exercício do fatorial

function fatorial(n) {
    if (n === 0 || n === 1) return 1;

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function(num) {
    num = parseInt(num); 
    if (isNaN(num) || num < 0) {
        console.log("Por favor, digite um número inteiro não negativo.");
    } else {
        const fat = fatorial(num);
        console.log(`O fatorial de ${num} é: ${fat}`);
    }
    rl.close();
});

*/

/*

// EXERCÍCIO DA TABUADA

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número inteiro: ', (input) => {
    const n = parseInt(input, 10); 

    if (!isNaN(n)) { 
        console.log(`Tabuada do ${n}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${n} x ${i} = ${n * i}`);
        }
    } else {
        console.log('Entrada inválida! Digite um número inteiro.');
    }

    rl.close();
});

*/