//variables para captar los datos del form
const datos = new Data()

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email =  document.getElementById('email')
const mensaje = document.getElementById('mensaje')

const formulario = document.getElementById('form')

//evetos para el envio del mensaje

formulario.addEventListener('submit', (eve)=>{
    console.log()

    
    datos.dataMensaje(nombre.value, apellido.value, email.value, mensaje.value)

})