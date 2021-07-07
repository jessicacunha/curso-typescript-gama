"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = 'Jessica Fontes';
// Array
var idades = [23, 28, 45, 32, 48];
var idades2 = [23, 345, 456, 46];
// Tuple
var jogadores;
jogadores = ['Vitor', 10, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any 
var retornoDaAPI = [123, 'Jessica', false];
var retornoDaAPI2 = {};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(Object) {
}
criar({
    propriedade: 1,
});
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Tyoes
function exibirNota(nota) {
    console.log("A nota \u00E9 ' + " + nota);
}
exibirNota('10');
exibirNota(10);
// type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Jessica',
        sobrenome: 'Fontes',
        dataNascimento: new Date()
    },
    {
        nome: 'Nicolas',
        sobrenome: 'Fontes',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Vitor',
    telefone1: '123456789',
};
// Type Assertion
var minhaIdade = 27;
minhaIdade.toString();
var input = document.getElementById("numero1");
console.log(input.value);
