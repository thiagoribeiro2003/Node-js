let dolar = 5.09;
let dolar10 = 10 * dolar;
console.log(`U$ 10 equivale a R$ ${dolar10} `);
console.log('---------------------------');

let aluno = 'Chaves';
let nota1 = 7.58;
let nota2 = 9.12;
let media = (nota1 + nota2) / 2;
console.log(nota1, nota2, media);

let situacao;
if(media >= 7 ){
    situacao = "Aprovado";
} else {
    situacao = 'Reprovado';
}

// console.log(`O aluno ${aluno} alcançou média ${media} e esta ${situacao}`);
console.log("O aluno "+ aluno+ " alcançou média " +media+" e esta "+situacao);
console.log('---------------------------');


var dados = {
    nome : 'Malvadão',
    idade : 38
}
// Dentro de um objeto quando eu quero acessar um dado específico tem que colocar o nomedoobjeto.nomedodado que vc quer
console.table(dados.nome);
console.table(dados.idade);

