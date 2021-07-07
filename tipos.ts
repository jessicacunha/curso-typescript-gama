// Boolean

const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Jessica Fontes'

// Array
const idades: number[] = [23, 28, 45, 32, 48];
const idades2: Array<number> = [23, 345, 456, 46]

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['Vitor', 10, true];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any 
const retornoDaAPI: any[]= [123, 'Jessica', false];
const retornoDaAPI2: any = {
};

// Void
function printarNaTela(msg: string){
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(Object: object){
    }
criar({
    propriedade: 1,
})

// Never
function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem: string): never{
    throw new Error(mensagem);
}

function falha(){
    return erro('Algo falhou');
}

// Union Tyoes
function exibirNota(nota: number | string) {
    console.log(`A nota é ' + ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias

type Funcionarios = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionarios[] = [{
    nome: 'Jessica',
    sobrenome: 'Fontes',
    dataNascimento: new Date()
},
{
    nome: 'Nicolas',
    sobrenome: 'Fontes',
    dataNascimento: new Date()
}]

function tratarFuncionarios(funcionarios: Funcionarios[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionario: ', funcionario.nome);
    }

}

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

const contato: Contato = {
    nome: 'Vitor',
    telefone1: '123456789',
}

// Type Assertion
const minhaIdade: any = 27;
(minhaIdade as boolean).toString();

const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);
