//variables para captar los datos del form
const datos = new Data()

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email =  document.getElementById('email')
const mensaje = document.getElementById('mensaje')

const formulario = document.getElementById('form')

//evetos para el tomar los datos del formulario

cargarEventos()

function cargarEventos(){
    nombre.addEventListener('blur', validarCampo())
}

/* funcion de la validacion de los campos */

function validarCampo(){
    console.log('campo nombre validado');
}