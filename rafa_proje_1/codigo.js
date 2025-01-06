const caixanum = document.getElementById("caixanum");
const botao = document.getElementById("botao");

function geraNumAleatorio(){

    caixanum.innerHTML=Math.floor(Math.random() * 99);
}

botao.addEventListener("click",geraNumAleatorio)