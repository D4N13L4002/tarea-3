class opeVariablesDefinidas{
    expresiones() {
		let a,b,y,z,w,u,v,res;
		a= document.getElementById("a").value
		b= document.getElementById("b").value
		a= parseInt(a)
		b= parseInt(b)
		y= 2 * a + b - a % 3
		z=a * b + 3 % a + b
		w= a - b + 2 * a % b
		u = b - a + 3 * a % b
		v = 2 * b +  Math.trunc(a+2)  + 4 * b % a
		res=document.getElementById("res");
		res.innerHTML=`Resultados`;
		res.innerHTML +=`<br>1) ${y} = 2 * ${a} + ${b} - ${a} % 3`;
		res.innerHTML+=`<br>2) ${z} = ${a} * ${b} + 3 % ${a} + ${b}`;
		res.innerHTML+=`<br>3) ${w} = ${a} - ${b} + 2 * ${a} % ${b}`;
		res.innerHTML+=`<br>4) ${v} = 2 * ${b} + ${a} div 2 + 4 * ${b} % ${a}`;
		res.innerHTML+=`<br>5) ${u} = ${b} - ${a} + 3 * ${a} % ${b}`;
		console.log(`${y} = 2 * ${a} + ${b} - ${a} % 3`)
    	console.log("res",res)
        console.log(`a=${a},b=${b}, resp=${res.innerHTML}`)
	}

	expresiones2(){
		let y,z,w,u,v,resp;
		y= (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
		z= 2 *(4 - 10 + 8)/2* 36 *(1/2)
		w= 260 / 12 + 54 % 3 - 85 % 7
		u = (48 < 2 * 3) || (2 * 7 < 12)
		v = ((8 > 2) || (932 < 23) ) && 4 == 2
		resp=document.getElementById("resp");
		resp.innerHTML=`Resultados`;
		resp.innerHTML +=`<br>6) ${y} = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3`;
		resp.innerHTML+=`<br>7) ${z} = 2 *(4 - 10 + 8)/2* 36 *(1/2)`;
		resp.innerHTML+=`<br>8) ${w} = 260 / 12 + 54 % 3 - 85 % 7 `;
		resp.innerHTML+=`<br>9) ${u} = (48 < 2 * 3) || (2 * 7 < 12)`;
		resp.innerHTML+=`<br>10) ${v} = ((8 > 2) || (932 < 23) ) && 4 == 2`;
	}
	suma_11(){
		let x=0;
		var num1= parseInt(document.getElementById("numero1").value);
		var num2= parseInt(document.getElementById("numero2").value);
		x= num1+num2;
		
		document.getElementById("respuesta_11").innerHTML=` ${x}`;

	}
	areaDeTriangulo_12(){
		let x=0;
		var base= parseInt(document.getElementById("base").value);
		var altura= parseInt(document.getElementById("altura").value);
		x=(base*altura)/2
		document.getElementById("area").innerHTML=` ${x} cm^2`;
		return false;
	}
	numeroParOImpar_13(){
		var x= parseInt(document.getElementById("num").value);
		if(x % 2 == 0){
			document.getElementById("res").innerHTML=`${x} es par`;
		}else{
			document.getElementById("res").innerHTML=`${x} es impar`;
		}
	}
	calculadoraS_14(){
		let num1,num2,x,res;
		num1= parseFloat(document.getElementById("num1").value)
		num2= parseFloat(document.getElementById("num2").value)
		x= document.getElementById("oper").value
		switch(x){
			case "+":
				res=num1+num2;break;
			case "-":
				res=num1-num2;break;
			case "*":
				res=num1*num2;break;
			case "/":
		
				if (num2 !== 0) {
					res = num1 / num2;
				} else {
					res = 'Error: División por cero';
				}
				break;
			default:
				res = 'Error: Operador no válido';
		
	}		document.getElementById("res").innerHTML=`${res}`;
	}
	tablamultiplicar_15(){
		let x,y,tabla,l
		x = document.getElementById("desde").value
		y= document.getElementById("hasta").value
		tabla= document.getElementById("tabla").value
		x=parseInt(x)
		y=parseInt(y)
		tabla=parseInt(tabla)
		l=document.getElementById("res")
		l.innerHTML=" "
		for (let i = x; i <= y; i++){
			document.getElementById("res").innerHTML+= `<br>${i} * ${tabla} = ${i*tabla}`;
		}
	}
	concatenar_16(){
		let x,y,res;
		x = document.getElementById("palabra1").value
		y = document.getElementById("palabra2").value
		x= x.toLowerCase()
		y= y.toLowerCase()
		res= x+" "+y
		document.getElementById("res").innerHTML=`${res}`
	}
	mayor3n_17(){
		let num,l,aux;
		num= document.getElementById("numeros").value;
		num= num.split(",")
		console.log(num)
		l=num.length
		aux=0
		for(let i=0;i<=l;i++){
			if(aux<num[i]){
				aux=num[i]
			}
		}
		document.getElementById("res").innerHTML=`El numero mayor es: ${aux}`
	}
	edadV_18(){
		let edad;
		edad= parseInt(document.getElementById("edad").value);
		if (edad>=18){
			document.getElementById("res").innerHTML=`Puedes Votar eres Mayor de Edad`
		}else{
			document.getElementById("res").innerHTML=`No Puedes Votar eres Menor de Edad`
		}
	}
	cBMI_19(){
		let altura,peso,BMI;
		altura=document.getElementById("altura").value
		peso=document.getElementById("peso").value
		BMI=peso/(altura*altura)
		if(BMI<18.5){
			document.getElementById("res").innerHTML=`su peso es bajo: BMI ${BMI}`
		}else if (BMI>=18.5 && BMI <=24.9) {
			document.getElementById("res").innerHTML=`su peso es Normal: BMI ${BMI}`
		}else if (BMI>=25 && BMI<= 29.9) {
			document.getElementById("res").innerHTML=`su peso es alto: BMI ${BMI}`
		} else {
			document.getElementById("res").innerHTML=`Tiene sobrepeso: BMI ${BMI}`
		}
	}
	NPN0_20(){
		let num;
		num= document.getElementById("num").value;
		if(num<0){
			document.getElementById("res").innerHTML=`El Numero es negativo`
		}else if (num>0){
			document.getElementById("res").innerHTML=`El Numero es Positivo`
		}else{
			document.getElementById("res").innerHTML=`El Numero es Cero`
		}
	}
	ABisiesto_21(){
		let a,x;
		a= parseInt(document.getElementById("a").value)
		x = a % 4
		if ( x== 0){
			document.getElementById("res").innerHTML=`${a} Es un Año bisiesto`
		}else{
			document.getElementById("res").innerHTML=`${a} Es un Año No bisiesto`
		}
	}
	signoZ_22(){
		let signo,mes,dia;
		mes=document.getElementById("mes").value
		dia=document.getElementById("dia").value
		if(dia>0){
		if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
           signo="Aries"
        } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
           signo="Tauro"
        } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
			signo="Geminis"
        }else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)){
			signo="Cancer"
		}else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)){
			signo="Leo"
		}else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)){
			signo="Virgo"
		}else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)){
			signo="Libra"
		}else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)){
			signo="Escorpio"
		}else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)){
			signo="Sagitario"
		}else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)){
			signo="Capricornio"
		}else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)){
			signo="Acuario"
		}else if ((mes == 2 && dia >= 19) || (mes == 6 && dia <= 20)){
			signo="Piscis"
		}
		document.getElementById("res").innerHTML=`Su Signo es ${signo}`}
		else{
			document.getElementById("res").innerHTML=`Ingrese una Fecha correcta`
		}
	}
	quincena_23(){
		let dia;
		dia=parseInt(document.getElementById("dia").value);
		if(dia>=1 && dia<=15){
			document.getElementById("res").innerHTML="El dia pertenece a la primera Quincena"
		}else if(dia>=16 && dia<=31){
			document.getElementById("res").innerHTML="El dia pertenece a la Segunda  Quincena"
		}else{
			document.getElementById("res").innerHTML="Valor invalido"
		}
	}
	diaSemana_24(){
		let dia;
		dia=document.getElementById("dia").value;
		switch(dia){
			case "1":
				document.getElementById("res").innerHTML="Lunes";break;
			case "2":
				document.getElementById("res").innerHTML="Martes";break;
			case "3":
				document.getElementById("res").innerHTML="Miercoles";break;
			case "4":
				document.getElementById("res").innerHTML="Jueves";break;
			case "5":
				document.getElementById("res").innerHTML="Viernes";break;
			case "6":
				document.getElementById("res").innerHTML="Sabado";break;
			case "7":
				document.getElementById("res").innerHTML="Domingo";break;
			default:
				document.getElementById("res").innerHTML="Valor Invalido"
		}
	}
	fraseIgual_25(){
		let frase1,frase2;
		frase1=document.getElementById("frase1").value
		frase2=document.getElementById("frase2").value
		if(frase1==frase2){
			document.getElementById("res").innerHTML=`Las dos frases son iguales`
		}else{
			document.getElementById("res").innerHTML=`Las dos frases no son iguales`
		}
	}
	calculadoraD_26(){
		let x,precio,des,f;
		x=document.getElementById("can").value
		precio=document.getElementById("precio").value
		des=document.getElementById("des").value
		f= x*(precio-(precio*(des/100)))
		document.getElementById("res").innerHTML=`valor final: $${f.toFixed(2)}`
	}
	calcularImpuesto(valor, impuesto){
		let total;
		total=(valor*impuesto)/100+valor
		return total;
	}
	calcularDescuento(valor, impuesto){
		let total;
		total=(valor*impuesto)/100
		total= valor-total
		return total;
	}
	calImpuesto_27(){
		let factura,impuesto,total;
		factura = parseFloat(document.getElementById("factura").value);
    	impuesto = parseFloat(document.getElementById("impuesto").value);
    	total= this.calcularImpuesto(factura, impuesto); 
    	document.getElementById("res").innerHTML = `valor final: $${total.toFixed(2)}`;
	}
	calAumento_28(){
		let factura,impuesto,total;
		factura = parseFloat(document.getElementById("salario").value);
    	impuesto = parseFloat(document.getElementById("aumento").value);
		total= this.calcularImpuesto(factura, impuesto); 
    	document.getElementById("res").innerHTML = `valor final: $${total.toFixed(2)}`;
	}
	calculoarticulo(x,valor){
		let total;
		total=x*valor;
		return total;
	}
	limpiarP(){
		
	}
	calArticulos_29(){
		let cantidad, precio,total,x;
		cantidad= parseFloat(document.getElementById("articulo").value)
		precio=parseFloat(document.getElementById("precio").value)
		total= this.calculoarticulo(cantidad, precio);
		if(total>100){
			total=total-(total*0.1)
			document.getElementById("res").innerHTML+=`<br>Valor Total: ${total.toFixed(2)}`
		}else{
			document.getElementById("res").innerHTML+=`<br>Valor Total: ${total.toFixed(2)}`
		}
	}
	calSalario_30(){
		let salario,impuesto,total;
		salario= parseFloat(document.getElementById("salario").value)
		if(salario<=10000 && salario>=1){
			impuesto=5
		}else if(salario>=10001 && salario<=20000){
			impuesto=10
		}else{
			impuesto=15
		}
		total=this.calcularDescuento(salario, impuesto)
		document.getElementById("res").innerHTML=`Salario: ${total} con un impuesto de ${impuesto}%`
	}
	caldescuento_31(){
		let A,salario,total;
		A=parseFloat(document.getElementById("A").value)
		salario=parseFloat(document.getElementById("salario").value)
		if(A>5){
			total=this.calcularImpuesto(salario, 5)
			document.getElementById("res").innerHTML=`Salario: ${total} con un bono de 5 %`	
		}else{
			document.getElementById("res").innerHTML=`Salario: ${salario} `
		}
	}
	caltarifa_32(){
		let distancia,total;
		distancia=document.getElementById("distancia").value
		if (distancia<=50){
			total=10
		}else{
			total=20
		}		
		document.getElementById("res").innerHTML=`Costo de envio: $${total} `
	}
	callealtad_33(){
		let res,total,compra;
		res=parseFloat(document.getElementById("compras").value)
		compra=parseFloat(document.getElementById("factura").value)
		if(res>500){
			document.getElementById("ap").innerHTML=`tiene un descuento de 10% al valor final de su factura de compra `
			total=this.calcularImpuesto(compra, 10)
			document.getElementById("res").innerHTML=`total $${total} `
		}else{
			document.getElementById("ap").innerHTML=`no tiene el descuento`
			document.getElementById("res").innerHTML=` $${compra} `

	}
	}
	calProducto_34(){
		let can,precio,total,des;
		can= parseFloat(document.getElementById("can").value)
		precio= parseFloat(document.getElementById("precio").value)
		if(can>=10 && can<=50){
			des=5
		}else if(can>=51 && can<=100){
			des=10
		}else if(can>100){
			des=15
		}else{
			des=0
		}
		total=this.calcularDescuento(precio*can,des)
		document.getElementById("res").innerHTML=`Con un descuento del ${des}% El total es de: $${total}`
	}
	calhora_35(){
		let horas,des,total;
		horas=document.getElementById("can").value
		if(horas>10){
			des=20
		}else{
			des=0
		}
		total=this.calcularDescuento(horas*4,des)
		document.getElementById("res").innerHTML=`El total es de: $${total}`

	}
	
	forsuma_36(){
		let suma=0

		for(let i=0; i<=50;i++){
			if(i%2==0){
			suma=suma+i;}
		}
	  document.getElementById("res").innerHTML=`La suma de todos los pares del 1 al 50 es de ${suma}`
	}
	tablaM_37(){
		let numero;
		numero=document.getElementById("numero").value
		for(let i=1;i<=12;i++){
			document.getElementById("res").innerHTML+=`<br>${numero} x ${i}=${numero*i}`
		}
	}
	vocalestol_38(){
	let num1="0";
	num1=document.getElementById("texto").value;
	num1=num1.toLowerCase();
	let contador=0;
	let indice=0;
	while(indice<num1.length){
		const caracter=num1[indice]
		if(caracter ===`a`||caracter===`e`||caracter===`i`||caracter===`o`||caracter===`u`){
			contador++;
			}
		indice++
		}
		document.getElementById("res").innerHTML=`El total de vocales en la palabra "${num1}" es : ${contador}`
	}
	contadordi_39(){
	let num1="0" , contador=0;
	num1=document.getElementById("texto").value;
		for( let i=0;i<num1.length;i++){
		  contador++;
		}
		document.getElementById("res").innerHTML=`El total de caracteres que hay en la palabra "${num1}" es : ${contador} `
	}
	Adivinanu_40(){
	let num1=0;  
	num1=parseInt(document.getElementById("numero").value);
	let numal = Math.floor(Math.random()*3)+1;
	if(num1==numal){
		document.getElementById("res").innerHTML=`Felicidades el numero era ${numal}`;}
	else{
		document.getElementById("res").innerHTML=`Sigue intentando`;
	}
}

	contadorletra_41(){
	let num1="0" , contador=0;
	num1=document.getElementById("texto").value;
	num1=num1.toLowerCase();
	for(let i=0 ;i<num1.length;i++){
		const caracter = num1[i];
		if(caracter>='a' && caracter<='z'){
			contador++;
			}
		}
	document.getElementById("res").innerHTML=`El total de letras que hay en la palabra "${num1}" es : ${contador} `
}
	sumaimparesa_42(){
	let a=1 ,suma=0;
	while(a<=100){
		suma=suma+a;
		a=a+2;
		}
	document.getElementById("res").innerHTML=`La suma de los impares del 1 al 100 es : ${suma} `
	}
	contadorcaracteres_43(){
	let num1="0" , contador=0;
	num1=document.getElementById("texto").value;
	num1=num1.toLowerCase();
	for(let i=0 ;i<num1.length;i++){
	const caracter = num1[i];
	if(caracter>='!' && caracter<='/'){
	contador++;
	}
	}
	document.getElementById("res").innerHTML=`El total de caracteres que hay en la palabra "${num1}" es : ${contador} `
	}
	sumaingresados_44(){
		let numero=0;
		let num1 = document.getElementById("texto").value;
		num1=num1.split(",")
		for(let i=0; i<num1.length;i++){
			numero += parseInt(num1[i]); 
		}
		
	document.getElementById("res").innerHTML=`La suma de todos los elementos de este arreglo es : ${numero}`
	}
	cuentare_45(){
		let numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero) || numero <= 0) {
       document.getElementById("res").innerHTML=`ingrese un numero valido`
		}else {
			let cuenta_atras = setInterval(function() {
				document.getElementById("res").innerHTML = `${numero}`;
				numero--;

				if (numero < 0) {
					clearInterval(cuenta_atras);
				}
			}, 1000); 
		}
	}
	sumaarreglo_46(){
		let numero=0;
		let num1 = document.getElementById("numero").value;
		num1=num1.split(",")
		for(let i=0;i<num1.length;i++){
			numero += parseInt(num1[i]);
		}
		document.getElementById("res").innerHTML=`La suma de todos los lementos de este arreglo es : ${numero}`
	
	}
	sumaarreglopro_47(){
		let numero=0;
		let num1 = document.getElementById("numero").value;
		num1=num1.split(",")
		for(let i=0;i<num1.length;i++){
			numero += parseInt(num1[i]);
		}
		numero=parseFloat(numero/num1.length)
		document.getElementById("res").innerHTML=`La suma de todos los lementos de este arreglo es : ${numero}`
		}
	mayorymenorarre_48(){
		let numero=0,aux=0,aux1=2220;
		let num1 = document.getElementById("numero").value;
		num1=num1.split(",")
		for(let i=0;i<num1.length;i++){
			numero=parseInt(num1[i])
			if(numero>aux){
				aux=numero
			}
			if(numero<aux1){
				aux1=numero
			}
		}
		document.getElementById("res").innerHTML=`El numero mayor es ${aux} y el menor es ${aux1}`
	}
	encontrarnumero_49() {
			let num2 = parseInt(document.getElementById("numero1").value)
			let num1 = document.getElementById("numero").value;
			num1=num1.split(",")
			let encontrado = false;
			for (let i = 0; i < num1.length; i++) {
					if(num2==num1[i]){
					encontrado = true;
					}
				} 
		
			if (encontrado) {
				document.getElementById("res").innerHTML = `El número ${num2} sí se encuentra en el arreglo.`;
			} else {
				document.getElementById("res").innerHTML = `El número ${num2} no se encuentra en el arreglo.`;
			}
		}
	contadorelempares_50(){
		let num1 = document.getElementById("numero").value;
		num1=num1.split(",")
		let suma=0
		for (let i = 0; i < num1.length; i++) {
			if(num1[i] % 2 == 0){
				suma++
			}
		} 
		document.getElementById("res").innerHTML=`numeros pares contados: ${suma}`
	}
	invertir_51() {
		let num = document.getElementById("numero").value;
		let inver = [];
	
		num = num.split(",");
	
		for (let i = num.length - 1; i >= 0; i--) {
			inver.push(num[i]);
		}
	
		document.getElementById("res").innerHTML = `${inver}`;
	}
	
	buscarindice_52(){
		let num1 = document.getElementById("numero1").value;
		let num2 = document.getElementById("numero").value; 
		let numero=0,a=0
		num2=num2.split(",")
		for (let i = 0; i < num2.length; i++) {
			numero=num2[i]
			if (numero == num1) {
				document.getElementById("res").innerHTML += `<br>El numero ${num1} está en la posición ${i}`;
			a++
			}
			if (a==0){
				document.getElementById("res").innerHTML = `El número ${num1} no se encuentra en el arreglo.`;
			}
		}
	}
	funcionsuma_54(){
		let num1 = parseFloat(document.getElementById("numero1").value);
		let num2 = parseFloat(document.getElementById("numero2").value);
		this.sumarNumerosf(num1,num2)
	}
	sumarNumerosf(a, b) {
		let resultado = a + b;
	   document.getElementById("res").innerHTML=`${resultado}`;
	   return;
	}
	multiplicarNumeros(numero1, numero2) {
		let resultado = numero1 * numero2;
		return resultado;
	}
	funcionM_55(){
		let num1=	parseFloat(document.getElementById("numero1").value)
		let num2=	parseFloat(document.getElementById("numero2").value)
		let resultado= this.multiplicarNumeros(num1, num2)
		document.getElementById("res").innerHTML=`${resultado}`
	}
	parimpar3(num){
		if (num % 2 == 0) {
			document.getElementById("res").innerHTML= `el numero es par`
		} else {
			document.getElementById("res").innerHTML= `el numero es impar`
		}
	}
	funcionPar_56(){
		let num1=	parseInt(document.getElementById("numero1").value)
		this.parimpar3(num1)
	}
	imprimirNumeros_61() {
		for( let num = 1; num <= 10; num++){
			document.getElementById("res").innerHTML+=`<br> ${num}`
		}
	}
}
	const ejercicios = new opeVariablesDefinidas();




/***************       FUNCIONES         *****************/

function saludar(){
document.getElementById("res").innerHTML= `HOLA :)`
}




function calcularAreaRectangulo(base, altura){
   return(base * altura) / 2;
}

function imprimirNombre() {
    var nombre = "Luis Steven Yami Elkin Douglas"; 
    document.getElementById("respuesta").innerHTML= `mi nombre es ${nombre}`
}


function celsiusToFahrenheit() {
    let gradosCelsius= parseInt(prompt("Ingrese la temperatura en grados Celsius:"));

        return gradosFahrenheit = (gradosCelsius * 9/5) + 32;
}

function contadorcaracteresf(){
    let num1="0" , contador=0;
    num1=document.getElementById("num1").value;
    num1=num1.toLowerCase();
    for(let i=0 ;i<num1.length;i++){
    const caracter = num1[i];
    if(caracter>='!' && caracter<='/'){
    contador++;
    }
    }
    document.getElementById("respuesta").innerHTML=`El total de caracteres que hay en la palabra "${num1}" es : ${contador} `
    }



function sumarNumeros3(listaNumeros) {
    var resultado = listaNumeros.reduce(function(suma, numero) {
        return suma + numero;
    }, 0);

    return resultado;
}

