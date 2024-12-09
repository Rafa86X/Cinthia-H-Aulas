const mercuryFact =
  "Mercúrio é o planeta mais próximo do Sol e, surpreendentemente, não é o mais quente. Ele não possui atmosfera significativa para reter calor, o que causa temperaturas extremas: até 430°C de dia e -180°C à noite.";

const venusFact =
  "Vênus é o planeta mais quente do Sistema Solar, com temperaturas médias de 465°C, causadas por seu efeito estufa descontrolado. Ele também gira na direção oposta à maioria dos planetas, um fenômeno chamado rotação retrógrada.";

const earthFact =
  "A Terra é o único planeta conhecido a abrigar vida. Além disso, a Lua desempenha um papel crucial em estabilizar a inclinação do eixo terrestre, garantindo climas relativamente estáveis ao longo de milhões de anos.";

const marsFact =
  "Marte, conhecido como o 'Planeta Vermelho', tem o maior vulcão do Sistema Solar, o Monte Olimpo, que é cerca de três vezes mais alto que o Monte Everest. Ele também possui cânions gigantes como o Valles Marineris.";

const jupiterFact =
  "Júpiter é o maior planeta do Sistema Solar e tem uma tempestade chamada Grande Mancha Vermelha que está ativa há pelo menos 400 anos. Ele também tem 92 luas conhecidas, incluindo a gelada Europa.";

const saturnFact =
  "Saturno é famoso por seus anéis espetaculares, compostos de bilhões de pedaços de gelo e rocha. Alguns desses pedaços têm apenas alguns centímetros, enquanto outros podem ter até vários metros de diâmetro.";

const uranusFact =
  "Urano é o único planeta que gira de lado, com um eixo de rotação inclinado a quase 98 graus. Isso pode ter sido causado por uma colisão massiva no passado, resultando em suas estações extremas.";

const neptuneFact =
  "Netuno, o planeta mais distante do Sol, tem ventos supersônicos que podem atingir 2.400 km/h. É também um dos planetas mais azulados devido ao metano em sua atmosfera, que absorve luz vermelha.";

// pega caixa de texto alvo
const textocuriosidade = document.getElementById("texto-curiosidade");

// pega os botoes
const btnMercurio = document.getElementById("btn-mercurio");
const btnVenus = document.getElementById("btn-venus");
const btnTerra = document.getElementById("btn-terra");
const btnMarte = document.getElementById("btn-marte");
const btnJupter = document.getElementById("btn-jupter");
const btnSaturno = document.getElementById("btn-saturno");

// Funções
function escreveCuriosidadeMercurio() {
  // pega o texto alvo e o conteudo dele como a curiosidade do planeta em questão
  textocuriosidade.innerHTML = mercuryFact;
}
function escreveCuriosidadeVenus() {
  textocuriosidade.innerHTML = venusFact;
}
function escreveCuriosidadeTerra() {
  textocuriosidade.innerHTML = earthFact;
}
function escreveCuriosidadeMarte() {
  textocuriosidade.innerHTML = marsFact;
}
function escreveCuriosidadeJupter() {
  textocuriosidade.innerHTML = jupiterFact;
}
function escreveCuriosidadeSaturno() {
  textocuriosidade.innerHTML = saturnFact;
}

// ativa escutadores q ficam "ouvindo e esperando" um "click"- nesse caso para executar uma ação
btnMercurio.addEventListener("click", escreveCuriosidadeMercurio);
btnVenus.addEventListener("click", escreveCuriosidadeVenus);
btnTerra.addEventListener("click", escreveCuriosidadeTerra);
btnMarte.addEventListener("click", escreveCuriosidadeMarte);
btnJupter.addEventListener("click", escreveCuriosidadeJupter);
btnSaturno.addEventListener("click", escreveCuriosidadeSaturno);

// // Mapeamento de curiosidades por ID de botão
// const planetFacts = {
//   "btn-mercurio":
//     "Mercúrio é o planeta mais próximo do Sol e, surpreendentemente, não é o mais quente. Ele não possui atmosfera significativa para reter calor, o que causa temperaturas extremas: até 430°C de dia e -180°C à noite.",
//   "btn-venus":
//     "Vênus é o planeta mais quente do Sistema Solar, com temperaturas médias de 465°C, causadas por seu efeito estufa descontrolado. Ele também gira na direção oposta à maioria dos planetas, um fenômeno chamado rotação retrógrada.",
//   "btn-terra":
//     "A Terra é o único planeta conhecido a abrigar vida. Além disso, a Lua desempenha um papel crucial em estabilizar a inclinação do eixo terrestre, garantindo climas relativamente estáveis ao longo de milhões de anos.",
//   "btn-marte":
//     "Marte, conhecido como o 'Planeta Vermelho', tem o maior vulcão do Sistema Solar, o Monte Olimpo, que é cerca de três vezes mais alto que o Monte Everest. Ele também possui cânions gigantes como o Valles Marineris.",
//   "btn-jupter":
//     "Júpiter é o maior planeta do Sistema Solar e tem uma tempestade chamada Grande Mancha Vermelha que está ativa há pelo menos 400 anos. Ele também tem 92 luas conhecidas, incluindo a gelada Europa.",
//   "btn-saturno":
//     "Saturno é famoso por seus anéis espetaculares, compostos de bilhões de pedaços de gelo e rocha. Alguns desses pedaços têm apenas alguns centímetros, enquanto outros podem ter até vários metros de diâmetro.",
// };

// // Caixa de texto alvo
// const textocuriosidade = document.getElementById("texto-curiosidade");

// // Adiciona eventos de clique a todos os botões
// Object.keys(planetFacts).forEach((btnId) => {
//   const button = document.getElementById(btnId);
//   button.addEventListener("click", () => {
//     textocuriosidade.innerHTML = planetFacts[btnId];
//   });
// });
