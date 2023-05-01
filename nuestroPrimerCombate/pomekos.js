// Los bichos

const bichoAmigo = {
    nombre: 'Pokachu',
    vida: 50,
    vidaActual: 50
}

const bichoEnemigo = {
    nombre: 'Gavilán Pollero',
    vida: 50,
    vidaActual: 50
}

// Ataques

const ataque1 = {
    nombre: 'Rayito',
    daño: 10
}

const ataque2 = {
    nombre: 'Bazokazo',
    daño: 20
}
const ataque3 = {
    nombre: 'Maullido asesino',
    daño: 5
}
const ataque4 = {
    nombre: 'Rayo laser fulminante supremo',
    daño: 1
}

// Variables extras

let turno = 1
let muted = false
let audio = new Audio()

// Funciones

const atacar = function (ataque) {
    let textoCombate = document.getElementById("textoCombateCuerpo");

    if(bichoEnemigo.vidaActual > 0){
    let daño = 0
    let ataqueSeleccionado = ataque1
    switch (ataque) {
        case 1:
            ataqueSeleccionado = ataque1
            audio = new Audio('audios/pikachu.mpeg');
            break
        case 2:
            ataqueSeleccionado = ataque2
            audio = new Audio('audios/boom.mp3');
            audio.volume = 0.5
            break
        case 3:
            audio = new Audio('audios/maullido.mp3');
            ataqueSeleccionado = ataque3
            break
        case 4:
            ataqueSeleccionado = ataque4
            audio = new Audio('audios/piu.mp3');
            break
    }

    if(!muted) audio.play();

    daño = ataqueSeleccionado.daño

    if (daño > bichoEnemigo.vidaActual) daño = bichoEnemigo.vidaActual

    bichoEnemigo.vidaActual -= daño
    document.getElementById("vidaActualBichoEnemigo").textContent = bichoEnemigo.vidaActual

    textoCombate.innerHTML += "Turno " + turno + "<br>";
    textoCombate.innerHTML += bichoAmigo.nombre + " usó " + ataqueSeleccionado.nombre + " y causó " + daño + " de daño a " + bichoEnemigo.nombre + " <br><br>"
    turno++

    if(bichoEnemigo.vidaActual <= 0){
        textoCombate.innerHTML += bichoEnemigo.nombre + " HA MUERTO. Siempre estará en nuestros corazones :( <br> <br>"
        audio = new Audio('audios/muerte_song.mp3');
        audio.volume = 0.5
        if(!muted) audio.play();
    }
}else{
    textoCombate.innerHTML += "Déjalo, ya ta muerto.<br>"
}

}

const changeAudioMuted = function(){
    if(muted){
        muted = false
        document.getElementById("audioIcon").src = "imagenes/audio.png"
    }else{
        document.getElementById("audioIcon").src = "imagenes/muted.png"
        muted = true
        audio.pause()
    }
}

// Inicialización

document.getElementById("nombreBichoAmigo").textContent = bichoAmigo.nombre
document.getElementById("nombreBichoEnemigo").textContent = bichoEnemigo.nombre

document.getElementById("vidaBichoAmigo").textContent = bichoAmigo.vida
document.getElementById("vidaBichoEnemigo").textContent = bichoEnemigo.vida

document.getElementById("vidaActualBichoAmigo").textContent = bichoAmigo.vidaActual
document.getElementById("vidaActualBichoEnemigo").textContent = bichoEnemigo.vidaActual

document.getElementById("ataque1").textContent = ataque1.nombre
document.getElementById("ataque2").textContent = ataque2.nombre
document.getElementById("ataque3").textContent = ataque3.nombre
document.getElementById("ataque4").textContent = ataque4.nombre

