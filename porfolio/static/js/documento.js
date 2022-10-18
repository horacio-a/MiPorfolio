
const si = 0;

document.querySelector('body').addEventListener('mousemove', eyeball);
function eyeball() {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rotation + "deg) "
    });

}
// ------------------Header-----------------

var ConteinerQuiensoy = document.getElementById('conteiner-quiensoy');
var ConteinerProyectos = document.getElementById('conteiner-proyectos');
var ConteinerHabilidades = document.getElementById('conteiner-habilidades');
var ConteinerContacto = document.getElementById('conteiner-contacto');
var Pproyectos = document.getElementById('test');



var Ojo = document.getElementById('ojosigue');
var pupila = document.getElementById('eye');



ConteinerQuiensoy.addEventListener("mouseover", function (event) {
    Ojo.style.visibility = 'hidden'
    pupila.style.visibility = 'hidden'
    ConteinerProyectos.style.opacity = '25%'
    ConteinerContacto.style.opacity = '25%'
    ConteinerHabilidades.style.opacity = '25%'
}, false);

ConteinerQuiensoy.addEventListener("mouseout", function (event) {

    Ojo.style.visibility = 'visible'
    pupila.style.visibility = 'visible'
    ConteinerProyectos.style.opacity = '100%'
    ConteinerContacto.style.opacity = '100%'
    ConteinerHabilidades.style.opacity = '100%'

}, false);


ConteinerProyectos.addEventListener("mouseover", function (event) {
    Ojo.style.visibility = 'hidden'
    pupila.style.visibility = 'hidden'
    ConteinerQuiensoy.style.opacity = '25%'
    ConteinerContacto.style.opacity = '25%'
    ConteinerHabilidades.style.opacity = '25%'
}, false);

ConteinerProyectos.addEventListener("mouseout", function (event) {

    Ojo.style.visibility = 'visible'
    pupila.style.visibility = 'visible'
    ConteinerQuiensoy.style.opacity = '100%'
    ConteinerContacto.style.opacity = '100%'
    ConteinerHabilidades.style.opacity = '100%'
}, false);



ConteinerHabilidades.addEventListener("mouseover", function (event) {
    Ojo.style.visibility = 'hidden'
    pupila.style.visibility = 'hidden'
    ConteinerProyectos.style.opacity = '25%'
    ConteinerQuiensoy.style.opacity = '25%'
    ConteinerContacto.style.opacity = '25%'
}, false);

ConteinerHabilidades.addEventListener("mouseout", function (event) {

    Ojo.style.visibility = 'visible'
    pupila.style.visibility = 'visible'
    ConteinerProyectos.style.opacity = '100%'
    ConteinerQuiensoy.style.opacity = '100%'
    ConteinerContacto.style.opacity = '100%'
}, false);




ConteinerContacto.addEventListener("mouseover", function (event) {
    Ojo.style.visibility = 'hidden'
    pupila.style.visibility = 'hidden'
    ConteinerQuiensoy.style.opacity = '25%'
    ConteinerProyectos.style.opacity = '25%'
    ConteinerHabilidades.style.opacity = '25%'

}, false);

ConteinerContacto.addEventListener("mouseout", function (event) {

    Ojo.style.visibility = 'visible'
    pupila.style.visibility = 'visible'
    ConteinerQuiensoy.style.opacity = '100%'
    ConteinerProyectos.style.opacity = '100%'
    ConteinerHabilidades.style.opacity = '100%'
}, false);

var BloqueIngles = document.getElementById('Ingles')
var BloqueEspañol = document.getElementById('Español')


BloqueEspañol.addEventListener("mouseover", function (event) {
    BloqueIngles.style.opacity = '25%'

}, false);

BloqueEspañol.addEventListener("mouseout", function (event) {
    BloqueIngles.style.opacity = '100%'

}, false);


BloqueIngles.addEventListener("mouseover", function (event) {
    BloqueEspañol.style.opacity = '25%'

}, false);

BloqueIngles.addEventListener("mouseout", function (event) {
    BloqueEspañol.style.opacity = '100%'

}, false);

// ------------------botones de la pestaña proyectos- criptoword-----------------

