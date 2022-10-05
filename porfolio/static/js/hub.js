var body = document.getElementById('body')

var titulo = document.getElementById('titulo')

var conteinerEstilos = document.getElementById("conconteiner-estilos")

var EstiloOjos = document.getElementById('ojos')
var porfolio2 = document.getElementById('porfolio2')
var space = document.getElementById('space')

var proximamente3 = document.getElementById('proximamente3')
var proximamente4 = document.getElementById('proximamente4')
var proximamente5 = document.getElementById('proximamente5')
var proximamente6 = document.getElementById('proximamente6')
var proximamente7 = document.getElementById('proximamente7')
var proximamente8 = document.getElementById('proximamente8')

var contacto = document.getElementById('contacto')

EstiloOjos.addEventListener("mouseover", function (event) {
    titulo.style.fontFamily = 'Cinzel'
    contacto.style.fontFamily = 'Cinzel'
}, false);

EstiloOjos.addEventListener("mouseout", function (event) {
    titulo.style.fontFamily = 'lemonmilk'
    contacto.style.fontFamily = 'lemonmilk'

}, false);

porfolio2.addEventListener("mouseover", function (event) {
    titulo.style.fontFamily = 'chakra'
    contacto.style.fontFamily = 'chakra'
}, false);

porfolio2.addEventListener("mouseout", function (event) {
    titulo.style.fontFamily = 'lemonmilk'
    contacto.style.fontFamily = 'lemonmilk'

}, false);


space.addEventListener("mouseover", function (event) {
    titulo.style.fontFamily = 'dreamscape'
    contacto.style.fontFamily = 'dreamscape'
}, false);

space.addEventListener("mouseout", function (event) {
    titulo.style.fontFamily = 'lemonmilk'
    contacto.style.fontFamily = 'lemonmilk'

}, false);




let start = 0;
let end = 8;
var numberEstilo = Math.floor(Math.random() * (end - start + 1)) + start;

