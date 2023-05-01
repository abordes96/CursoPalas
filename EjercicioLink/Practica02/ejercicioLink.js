// Personajes

const personajePrincipal = {
    nombre: 'Enlace',
    numeroCorazones: 8,
    numeroCorazonesActual: 8,
    resistencia: 100,
    resistenciaActual: 100,
    maximoArmas: 5,
    maximoEscudos: 2,
    maximoPociones: 10,
    armas: [],
    escudos: [],
    pociones: []
}

const compi1 = {
    nombre: 'Carcel',
    numeroCorazones: 5,
    numeroCorazonesActual: 5,
    resistencia: 60,
    resistenciaActual: 60,
    maximoArmas: 2,
    maximoEscudos: 1,
    maximoPociones: 15,
    armas: [],
    escudos: [],
    pociones: []
}

const enemigo1 = {
    nombre: 'Francés',
    numeroCorazones: 15,
    numeroCorazonesActual: 15,
    resistencia: 50,
    resistenciaActual: 50,
    maximoArmas: 1,
    maximoEscudos: 1,
    maximoPociones: 1,
    armas: [],
    escudos: [],
    pociones: []

}

const enemigo2 = {
    nombre: 'Inglés',
    numeroCorazones: 4,
    numeroCorazonesActual: 4,
    resistencia: 30,
    resistenciaActual: 30,
    maximoArmas: 1,
    maximoEscudos: 0,
    maximoPociones: 2,
    armas: [],
    escudos: [],
    pociones: []
}

const boss = {
    nombre: 'Kerry',
    numeroCorazones: 16,
    numeroCorazonesActual: 16,
    resistencia: 30,
    resistenciaActual: 30,
    maximoArmas: 1,
    maximoEscudos: 0,
    maximoPociones: 2,
    armas: [],
    escudos: [],
    pociones: []
}

// Habilidades armas

const recuperacionExitosa = {
    id: 1,
    nombre: 'Recuperación exitosa',
    descripcion: 'El arma tiene una probabilidad del 40% de recuperar el uso del último ataque.',
    probabilidadActivacion: 40
}

const indigestion = {
    id: 2,
    nombre: 'Indigestion',
    descripcion: 'El enemigo sufre una indigestión que le produce 1 corazón de daño extra.',
    probabilidadActivacion: 30
}

// Armas

const arma1 = {
    nombre: 'Almohada',
    potencia: 1,
    maximoUsos: 10,
    usosActuales: 0,
    habilidadesEspeciales: [recuperacionExitosa]
}

const arma2 = {
    nombre: 'Croissant',
    potencia: 3,
    maximoUsos: 3,
    usosActuales: 0,
    habilidadesEspeciales: [recuperacionExitosa, indigestion]
}

const arma3 = {
    nombre: 'Thunderfury, Blessed Blade of the Windseeker',
    potencia: 4,
    maximoUsos: 2,
    usosActuales: 0,
    habilidadesEspeciales: [recuperacionExitosa]
}

const arma4 = {
    nombre: 'Diálogo',
    potencia: 2,
    maximoUsos: 40,
    usosActuales: 0,
    habilidadesEspeciales: []
}


// Escudos

const escudo1 = {
    nombre: 'Silla',
    defensa: 1,
    maximoUsos: 2,
    usosActuales: 0
}

const escudo2 = {
    nombre: 'Mesa',
    defensa: 3,
    maximoUsos: 1,
    usosActuales: 0
}

// Pociones

const pocion1 = {
    nombre: 'Mosto',
    corazonesRecuperados: 4,
    resistenciaRecuperada: 30
}

const pocion2 = {
    nombre: 'Calimocho',
    corazonesRecuperados: 2,
    resistenciaRecuperada: 70
}


// Funciones

const addArma = function (personaje, arma) {
    if (personaje.armas.length < personaje.maximoArmas) {
        personaje.armas.push(arma)
        console.log(personaje.nombre + " se ha equipado " + arma.nombre)
    } else {
        console.log(personaje.nombre + ' no puede añadir más armas')
    }
}

const addEscudo = function (personaje, escudo) {
    if (personaje.escudos.length < personaje.maximoEscudos) {
        personaje.escudos.push(escudo)
        console.log(personaje.nombre + " se ha equipado " + escudo.nombre)
    } else {
        console.log(personaje.nombre + ' no puede añadir más escudos')
    }
}

