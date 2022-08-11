function soma(valor1, valor2) {
    return valor1 + valor2;
};

function multiplica(valor1, valor2){
    return valor1 * valor2;
};

function divide(valor1, valor2){
    return valor1 / valor2;
}
//Exportando as funções
export {soma, multiplica, divide}; // export default serve para exportar somente uma função

// MODULO É UM CONJUNTO DE FUNÇÕES DENTRO DE UM ARQUIVO

// SEM O package.json ele nao aceita os modulos

