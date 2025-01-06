
// Pegar o elemento

const matriz = document.getElementById("matriz");
const inputNum = document.getElementById("input-dados");
const botao = document.getElementById("botao")



function criaMatriz(repet){
    //zera a matriz
    matriz.innerHTML = "";

    for (let index = 0; index < repet; index++) {

        const linha = document.createElement('div');
        linha.classList.add("linha");
    
            for(i=0; i<repet; i=i+1){
    
                // Explicação:
                // Math.random(): Gera um número decimal entre 0 (inclusivo) e 1 (exclusivo).
                // Multiplicação por 61: Ajusta o intervalo para 0 até 60 (exclusivo).
                // Math.floor(): Arredonda para baixo, garantindo números inteiros no intervalo de 0 a 60.
                const numeroAleatorio = Math.floor(Math.random() * 61); // 60 - 0 + 1 = 61
            
                // Criar uma caixinha dinamicamente
                const caixinha = document.createElement('div');
                //dando a classe "caixinha" para o elemento criado chamado caiixinha
                caixinha.classList.add("quadradinho");
    
                if(numeroAleatorio % 2 == 0){
                    if(numeroAleatorio % 3 == 0){
                        caixinha.classList.add("cor-aquamarine");
                    }
                }else{
                    caixinha.classList.add("cor-salmon");
                }
    
                // adicionando o randon a cada div
                caixinha.innerHTML = numeroAleatorio;
                
                
                // adicionar ela dentro da linha
                linha.appendChild(caixinha)
            }
    
    
    matriz.appendChild(linha)
    
    }
}


botao.addEventListener("click",()=>{
    const repet = inputNum.value
    criaMatriz(repet)

})