const addPocion = function (personaje, pocion) {
    if (personaje.pociones.length < personaje.maximoPociones) {
        personaje.pociones.push(pocion)
        console.log("Se ha añadido " + pocion.nombre + " al inventario de " + personaje.nombre)
    } else {
        console.log(personaje.nombre + ' no puede añadir más pociones')
    }
}

const atacar = function (atacante, victima) {
    if (atacante.numeroCorazonesActual > 0) {
        if (atacante.resistenciaActual > 0) {
            if (atacante.armas.length > 0) {

                // Ordenar las armas por daño
                atacante.armas = atacante.armas.sort((a, b) => {
                    return Number.parseInt(b.potencia) - Number.parseInt(a.potencia)
                })

                // Propiedades atacante
                let armaSeleccionada = atacante.armas[0]
                let damageRealizado = 0
                let usosActualesArma = armaSeleccionada.usosActuales
                let resistenciaAtacanteActual = atacante.resistenciaActual
                let critico = false

                console.log(atacante.nombre + " va a realizar un ataque con " + armaSeleccionada.nombre + " a " + victima.nombre + " ( " + armaSeleccionada.potencia + " )")

                // Activación de habilidades
                if (armaSeleccionada.habilidadesEspeciales.length > 0) {
                    console.log("Activación de habilidades: ")
                    let numeroAleatorio
                    let habilidadEjecutada = false
                    armaSeleccionada.habilidadesEspeciales.forEach(habilidad => {
                        numeroAleatorio = Math.floor(Math.random() * 100)
                        console.log("Número aleatorio: " + numeroAleatorio)
                        if (numeroAleatorio < habilidad.probabilidadActivacion) {
                            switch (habilidad.id) {
                                case 1:
                                    usosActualesArma--
                                    resistenciaAtacanteActual -= 15
                                    habilidadEjecutada = true
                                    console.log("Se activó la habilidad " + habilidad.nombre + " se recuperó 1 punto de durabilidad de " + armaSeleccionada.nombre + " (Probabilidad: " + habilidad.probabilidadActivacion + ")")
                                    break
                                case 2:
                                    damageRealizado++
                                    habilidadEjecutada = true
                                    console.log("Se activó la habilidad " + habilidad.nombre + ", " + victima.nombre + " sufrió un punto de daño adicional. (Probabilidad: " + habilidad.probabilidadActivacion + ")")
                                    break
                                default:
                                    console.log("Habilidad no encontrada.")
                            }
                        }
                    })
                    if (!habilidadEjecutada) console.log("No se ejecutó ninguna habilidad")
                }

                // Ataque
                if (usosActualesArma < armaSeleccionada.maximoUsos - 1) {
                    damageRealizado += armaSeleccionada.potencia
                    resistenciaAtacanteActual -= 15
                    usosActualesArma++

                } else if (usosActualesArma === armaSeleccionada.maximoUsos - 1) {
                    critico = true
                    resistenciaAtacanteActual -= 15
                    damageRealizado += armaSeleccionada.potencia * 2
                    atacante.armas.shift()
                }

                // Calculo de defensa de escudo
                if (victima.escudos.length > 0) {
                    damageRealizado -= victima.escudos[0].defensa
                    victima.escudos[0].usosActuales++
                    console.log(victima.escudos[0].nombre + " para " + victima.escudos[0].defensa + " de daño")
                    if (victima.escudos[0].usosActuales === victima.escudos[0].maximoUsos) {
                        console.log(victima.escudos[0].nombre + " se rompió")
                        victima.escudos.shift()
                    }
                }

                // Daños adicionales
                if (critico) {
                    damageRealizado++
                    console.log("Se ha producido un golpe crítico")
                    console.log('El arma se ha roto')
                }

                if (atacante.resistenciaActual === atacante.resistencia) {
                    damageRealizado++
                    console.log("Punto de daño adicional producido por exceso de resistencia")
                }




                // Actualizando valores de los objetos y resolviendo daño real aplicado
                if (!critico) atacante.armas[0].usosActuales = usosActualesArma

                atacante.resistenciaActual = resistenciaAtacanteActual >= 0 ? resistenciaAtacanteActual : 0
                victima.numeroCorazonesActual -= damageRealizado

                if (damageRealizado < 0) damageRealizado = 0

                console.log("Se han producido " + damageRealizado + " puntos de daños totales")


                if (victima.numeroCorazonesActual <= 0) {
                    victima.numeroCorazonesActual = 0
                    console.log(victima.nombre + " ha sido derrotado")
                    return true
                }

            } else {
                console.log(atacante.nombre + " no tiene ningún arma para realizar el ataque.")
            }
        } else {
            console.log(atacante.nombre + " no tiene resistencia para realizar ningún ataque. Así que descansa para recuperarla")
            recuperarResistencia(atacante)
        }
    } else {
        console.log(atacante.nombre + " esta muerto y no puede atacar")
    }
    return false
}

