//Aula 01
/*let js = 'amazing';
if (js === 'amazing') alert('javascript is FUN!');
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10)
console.log(23)

//aula 02 Data Type
//boolean
let javascriptIsFun = true
console.log(javascriptIsFun)

// typeof
// Mostra o tipo da variavel
console.log(typeof true);
console.log(typeof 'texto');
console.log(typeof 23);


// aula 03 let, const and var

// let a variavel pode ser mutar
// usado quando precisa mudar o valor da variavel no programa
let age = 30
age = 32

//const so pode ter o valo escolhido uma vez
// nao pode ser declarado vazio

const aniversario = 1997
//const emprego;

// var modelo antigo de declarar variavel
// foi subistituido por let

var job = 'programador'

job = 'professor'


//aula 4 Basic Operators
//math Operators ( matematica)
const agora = 2022;
const ageJonas = agora - 1992;
console.log(ageJonas)
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3  elevado a pontencia...

// assigment operators (tarefas)
let x = 10 + 5 // 15
x += 10 // x = x +10
x *= 4 // x = x * 4 =100
x++ // x = x+1 == 101
console.log(x)

// Comparison operators (comparação)

console.log(ageJonas > agora) // >, <, >=, <=
console.log(ageJonas >= 22)


// Operator Precedence
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const agora = 2022;
const ageJonas = agora - 1992;
const agejorge = agora - 1995;
console.log(agora - 1991 > agora - 2000)

console.log(25 - 10 - 5)

let x, y
x = y = 25 - 10 - 5

console.log(x, y)

const mediaAge = ((ageJonas + agejorge) / 2)


// Aula 5 Coding Chalenge

let markMass = 78
let markWeight = 1.69
let jhonMass = 92
let jhonWeight = 1.95

const markBMI = (markMass / (markWeight ** markWeight))
const jhonBMI = (jhonMass / (jhonWeight ** jhonWeight))

console.log(markBMI > jhonBMI)



// aula 6 String and Template Literals


const firstname = 'Carlos'
const job = 'Proff'
const birthYear = '1998'
const year = 2022

const jonas = "I'm " + firstname + ', a ' + (year - birthYear) + 'years old  ' + job + '!'
console.log(jonas)

//exemplo template string( usando crase da pra escrever mais facil pulando linha
)

const jonasNew = `I'm ${firstname}, a ${year - birthYear}year old ${job}`

console.log(jonasNew)



// Aula 07 Taking decisions : if /Else

const idade = 19
const idadeCarteira = idade >= 18
if (idadeCarteira) {
    console.log('pode tirar carteira')
} else {
    const faltaAnos = 18 - idade
    console.log(` so podera tirar em ${faltaAnos} anos`)
}

// Coding challenge #2

let markMass = 78
let markWeight = 1.69
let jhonMass = 92
let jhonWeight = 1.95

const markBMI = (markMass / (markWeight ** markWeight))
const jhonBMI = (jhonMass / (jhonWeight ** jhonWeight))

if (markBMI > jhonBMI) {
    console.log(`mark ${markBMI}tem o BMI maior`)
} else {
    console.log(`Jhon ${jhonBMI} tem o BMI maior`)
}



// Type Conversion and Coercion

// Conversion é quando convertemos um tipo manualmente

// Coercion é quando o javascript faz automaticamente...


//exemplo conversion
const inputYear = '1991';

console.log(inputYear + 18)
console.log(Number(inputYear))

// não funciona com letra
console.log(Number('teste'))

// coercion ( javascript  pega 2 tipos diferentees de variaveis e quando junta faz uma que faz sentido...)
console.log('I am ' + 23 + 'years')
console.log('I am ' + '23' + 'years')

console.log('23' - '10 ' - 3) // o menos trasforma em number
console.log('23' / '2')

let n = '1' + 1 // '11'
n = n -1
console.log(n)



// falsy values

// existe 5 falsy values 0 ,'', undefined, null , NaN(not a number)

console.log(Boolean('Jonas'))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean({}))
console.log(Boolean(''))


// quando tem uma variavel no if ele tenta converter pra boolean para dar o resultado mas 0 é um falsy value
const money = 0
if (money) {
    console.log(' nao gaste tudo!!')
} else {
    console.log(' procure um emprego')
}
// com outro valor vai ser um trulsy value
const money1 = 3
if (money1) {
    console.log(' nao gaste tudo!!')
} else {
    console.log(' procure um emprego')
}

let height
if (height) {
    console.log('height foi definido')
} else {
    console.log(' height is undefined')
}



// Equality Operators == vs ===

const age = 19

if (age === 19) console.log(' és um adulto')

// 3 iguals  é um oerador de igualdade estrito que so retorta true se os 2 valores vorem iguais e do mesmo tipo

18 === 19 //false
19 == 19 //false

// 2 iguais retorna  se os numeros forem iguais mas nao faz type coercion 

'18' == 18// true
10 == 10 // true

const favorite = Number(prompt("qual seu numero favorito"))
console.log(favorite)
console.log(typeof favorite)

if (favorite == 23) {
    console.log('cool 23 é foda')
}

if (favorite === 23) {
    console.log('cool 23 é foda')
} else if (favorite == 7) {
    console.log('bom tbm 7 é pica')
}

*/

// coding chalenge #3

const dolphins = (96 + 108 + 89) / 3
const koala = (88 + 91 + 110) / 3
let ganhador = ''

if (koala > dolphins) {
    ganhador = 'Koalas'
} else if (dolphins > koala) {
    ganhador = 'Dolphins'
}


if (koala > dolphins) {
    console.log(` o vencedor foram os ${koala}`)
} else if (dolphins > koala) {
    console.log(` o vencedor foram os ${ganhador} com  media de ${dolphins}`)
}