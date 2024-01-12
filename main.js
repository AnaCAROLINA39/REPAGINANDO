var segredo = "senha";

var input = document.querySelector("input");

function verifica(){

    if(input.value == segredo) {

        window.location.href = "./Inicial/index.html";
    } else {
    
        alert("SENHA INCORRETA!");
    }
}

var button = document.querySelector("button");
button.onclick = verifica;