const usarPocion = function (personaje, pocion) {
    if (tienePocion(personaje, pocion)) {
        personaje.numeroCorazonesActual += pocion.corazonesRecuperados
        if (personaje.numeroCorazonesActual > personaje.numeroCorazones) {
            personaje.numeroCorazonesActual = personaje.numeroCorazones
        }

        personaje.resistenciaActual += pocion.resistenciaRecuperada
        if (personaje.resistenciaActual > personaje.resistencia) {
            personaje.resistenciaActual = personaje.resistencia
        }

        console.log(personaje.nombre + " se bebió " + pocion.nombre + " ahora tiene " + personaje.numeroCorazonesActual + " corazones y " + personaje.resistenciaActual + " puntos de resistencia")
    } else {
        console.log('No se ha encontrado la poción en el inventario.')
    }
}

const tienePocion = function (personaje, pocion) {
    let comprobacion = false
    personaje.pociones.forEach(pocionPersonaje => {
        if (pocionPersonaje.nombre == pocion.nombre) comprobacion = true
    })
    return comprobacion
}

const recuperarResistencia = function (personaje) {
    personaje.resistenciaActual += 5
    if (personaje.resistenciaActual > personaje.resistencia) personaje.resistenciaActual = personaje.resistencia
}

const atacarBoton = function () {
    atacar(personajePrincipal, enemigo1)

    document.getElementById("vidaEnemigo").textContent = enemigo1.numeroCorazonesActual

    for(i = enemigo1.numeroCorazones-1;i>=enemigo1.numeroCorazonesActual;i--){
        console.log(i)
        document.getElementById("heartEnemy"+i).style.display = "none"
        document.getElementById("heartEmpty"+i).style.display = ""
    }

    document.getElementById("resistenciaProta").textContent = personajePrincipal.resistenciaActual


}

// Pruebas

// EQUIPO
console.log("Equipando..... \n")
console.log("-------------- ARMAS ------------------ \n")
addArma(personajePrincipal, arma1)
addArma(personajePrincipal, arma3)
addArma(compi1, arma2)
addArma(enemigo1, arma2)
addArma(enemigo2, arma1)
addArma(enemigo1, arma1)
addArma(boss, arma4)

console.log("\n-------------- Escudos ------------------ \n")
addEscudo(personajePrincipal, escudo1)
addEscudo(enemigo1, escudo2)
addEscudo(enemigo2, escudo1)

document.getElementById("nombreProta").textContent = personajePrincipal.nombre
document.getElementById("vidaProta").textContent = personajePrincipal.numeroCorazonesActual
document.getElementById("resistenciaProta").textContent = personajePrincipal.resistenciaActual

document.getElementById("nombreEnemigo").textContent = enemigo1.nombre
document.getElementById("vidaEnemigo").textContent = enemigo1.numeroCorazonesActual
document.getElementById("resistenciaEnemigo").textContent = enemigo1.resistenciaActual

for (i = 0; i < personajePrincipal.numeroCorazonesActual; i++) {
    let image = document.createElement('img')
    image.width = '30'
    image.src = "https://www.pikpng.com/pngl/b/69-697718_heart-pixelart-game-retro-red-minecraft-life-pixel.png"
    document.getElementById('corazonesProta').appendChild(image)
}

for (i = 0; i < enemigo1.numeroCorazonesActual; i++) {
    let image = document.createElement('img')
    image.width = '30'
    image.src = "https://www.pikpng.com/pngl/b/69-697718_heart-pixelart-game-retro-red-minecraft-life-pixel.png"
    image.id = "heartEnemy" + i
    document.getElementById('corazonesEnemigo').appendChild(image)
    let image2 = document.createElement('img')
    image2.width = '30'
    image2.id = "heartEmpty" + i
    image2.src = "https://www.pikpng.com/pngl/b/97-971526_empty-pixel-heart-pink-8-bit-heart-clipart.png"
    image2.style.display = "none"
    document.getElementById('corazonesEnemigo').appendChild(image2)

}