var botonCriptoWord1 = document.getElementById('boton-CriptoWord1')
var botonCriptoWord2 = document.getElementById('boton-CriptoWord2')
var botonCriptoWord3 = document.getElementById('boton-CriptoWord3')
var botonCriptoWord4 = document.getElementById('boton-CriptoWord4')
var botonCriptoWord5 = document.getElementById('boton-CriptoWord5')
var BotonesCriptoWord1 = document.getElementById('botones-CriptoWord1')
var BotonesCriptoWord2 = document.getElementById('botones-CriptoWord2')





function tecnologiasCriptoWord() {
    botonCriptoWord1.style.display = 'none'
    botonCriptoWord2.style.display = 'none'
    botonCriptoWord3.style.display = 'flex'
    botonCriptoWord4.style.display = 'none'
    botonCriptoWord5.style.display = 'none'
    BotonesCriptoWord1.style.display = "flex"
    BotonesCriptoWord2.style.display = "flex"

}



function aparecerCriptoWord() {
    botonCriptoWord1.style.display = 'flex'
    botonCriptoWord2.style.display = 'flex'
    botonCriptoWord3.style.display = 'none'
    botonCriptoWord4.style.display = 'none'
    botonCriptoWord5.style.display = 'none'
    BotonesCriptoWord1.style.display = "none"
    BotonesCriptoWord2.style.display = "none"
}


function proyectoCriptoWord() {
    botonCriptoWord1.style.display = 'none'
    botonCriptoWord2.style.display = 'none'
    botonCriptoWord3.style.display = 'flex'
    botonCriptoWord4.style.display = 'flex'
    botonCriptoWord5.style.display = 'flex'
    BotonesCriptoWord1.style.display = "none"
    BotonesCriptoWord2.style.display = "none"

}

// ------------------botones de la pestaña proyectos- criptoword-----------------

// ------------------------------------------CriptoWord movil--------------------------------------------------------------


var botonCriptoWord1Movil = document.getElementById('boton-CriptoWord1-movil')
var botonCriptoWord2Movil = document.getElementById('boton-CriptoWord2-movil')
var botonCriptoWord3Movil = document.getElementById('boton-CriptoWord3-movil')
var botonCriptoWord4Movil = document.getElementById('boton-CriptoWord4-movil')
var botonCriptoWord5Movil = document.getElementById('boton-CriptoWord5-movil')
var BotonesCriptoWord1Movil = document.getElementById('botones-CriptoWord1-movil')
var BotonesCriptoWord2Movil = document.getElementById('botones-CriptoWord2-movil')





function tecnologiasCriptoWordMovil() {
    botonCriptoWord1Movil.style.display = 'none'
    botonCriptoWord2Movil.style.display = 'none'
    botonCriptoWord3Movil.style.display = 'flex'
    botonCriptoWord4Movil.style.display = 'none'
    botonCriptoWord5Movil.style.display = 'none'
    BotonesCriptoWord1Movil.style.display = "flex"
    BotonesCriptoWord2Movil.style.display = "flex"

}



function aparecerCriptoWordMovil() {
    botonCriptoWord1Movil.style.display = 'flex'
    botonCriptoWord2Movil.style.display = 'flex'
    botonCriptoWord3Movil.style.display = 'none'
    botonCriptoWord4Movil.style.display = 'none'
    botonCriptoWord5Movil.style.display = 'none'
    BotonesCriptoWord1Movil.style.display = "none"
    BotonesCriptoWord2Movil.style.display = "none"
}


function proyectoCriptoWordMovil() {
    botonCriptoWord1Movil.style.display = 'none'
    botonCriptoWord2Movil.style.display = 'none'
    botonCriptoWord3Movil.style.display = 'flex'
    botonCriptoWord4Movil.style.display = 'flex'
    botonCriptoWord5Movil.style.display = 'flex'
    BotonesCriptoWord1Movil.style.display = "none"
    BotonesCriptoWord2Movil.style.display = "none"

}

// ----------------------------------------CriptoWord movil----------------------------------------------------------------

// ------------------botones de la pestaña proyectos- Espacio Bonhomia-----------------



var botonEcommerce1 = document.getElementById('boton-e-commerce1')
var botonEcommerce2 = document.getElementById('boton-e-commerce2')
var botonEcommerce3 = document.getElementById('boton-e-commerce3')
var botonEcommerce4 = document.getElementById('boton-e-commerce4')
var botonEcommerce5 = document.getElementById('boton-e-commerce5')
var BotonesEcommerce1 = document.getElementById('botones-e-commerce1')
var BotonesEcommerce2 = document.getElementById('botones-e-commerce2')





