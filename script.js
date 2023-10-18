function calcularDoisNumeros(num1,num2,operacao){

    let resposta

   /*  if (operacao === "*") {
     resposta = multiplicar(num1,num2)
    }else if(operacao === "/"){
     resposta = dividir(num1,num2)
    }else if(operacao === "+"){
     resposta = somar(num1,num2)  
    }else if(operacao === "-"){
     resposta = subtrair(num1,num2)
    } */

    switch(operacao){
        case "*": resposta = multiplicar(num1,num2)
        break
        case "/": resposta = dividir(num1,num2)
        break
        case "+": resposta = somar(num1,num2)
        break
        case "-": resposta = subtrair(num1,num2)
        
    }
    
    document.getElementById("resultado").innerHTML = resposta
}



function multiplicar(num1,num2){
    return num1 * num2
}

function dividir(num1,num2){
    return num1/num2
}

function subtrair(num1,num2){
    return num1-num2
}

function somar(num1,num2){
    return num1+num2
}
 