//enviar los datos del form a la clases Data
const datos = new Data()

//variables para captar los datos del form
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email =  document.getElementById('email')
const asunto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const btnEnviar = document.getElementById('btn-enviar')

const formulario = document.getElementById('form')

//evetos para el tomar los datos del formulario

cargarEventos()

function cargarEventos(){
    addEventListener('DOMContentLoaded', InicioApp)

    //valida cada input al precionar una tecla dentro
    nombre.addEventListener('keyup', validarCampos)
    apellido.addEventListener('keyup', validarCampos)
    email.addEventListener('keyup', validarCampos)
    asunto.addEventListener('keyup', validarCampos)
    mensaje.addEventListener('keyup', validarCampos)
}

//funcion para desactivar el boton de enviar

function InicioApp() {
    let btnEnviar_Estado = btnEnviar.disabled = true;
    console.log(btnEnviar_Estado)

    HabilitarEnviar(btnEnviar_Estado)
}

//valida que los campos no este vacios
function validarCampos(eve){
    //le pasa cada uno de los input del evento
    validarCantidadCaracteres(this)

    let error =  document.querySelectorAll('.error')
    //valida que los campos no tengan solo espacios
    if(nombre.value !== '' && apellido.value !== '' && email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        console.log('listo')
        if(error.length === 0){
            HabilitarEnviar(false)
        }
    }else{
        console.log('error');
    }
}

//valida que los input tengan la cantodad de caracteres necesarios
function validarCantidadCaracteres(campos){
    if(campos.value.length >= 3){
        campos.classList.remove('error')
        campos.classList.add('correcto')
    }else{
        campos.classList.remove('correcto')
        campos.classList.add('error')
    }
}

//habilita el bonton enviar cuando todos los campos cumplun

function HabilitarEnviar(estado) {
    if(estado == true){
        btnEnviar.classList.remove('enviar')
        btnEnviar.disabled = true;
    }else{
        btnEnviar.classList.add('enviar')
        btnEnviar.disabled = false
    }
}