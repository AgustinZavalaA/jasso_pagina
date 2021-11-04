let dataset_prompt = prompt("Introduce tu grupo de datos separados por comas(,):");
let dataset = dataset_prompt.split(',').map(Number);

// Calculo de media
let n = dataset.length;
let total = 0;

dataset.forEach(function(element){
   total += element; 
});

let media = total/n;

// Calculo de varianza
let sum = 0;

dataset.forEach(function(element){
    sum += Math.pow(element-media, 2);
});

let varianza = sum/n;

// Desviacion estandar
alert(`Desviacion estandar:\n${Math.sqrt(varianza)}`);