function tecnologiasEcommerce() {
    botonEcommerce1.style.display = 'none'
    botonEcommerce2.style.display = 'none'
    botonEcommerce3.style.display = 'flex'
    botonEcommerce4.style.display = 'none'
    botonEcommerce5.style.display = 'none'
    BotonesEcommerce1.style.display = "flex"
    BotonesEcommerce2.style.display = "flex"

}



function aparecerEcommerce() {
    botonEcommerce1.style.display = 'flex'
    botonEcommerce2.style.display = 'flex'
    botonEcommerce3.style.display = 'none'
    botonEcommerce4.style.display = 'none'
    botonEcommerce5.style.display = 'none'
    BotonesEcommerce1.style.display = "none"
    BotonesEcommerce2.style.display = "none"
}


function proyectoEcommerce() {
    botonEcommerce1.style.display = 'none'
    botonEcommerce2.style.display = 'none'
    botonEcommerce3.style.display = 'flex'
    botonEcommerce4.style.display = 'flex'
    botonEcommerce5.style.display = 'flex'
    BotonesEcommerce1.style.display = "none"
    BotonesEcommerce2.style.display = "none"

}
// ------------------botones de la pestaña proyectos- Espacio Bonhomia----------------

// ---------------------------------------- Espacio Bonhomia movil----------------------------------------------------------------


var botonEcommerce1Movil = document.getElementById('botonEcommerce1Movil')
var botonEcommerce2Movil = document.getElementById('botonEcommerce2Movil')
var botonEcommerce3Movil = document.getElementById('botonEcommerce3Movil')
var botonEcommerce4Movil = document.getElementById('botonEcommerce4Movil')
var botonEcommerce5Movil = document.getElementById('botonEcommerce5Movil')
var BotonesEcommerce1Movil = document.getElementById('BotonesEcommerce1Movil')
var BotonesEcommerce2Movil = document.getElementById('BotonesEcommerce2Movil')





function tecnologiasEcommerceMovil() {
    botonEcommerce1Movil.style.display = 'none'
    botonEcommerce2Movil.style.display = 'none'
    botonEcommerce3Movil.style.display = 'flex'
    botonEcommerce4Movil.style.display = 'none'
    botonEcommerce5Movil.style.display = 'none'
    BotonesEcommerce1Movil.style.display = "flex"
    BotonesEcommerce2Movil.style.display = "flex"

}



function aparecerEcommerceMovil() {
    botonEcommerce1Movil.style.display = 'flex'
    botonEcommerce2Movil.style.display = 'flex'
    botonEcommerce3Movil.style.display = 'none'
    botonEcommerce4Movil.style.display = 'none'
    botonEcommerce5Movil.style.display = 'none'
    BotonesEcommerce1Movil.style.display = "none"
    BotonesEcommerce2Movil.style.display = "none"
}


function proyectoEcommerceMovil() {
    botonEcommerce1Movil.style.display = 'none'
    botonEcommerce2Movil.style.display = 'none'
    botonEcommerce3Movil.style.display = 'flex'
    botonEcommerce4Movil.style.display = 'flex'
    botonEcommerce5Movil.style.display = 'flex'
    BotonesEcommerce1Movil.style.display = "none"
    BotonesEcommerce2Movil.style.display = "none"

}

// ----------------------------------------Espacio Bonhomia movil----------------------------------------------------------------



// ------------------botones de la pestaña proyectos- calculadora-----------------


var botoncalculadora1 = document.getElementById('botonCalculadora1')
var botoncalculadora2 = document.getElementById('botonCalculadora2')
var botoncalculadora3 = document.getElementById('botonCalculadora3')
var botoncalculadora4 = document.getElementById('botonCalculadora4')
var botoncalculadora5 = document.getElementById('botonCalculadora5')
var Botonescalculadora1 = document.getElementById('botonesCalculadora1')
var Botonescalculadora2 = document.getElementById('botonesCalculadora2')





