import chalk from 'chalk';
console.log(chalk.blue("Trabalhando com NPM"));

let aluno = 'Thiago';
let idade = 15

if(idade >= 18){
    console.log(`${aluno} ${chalk.green('é maior de idade!')}`);
} else {
    console.log((`${aluno} ${chalk.bgGreenBright.white('é menor de idade!')}`));
}

// Para instalar o chalk utilizamos o comando npm install chalk

// Chalk é um dos muitos pacotes disponiveis no repositório npmjs.com