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