function tecnologiasCalculadora() {
    botoncalculadora1.style.display = 'none'
    botoncalculadora2.style.display = 'none'
    botoncalculadora3.style.display = 'flex'
    botoncalculadora4.style.display = 'none'
    botoncalculadora5.style.display = 'none'
    Botonescalculadora1.style.display = "flex"
    Botonescalculadora2.style.display = "flex"

}



function aparecerCalculadora() {
    botoncalculadora1.style.display = 'flex'
    botoncalculadora2.style.display = 'flex'
    botoncalculadora3.style.display = 'none'
    botoncalculadora4.style.display = 'none'
    botoncalculadora5.style.display = 'none'
    Botonescalculadora1.style.display = "none"
    Botonescalculadora2.style.display = "none"

}


function proyectoCalculadora() {
    botoncalculadora1.style.display = 'none'
    botoncalculadora2.style.display = 'none'
    botoncalculadora3.style.display = 'flex'
    botoncalculadora4.style.display = 'flex'
    botoncalculadora5.style.display = 'flex'
    Botonescalculadora1.style.display = "none"
    Botonescalculadora2.style.display = "none"


}

// ------------------botones de la pestaña proyectos- calculadora-----------------

// ----------------------------------------Calculadora movil----------------------------------------------------------------




var botoncalculadora1Movil = document.getElementById('botonCalculadora1Movil')
var botoncalculadora2Movil = document.getElementById('botonCalculadora2Movil')
var botoncalculadora3Movil = document.getElementById('botonCalculadora3Movil')
var botoncalculadora4Movil = document.getElementById('botonCalculadora4Movil')
var botoncalculadora5Movil = document.getElementById('botonCalculadora5Movil')
var Botonescalculadora1Movil = document.getElementById('botonesCalculadora1Movil')
var Botonescalculadora2Movil = document.getElementById('botonesCalculadora2Movil')



function tecnologiasCalculadoraMovil() {
    botoncalculadora1Movil.style.display = 'none'
    botoncalculadora2Movil.style.display = 'none'
    botoncalculadora3Movil.style.display = 'flex'
    botoncalculadora4Movil.style.display = 'none'
    botoncalculadora5Movil.style.display = 'none'
    Botonescalculadora1Movil.style.display = "flex"
    Botonescalculadora2Movil.style.display = "flex"
}





function aparecerCalculadoraMovil() {
    botoncalculadora1Movil.style.display = 'flex'
    botoncalculadora2Movil.style.display = 'flex'
    botoncalculadora3Movil.style.display = 'none'
    botoncalculadora4Movil.style.display = 'none'
    botoncalculadora5Movil.style.display = 'none'
    Botonescalculadora1Movil.style.display = "none"
    Botonescalculadora2Movil.style.display = "none"
}


function proyectoCalculadoraMovil() {
    botoncalculadora1Movil.style.display = 'none'
    botoncalculadora2Movil.style.display = 'none'
    botoncalculadora3Movil.style.display = 'flex'
    botoncalculadora4Movil.style.display = 'flex'
    botoncalculadora5Movil.style.display = 'flex'
    Botonescalculadora1Movil.style.display = "none"
    Botonescalculadora2Movil.style.display = "none"
}


// ----------------------------------------Calculadora movil----------------------------------------------------------------


// ------------------botones de la pestaña proyectos- chatPriv-----------------



var botonchatPriv1 = document.getElementById('botonchatPriv1')
var botonchatPriv2 = document.getElementById('botonchatPriv2')
var botonchatPriv3 = document.getElementById('botonchatPriv3')
var botonchatPriv4 = document.getElementById('botonchatPriv4')
var botonchatPriv5 = document.getElementById('botonchatPriv5')
var BotoneschatPriv1 = document.getElementById('BotoneschatPriv1')
var BotoneschatPriv2 = document.getElementById('BotoneschatPriv2')





function tecnologiaschatPriv() {
    botonchatPriv1.style.display = 'none'
    botonchatPriv2.style.display = 'none'
    botonchatPriv3.style.display = 'flex'
    botonchatPriv4.style.display = 'none'
    botonchatPriv5.style.display = 'none'
    BotoneschatPriv1.style.display = "flex"
    BotoneschatPriv2.style.display = "flex"

}



