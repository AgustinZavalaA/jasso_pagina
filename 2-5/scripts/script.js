function onoff() {
    let on = document.getElementById("on")
    let cuerpo = document.getElementById("calc")
    if (on.checked) {
        cuerpo.style.display = "grid"
    } else {
        cuerpo.style.display = "none"
    }
}

function agregar(valor) {
    let problema = document.getElementById("res")
    if (problema.innerText === "res") {
        problema.innerText = ""
    }
    problema.innerText += valor
}

function borrar() {
    let problema = document.getElementById("res")
    problema.innerText = ""
}

function evaluar() {
    let problema = document.getElementById("res")
    problema.innerText = eval(problema.innerText)
}