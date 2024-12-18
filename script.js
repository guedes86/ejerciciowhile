function mensanje(){
    let texto = prompt('Usted entendio el mensaje - si o no')

    while (texto != 'si'){

        texto = prompt('Usted entendio el mensaje - si o no')

    }
    alert("Usted entendio el mensaje")
}

function advinanza(){
    let aleatorio = Math.floor(Math.random()*11)
    let numero = Number(prompt('Juego adivinanza - por favor ingresse un valor entre 0 y 10'))

  
    while(numero != aleatorio){
        
        numero = Number(prompt('Intentar otro valor - por favor ingresse un valor entre 0 y 10'))
    }

    alert("Usted acerto el valor")
}

function juegodedados(){
    let aleatorio = Math.ceil(Math.random()*6)
    let texto = prompt(`Juego de dado - Valor : ${aleatorio} : deseas jugar nuevamente el dado`)
    
    while(texto != "no"){
        aleatorio = Math.ceil(Math.random()*6)
        texto = prompt(`Juego de dado - Valor : ${aleatorio} : deseas jugar nuevamente el dado`)
    
    }

}

function suma(){

    let num1 = 0
    let num2 = 0
    let texto = ""
    
    while(texto != "no"){

        num1 = Number(prompt(`Adicione el primero valor para realizar una Suma`))
        num2 = Number(prompt(`Adicione el primero valor para realizar una Suma`))

        alert(`El resultado de la suma es igual a ${num1+num2}`)

        texto = prompt('Usted desea realizar una nueva suma - si o no')
    
    }
}

function acumulador(){

    let nota = 0
    let suma = 0
    let texto = ""
    
    while(texto != "no"){

        nota = Number(prompt(`Ingresse el valor de la calificacion de una nota entre 0 a 100`))
        
        if (nota > 0 && nota <= 100){

            suma += nota

        } else {
            alert('Por favor ingressar un valor dentre 0 a 100')
        }

        texto = prompt('Usted desea agregar mas un valor - si o no')
    
    }
    alert(suma)
}

function temperatura(){

    let celsius = 0
    let far = 0
    let texto = ""
    
    while(texto != "no"){

        celsius = Number(prompt(`Adicione la temperadura en celsiu para transforma a Fahrenheit`))

        far = (celsius*1.8)+32

        alert(`El resultado de la transformacion es igual a ${far} Fahrenheit`)

        texto = prompt('Usted desea hacer una nueva transformacion - si o no')
    
    }
}

function validacionEdad(){
    
    let edad = 0
 
    while(edad <= 1 || edad > 120){

        edad = Number(prompt(`Por favor adicione su Edad`))

        if (edad <= 1 || edad > 120){
            alert("El valor adicionado es invalido por favor adicionar un valor dentre 1 y 120")
        }

    }

    alert("Valor adicionado es valido")
    
}

function encuesta(){

    let resposta = prompt("Usted tuvo un buena atencion - Marque -- s -- para si y -- n -- para no")
    while(resposta !=="s" && resposta !=="n"){

        resposta = prompt("Por favor responder con -- s -- para Si y -- n -- para NO")

    }
    alert("Respuesta valida")
}

function cambio(){
    
    let euro = 0;
    resposta = "";


    while(resposta !="no"){

        euro = Number(prompt("ingressar el valor de Euro deseas cambiar para dolar"))
        resposta = prompt(`El valor del cambio es $${euro*1.05} dolares - Deseas realizar una nueva transacion si o no`)

    }
}





