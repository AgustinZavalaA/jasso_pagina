function calc(operation) {
    document.getElementById("add").hidden = true;
    document.getElementById("sub").hidden = true;
    document.getElementById("mul").hidden = true;
    document.getElementById("div").hidden = true;
    document.getElementById("pro").hidden = true;
    document.getElementById("std").hidden = true;
    document.getElementById(operation).hidden = false;
}

function suma() {
    let n1 = Number(document.getElementById("add-n1").value);
    let n2 = Number(document.getElementById("add-n2").value);
    // console.log(n1+n2);
    document.getElementById("add-res").innerText = `Resultado = ${n1+n2}`;
}

function resta() {
    let n1 = Number(document.getElementById("sub-n1").value);
    let n2 = Number(document.getElementById("sub-n2").value);
    // console.log(n1+n2);
    document.getElementById("sub-res").innerText = `Resultado = ${n1-n2}`;
}

function multiplicacion() {
    let n1 = Number(document.getElementById("mul-n1").value);
    let n2 = Number(document.getElementById("mul-n2").value);
    // console.log(n1+n2);
    document.getElementById("mul-res").innerText = `Resultado = ${n1*n2}`;
}

function division() {
    let n1 = Number(document.getElementById("div-n1").value);
    let n2 = Number(document.getElementById("div-n2").value);
    if (n2 == 0){
        alert("Numero 2 no puede ser 0. error de division");
    }
    // console.log(n1+n2);
    document.getElementById("div-res").innerText = `Resultado = ${n1/n2}`;
}

function generar_promedio() {
    let lim = Number(document.getElementById("pro-n2").value);
    for (let index = 0; index < lim; index++) {
        let el = document.createElement("input");
        let salto = document.createElement("br");
        let salto2 = document.createElement("br");
        el.type = "number";
        el.id = `pro-${index}`;
        document.getElementById("pro").appendChild(el);
        document.getElementById("pro").appendChild(salto);
        document.getElementById("pro").appendChild(salto2);
    }
    let btn = document.createElement("button");
    btn.setAttribute("onclick","promedio();");
    btn.innerText = "CALCULAR";
    document.getElementById("pro").appendChild(btn);
}

function promedio() {
    let n = Number(document.getElementById("pro-n2").value);
    let cont = 0;
    for (let index = 0; index < n; index++) {
        cont += Number(document.getElementById(`pro-${index}`).value);
    }
    document.getElementById("pro-res").innerText = `Resultado = ${cont/n}`;
}

function generar_desviacion() {
    let lim = Number(document.getElementById("std-n2").value);
    for (let index = 0; index < lim; index++) {
        let el = document.createElement("input");
        let salto = document.createElement("br");
        let salto2 = document.createElement("br");
        el.type = "number";
        el.id = `std-${index}`;
        document.getElementById("std").appendChild(el);
        document.getElementById("std").appendChild(salto);
        document.getElementById("std").appendChild(salto2);
    }
    let btn = document.createElement("button");
    btn.setAttribute("onclick","desviacion();");
    btn.innerText = "CALCULAR";
    document.getElementById("std").appendChild(btn);
}

function desviacion() {
    let n = Number(document.getElementById("std-n2").value);
    let dataset = []
    let cont = 0;
    for (let index = 0; index < n; index++) {
        cont += Number(document.getElementById(`std-${index}`).value);
        dataset.push(Number(document.getElementById(`std-${index}`).value));
    }

    let media = cont/n;

    // Calculo de varianza
    let sum = 0;

    dataset.forEach(function(element){
        sum += Math.pow(element-media, 2);
    });

    let varianza = sum/n;

    document.getElementById("std-res").innerText = `Resultado = ${Math.sqrt(varianza)}`;
}