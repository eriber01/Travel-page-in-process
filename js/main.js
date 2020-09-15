//reinicia la pagina al hacer click en el boton de HOME

const btnRestart = document.getElementById('restart').addEventListener('click', (eve)=>{
    setTimeout(()=>{
        location.reload()
    },1000)
})


/* texto remplazo primer div */
let text_up = 'Los Mejores destinos las Mejores Aventuras';

/* texto remplazo segundo div */
let text_down = 'Las Mejores Emociones';

/* variables de los eventos */
let circle_up = document.getElementById('circle_up');
let circle_down = document.getElementById('circle_down')


/* evento para girar al pasar el mouse primer DIV */
circle_up.addEventListener('mouseover', function(eve){
    console.log('funciona')

    document.getElementById('txt-up').textContent = text_up;
    /* circle_up.style.transform = "rotateY(360deg)"; */

    circle_up.classList.add('rotateRight')
    circle_up.classList.remove('rotateLeft')
})

circle_up.addEventListener('mouseout', function(eve){
    console.log('funciona')

    document.getElementById('txt-up').textContent = "Divertido y mas con Alguien";
    /* photocircle_up_up.style.transform = "rotateY(-360deg)"; */

    circle_up.classList.add('rotateLeft')
    circle_up.classList.remove('rotateRight')
})

/* evento para girar al pasar el mouse segundo DIV */

circle_down.addEventListener('mouseover', function(eve){
    console.log('funciona')

    document.getElementById('txt-down').textContent = text_down;
    /* circle_up.style.transform = "rotateY(360deg)"; */

    circle_down.classList.add('rotateRight')
    circle_down.classList.remove('rotateLeft')
    circle_down.style.backgroundColor = 'white'
})

circle_down.addEventListener('mouseout', function(eve){
    console.log('funciona')

    document.getElementById('txt-down').textContent = "Que lleves en el Corazon";
    /* photocircle_up_up.style.transform = "rotateY(-360deg)"; */

    circle_down.classList.add('rotateLeft')
    circle_down.classList.remove('rotateRight')
    circle_down.style.backgroundColor = '#0f4c75'
})