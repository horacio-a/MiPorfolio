
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
var BloqueEspa??ol = document.getElementById('Espa??ol')


BloqueEspa??ol.addEventListener("mouseover", function (event) {
    BloqueIngles.style.opacity = '25%'

}, false);

BloqueEspa??ol.addEventListener("mouseout", function (event) {
    BloqueIngles.style.opacity = '100%'

}, false);


BloqueIngles.addEventListener("mouseover", function (event) {
    BloqueEspa??ol.style.opacity = '25%'

}, false);

BloqueIngles.addEventListener("mouseout", function (event) {
    BloqueEspa??ol.style.opacity = '100%'

}, false);


var boton1 = document.getElementById('boton-proyecto1')
var boton2 = document.getElementById('boton-proyecto2')

boton1.addEventListener("mouseover", function (event) {
    boton1.style.visibility = 'hidden'
    boton1.style.visibility = 'hidden'


}, false);

function desaparecer(){
    boton1.style.visibility = 'hidden'
    boton1.style.visibility = 'hidden'
}


var boton3 = document.getElementById('test')


boton3.addEventListener("mouseover", function (event) {
    boton1.style.visibility = 'hidden'
    boton2.style.visibility = 'hidden'


}, false);