if (numberEstilo == 1) {
    body.style.backgroundColor = '#798C83'

    titulo.style.color = '#2B4040'

    conteinerEstilos.style.backgroundColor = '#2B4040'


    EstiloOjos.style.background = '#465956'
    proximamente2.style.background = '#465956'
    proximamente3.style.background = '#465956'
    proximamente4.style.background = '#465956'
    proximamente5.style.background = '#465956'
    proximamente6.style.background = '#465956'
    proximamente7.style.background = '#465956'
    proximamente8.style.background = '#465956'

    EstiloOjos.style.border = '0.25vh #798C83 solid'
    proximamente2.style.border = '0.25vh #798C83 solid'
    proximamente3.style.border = '0.25vh #798C83 solid'
    proximamente4.style.border = '0.25vh #798C83 solid'
    proximamente5.style.border = '0.25vh #798C83 solid'
    proximamente6.style.border = '0.25vh #798C83 solid'
    proximamente7.style.border = '0.25vh #798C83 solid'
    proximamente8.style.border = '0.25vh #798C83 solid'


    contacto.style.color = '#060C0D'
    contacto.style.backgroundColor = '#97A69B'
} else if (numberEstilo == 2) {
    body.style.backgroundColor = '#897ABF'

    titulo.style.color = '#F2C48D'

    conteinerEstilos.style.backgroundColor = '#6F618C'


    EstiloOjos.style.background = '#897ABF'
    proximamente2.style.background = '#897ABF'
    proximamente3.style.background = '#897ABF'
    proximamente4.style.background = '#897ABF'
    proximamente5.style.background = '#897ABF'
    proximamente6.style.background = '#897ABF'
    proximamente7.style.background = '#897ABF'
    proximamente8.style.background = '#897ABF'

    EstiloOjos.style.border = '0.25vh #732634 solid'
    proximamente2.style.border = '0.25vh #732634 solid'
    proximamente3.style.border = '0.25vh #732634 solid'
    proximamente4.style.border = '0.25vh #732634 solid'
    proximamente5.style.border = '0.25vh #732634 solid'
    proximamente6.style.border = '0.25vh #732634 solid'
    proximamente7.style.border = '0.25vh #732634 solid'
    proximamente8.style.border = '0.25vh #732634 solid'


    contacto.style.color = '#F2C48D'
    contacto.style.backgroundColor = '#732634'


} else if (numberEstilo == 3) {
    body.style.backgroundColor = '#D9D6D0'

    titulo.style.color = '#6C91D9'

    conteinerEstilos.style.backgroundColor = '#7283A6'


    EstiloOjos.style.background = '#A69068'
    proximamente2.style.background = '#A69068'
    proximamente3.style.background = '#A69068'
    proximamente4.style.background = '#A69068'
    proximamente5.style.background = '#A69068'
    proximamente6.style.background = '#A69068'
    proximamente7.style.background = '#A69068'
    proximamente8.style.background = '#A69068'

    EstiloOjos.style.border = '0.25vh #595348 solid'
    proximamente2.style.border = '0.25vh #595348 solid'
    proximamente3.style.border = '0.25vh #595348 solid'
    proximamente4.style.border = '0.25vh #595348 solid'
    proximamente5.style.border = '0.25vh #595348 solid'
    proximamente6.style.border = '0.25vh #595348 solid'
    proximamente7.style.border = '0.25vh #595348 solid'
    proximamente8.style.border = '0.25vh #595348 solid'


    contacto.style.color = '#D9D6D0'
    contacto.style.backgroundColor = '#A69068'

} else if (numberEstilo == 4) {
    body.style.backgroundColor = '#F2C36B'

    titulo.style.color = '#2D3B40'

    conteinerEstilos.style.backgroundColor = '#F2DA63'


    EstiloOjos.style.background = '#D9A78B'
    proximamente2.style.background = '#D9A78B'
    proximamente3.style.background = '#D9A78B'
    proximamente4.style.background = '#D9A78B'
    proximamente5.style.background = '#D9A78B'
    proximamente6.style.background = '#D9A78B'
    proximamente7.style.background = '#D9A78B'
    proximamente8.style.background = '#D9A78B'

    EstiloOjos.style.border = '0.25vh #D9A78B solid'
    proximamente2.style.border = '0.25vh #D9A78B solid'
    proximamente3.style.border = '0.25vh #D9A78B solid'
    proximamente4.style.border = '0.25vh #D9A78B solid'
    proximamente5.style.border = '0.25vh #D9A78B solid'
    proximamente6.style.border = '0.25vh #D9A78B solid'
    proximamente7.style.border = '0.25vh #D9A78B solid'
    proximamente8.style.border = '0.25vh #D9A78B solid'


    contacto.style.color = '#2D3B40'
    contacto.style.backgroundColor = '#F2C894'
    contacto.style.border = '0.25vh #D9A78B solid'


} else if (numberEstilo == 5) {
    body.style.backgroundColor = '#081B26'

    titulo.style.color = '#F2B263'

    conteinerEstilos.style.backgroundColor = '#F2B263'


    EstiloOjos.style.background = '#D99177'
    proximamente2.style.background = '#D99177'
    proximamente3.style.background = '#D99177'
    proximamente4.style.background = '#D99177'
    proximamente5.style.background = '#D99177'
    proximamente6.style.background = '#D99177'
    proximamente7.style.background = '#D99177'
    proximamente8.style.background = '#D99177'

    EstiloOjos.style.border = '0.25vh #D99177 solid'
    proximamente2.style.border = '0.25vh #D99177 solid'
    proximamente3.style.border = '0.25vh #D99177 solid'
    proximamente4.style.border = '0.25vh #D99177 solid'
    proximamente5.style.border = '0.25vh #D99177 solid'
    proximamente6.style.border = '0.25vh #D99177 solid'
    proximamente7.style.border = '0.25vh #D99177 solid'
    proximamente8.style.border = '0.25vh #D99177 solid'


    contacto.style.color = '#F2B263'
    contacto.style.backgroundColor = '#274259'

} else if (numberEstilo == 6) {
    body.style.backgroundColor = '#F2BF5E'

    titulo.style.color = '#E0E0E2'

    conteinerEstilos.style.backgroundColor = '#D99559'


    EstiloOjos.style.background = '#E0E0E2'
    proximamente2.style.background = '#E0E0E2'
    proximamente3.style.background = '#E0E0E2'
    proximamente4.style.background = '#E0E0E2'
    proximamente5.style.background = '#E0E0E2'
    proximamente6.style.background = '#E0E0E2'
    proximamente7.style.background = '#E0E0E2'
    proximamente8.style.background = '#E0E0E2'

    EstiloOjos.style.border = '0.25vh #E0E0E2 solid'
    proximamente2.style.border = '0.25vh #E0E0E2 solid'
    proximamente3.style.border = '0.25vh #E0E0E2 solid'
    proximamente4.style.border = '0.25vh #E0E0E2 solid'
    proximamente5.style.border = '0.25vh #E0E0E2 solid'
    proximamente6.style.border = '0.25vh #E0E0E2 solid'
    proximamente7.style.border = '0.25vh #E0E0E2 solid'
    proximamente8.style.border = '0.25vh #E0E0E2 solid'


    contacto.style.color = '#A68160'
    contacto.style.backgroundColor = '#F2DABD'

} else if (numberEstilo == 7) {
    body.style.backgroundColor = '#2B3640'

    titulo.style.color = '#D8E8F2'

    conteinerEstilos.style.backgroundColor = '#2E4021'


    EstiloOjos.style.background = '#425931'
    proximamente2.style.background = '#425931'
    proximamente3.style.background = '#425931'
    proximamente4.style.background = '#425931'
    proximamente5.style.background = '#425931'
    proximamente6.style.background = '#425931'
    proximamente7.style.background = '#425931'
    proximamente8.style.background = '#425931'

    EstiloOjos.style.border = '0.25vh #425931 solid'
    proximamente2.style.border = '0.25vh #425931 solid'
    proximamente3.style.border = '0.25vh #425931 solid'
    proximamente4.style.border = '0.25vh #425931 solid'
    proximamente5.style.border = '0.25vh #425931 solid'
    proximamente6.style.border = '0.25vh #425931 solid'
    proximamente7.style.border = '0.25vh #425931 solid'
    proximamente8.style.border = '0.25vh #425931 solid'


    contacto.style.color = '#2B3640'
    contacto.style.backgroundColor = '#D8E8F2'

} else if (numberEstilo == 8) {
    body.style.backgroundColor = '#012340'

    titulo.style.color = '#D9D6D0'

    conteinerEstilos.style.backgroundColor = '#3F618C'


    EstiloOjos.style.background = '#F20544'
    proximamente2.style.background = '#F20544'
    proximamente3.style.background = '#F20544'
    proximamente4.style.background = '#F20544'
    proximamente5.style.background = '#F20544'
    proximamente6.style.background = '#F20544'
    proximamente7.style.background = '#F20544'
    proximamente8.style.background = '#F20544'

    EstiloOjos.style.border = '0.25vh #F20544 solid'
    proximamente2.style.border = '0.25vh #F20544 solid'
    proximamente3.style.border = '0.25vh #F20544 solid'
    proximamente4.style.border = '0.25vh #F20544 solid'
    proximamente5.style.border = '0.25vh #F20544 solid'
    proximamente6.style.border = '0.25vh #F20544 solid'
    proximamente7.style.border = '0.25vh #F20544 solid'
    proximamente8.style.border = '0.25vh #F20544 solid'


    contacto.style.color = '#D9D6D0'
    contacto.style.backgroundColor = '#8C2656'
} 