function aparecerchatPriv() {
    botonchatPriv1.style.display = 'flex'
    botonchatPriv2.style.display = 'flex'
    botonchatPriv3.style.display = 'none'
    botonchatPriv4.style.display = 'none'
    botonchatPriv5.style.display = 'none'
    BotoneschatPriv1.style.display = "none"
    BotoneschatPriv2.style.display = "none"

}


function proyectochatPriv() {
    botonchatPriv1.style.display = 'none'
    botonchatPriv2.style.display = 'none'
    botonchatPriv3.style.display = 'flex'
    botonchatPriv4.style.display = 'flex'
    botonchatPriv5.style.display = 'flex'
    BotoneschatPriv1.style.display = "none"
    BotoneschatPriv2.style.display = "none"


}

// ------------------botones de la pestaña proyectos- chatPriv-----------------


// ------------------chatPriv movil -----------------



var botonchatPriv1Movil = document.getElementById('botonchatPriv1Movil')
var botonchatPriv2Movil = document.getElementById('botonchatPriv2Movil')
var botonchatPriv3Movil = document.getElementById('botonchatPriv3Movil')
var botonchatPriv4Movil = document.getElementById('botonchatPriv4Movil')
var botonchatPriv5Movil = document.getElementById('botonchatPriv5Movil')
var BotoneschatPriv1Movil = document.getElementById('BotoneschatPriv1Movil')
var BotoneschatPriv2Movil = document.getElementById('BotoneschatPriv2Movil')





function tecnologiaschatPrivMovil() {
    botonchatPriv1Movil.style.display = 'none'
    botonchatPriv2Movil.style.display = 'none'
    botonchatPriv3Movil.style.display = 'flex'
    botonchatPriv4Movil.style.display = 'none'
    botonchatPriv5Movil.style.display = 'none'
    BotoneschatPriv1Movil.style.display = "flex"
    BotoneschatPriv2Movil.style.display = "flex"

}



function aparecerchatPrivMovil() {
    botonchatPriv1Movil.style.display = 'flex'
    botonchatPriv2Movil.style.display = 'flex'
    botonchatPriv3Movil.style.display = 'none'
    botonchatPriv4Movil.style.display = 'none'
    botonchatPriv5Movil.style.display = 'none'
    BotoneschatPriv1Movil.style.display = "none"
    BotoneschatPriv2Movil.style.display = "none"

}


function proyectochatPrivMovil() {
    botonchatPriv1Movil.style.display = 'none'
    botonchatPriv2Movil.style.display = 'none'
    botonchatPriv3Movil.style.display = 'flex'
    botonchatPriv4Movil.style.display = 'flex'
    botonchatPriv5Movil.style.display = 'flex'
    BotoneschatPriv1Movil.style.display = "none"
    BotoneschatPriv2Movil.style.display = "none"


}

// ------------------chatPriv movil-----------------

const nav = document.querySelector('.nav')


const button = document.getElementById('button')


button.addEventListener('click', () => {
    nav.classList.toggle('activo')
})



const icons = document.getElementById('icons')
const detalleCriptoword = document.getElementById('detalle-criptoword')

icons.addEventListener('click', function () {
    icons.classList.toggle('abriricons')
    detalleCriptoword.classList.toggle('abrirdetalles')

})




const iconBonhomia = document.getElementById('icon-bonhomia')
const detallebonhomia = document.getElementById('detalle-bonhomia')


iconBonhomia.addEventListener('click', function () {
    iconBonhomia.classList.toggle('abriricons')
    detallebonhomia.classList.toggle('abrirdetalles')

})


const iconCalculadora = document.getElementById('icon-calculadora')
const detalleCalculadora = document.getElementById('detalle-calculadora')


iconCalculadora.addEventListener('click', function () {
    iconCalculadora.classList.toggle('abriricons')
    detalleCalculadora.classList.toggle('abrirdetalles')

})

const iconChat = document.getElementById('icon-Chat')
const detalleChat = document.getElementById('detalle-Chat')


iconChat.addEventListener('click', function () {
    iconChat.classList.toggle('abriricons')
    detalleChat.classList.toggle('abrirdetalles')

})



const cantProyectos = document.querySelectorAll('.bloque-proyecto')
const conteinerProyecto = document.getElementById('background-proyectos')

const height = cantProyectos.length * 18.5 + 9


conteinerProyecto.style.height = height + 'vh'