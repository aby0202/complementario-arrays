//calculadora para entregable 1

function suma(num1, num2) {
	let resultado = parseInt(num1) + parseInt(num2);
	return resultado;
}

function resta(num1, num2) {
	let resultado = parseInt(num1) - parseInt(num2);
	return resultado;
}

function multiplicacion(num1, num2) {
	let resultado = parseInt(num1) * parseInt(num2);
	return resultado;
}

function division(num1, num2) {
	let resultado = parseInt(num1) / parseInt(num2);
	return resultado;
}

function saludar() {
	let nombre = prompt('¿Cual es tu nombre?')
	alert(`¡HOLA ${nombre}!`)
}

saludar()

function preguntar() {
	const resultadosAnteriores = [];
	let pregunta = prompt("¿Queres realizar una operacion? \n 1- si \n 2- no")
	while (pregunta == "si") {
		alert("¿Que operación deseas realizar?");
		let operacion = prompt(`1: suma,  2: resta,  3: división,  4: multiplicación, 5: resultados Anteriores, 6: salir`);

		if (operacion == 1) {
			let numero1 = prompt("primer número para sumar");
			let numero2 = prompt("segundo número para sumar");
			resultado = suma(numero1, numero2);
			alert(`tu resultado es ${resultado}`);
			resultadosAnteriores.push(`${resultado}`);

		} else if (operacion == 2) {
			let numero1 = prompt("primer número para restar");
			let numero2 = prompt("segundo número para restar");
			resultado = resta(numero1, numero2);
			alert(`tu resultado es ${resultado}`);
			resultadosAnteriores.push(`${resultado}`);
		} else if (operacion == 3) {
			let numero1 = prompt("primer número para dividir");
			let numero2 = prompt("dividido por");
			resultado = division(numero1, numero2);
			alert(`tu cociente es ${resultado}`);
			resultadosAnteriores.push(`${resultado}`);
		} else if (operacion == 4) {
			let numero1 = prompt("primer número para multiplicar");
			let numero2 = prompt("segundo número para multiplicar");
			resultado = multiplicacion(numero1, numero2);
			alert(`tu resultado es ${resultado}`);
			resultadosAnteriores.push(`${resultado}`);
		}else if (operacion == 5){
			alert(resultadosAnteriores.join("\n"));;
		}else if (operacion == 6){
			break;
		} else {
			alert("no se ha encontrado la operación")
		}
	}
	
	if (pregunta == "no") {
		alert("¡Nos vemos pronto!")
	} else {
		alert("Ingrese una opcion valida")
		preguntar()
	}
}

preguntar()