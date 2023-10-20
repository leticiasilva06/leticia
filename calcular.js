// calculadora 

function calcularDoisNumeros(operacao){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    let resposta;
    
    switch(operacao){
        case "*": resposta = num1*num2
        break
        case "/": resposta = num1/num2
        break
        case "+": resposta = num1+num2
        break
        case "-": resposta = num1-num2
        
    }
    
    document.getElementById("resultado").innerHTML = resposta

    
}

// tabuada

const tabuada = document.getElementById("tabuada");
function mostrarTabuada() {

    let numero = Number(document.getElementById("numero").value);

    let resposta = "";
    for (let i = 1; i <= 10; i++) {
        resposta += numero + "x" + i + "=" + numero * i + "<br>"; 
    }
    tabuada.innerHTML = resposta;
}

// lista de alunos

const alunos = ["Sara", "Abner", "Guilherme", "Chrystian", "Victória"];

function listaAlunos() {
    

    let i = 0;
    let text = "";
    while (i < alunos.length) {
      text += "<li>" + alunos[i] + "</li>";
      i++;
    }
                

document.getElementById("alunos").innerHTML = text
}