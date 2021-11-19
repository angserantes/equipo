const heading = 'Mi equipo de baloncesto';
let i = 0;

const typing = () => {
    if(i < heading.length){
        document.querySelector('.cabecera').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
}

typing();