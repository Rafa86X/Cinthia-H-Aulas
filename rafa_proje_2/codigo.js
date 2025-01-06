const caixanum = document.getElementById("caixanum");
const botaoVd = document.getElementById("botao-vd");
const botaoVm = document.getElementById("botao-vm");
const botaoAz = document.getElementById("botao-az");


function ficaVerde(){

    caixanum.style.backgroundColor="rgb(0,255,0)";
}
function ficaVermelho(){

    caixanum.style.backgroundColor="rgb(255,0,0)";
}
function ficaAzul(){

    caixanum.style.backgroundColor="rgb(0,0,255)";
}



botaoVd.addEventListener("click",ficaVerde)
botaoVm.addEventListener("click",ficaVermelho)
botaoAz.addEventListener("click",ficaAzul)