function diferençaEntreVariaveis() {
    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value);

    if (numero1 > numero2) {
        document.getElementById('resultado1a').innerHTML = numero1 - numero2;

    } 
    else if (numero1 == numero2) {
        document.getElementById('resultado1a').innerHTML  = 0;
    }
    else{
        document.getElementById('resultado1a').innerHTML  = numero2 - numero1;
    }

}

function dobroXmaisTriploY() {

    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value);
    document.getElementById('resultado1b').innerText  = (2 * numero1 + 3 * numero2);
}

function multEDivXY() {
    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value); 

    document.getElementById('resultado1c').innerText = numero1 * numero2;

}

function colocaEmOrdem() {
    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value);

    if (numero1 > numero2) {
        document.getElementById('resultado1d').innerHTML = numero1 + ', ' + numero2;

    } 
    else if (numero1 == numero2) {
        document.getElementById('resultado1d').innerHTML  = numero1 + ', ' + numero2;
    }
    else{
        document.getElementById('resultado1d').innerHTML  = (numero2 + ', ' + numero1);
    }

}

function calculoINSS() {
    const nome1 = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('salarioBruto').value);
    const valorINSS = salario * 0.08;
    const salarioLiq = salario - valorINSS;

    document.getElementById('nome').innerText = nome1;
    document.getElementById('salarioBrutoo').innerText = salario;
    document.getElementById('valorINSS').innerText = valorINSS;
    document.getElementById('salarioLiq').innerText = salarioLiq;
   
}


function descontoINSSporSalario() {
    const salario2 = parseFloat(document.getElementById('salarioBruto').value);

    if (salario2 < 1000.01 ) {
        const salarioDescontado = salario2 * 0.08;
    }
    else if (salario2 > 1500 ){
        const salarioDescontado = salario2 * 0.09;
    }
    else {
        const salarioDescontado = salario2 * 0.085;
    }

    document.getElementById('').innerText = salario2;
    document.getElementById('').innerText = salarioDescontado;


   
}