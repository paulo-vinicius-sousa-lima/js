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