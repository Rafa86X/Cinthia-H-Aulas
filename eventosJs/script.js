// Evento 1: click
document.getElementById('clickButton').addEventListener('click', () => {
    alert('Você clicou no botão!');
});

// Evento 2: mouseover
document.getElementById('hoverInput').addEventListener('mouseover', () => {
    document.getElementById('hoverInput').style.backgroundColor = '#d3f9d8';
});

document.getElementById('hoverInput').addEventListener('mouseout', () => {
    document.getElementById('hoverInput').style.backgroundColor = 'white';
});

// Evento 3: blur
document.getElementById('blurInput').addEventListener('blur', () => {
    alert('Você saiu do campo de texto!');
});

// Evento 4: dblclick
document.getElementById('doubleClickButton').addEventListener('dblclick', () => {
    alert('Você deu um clique duplo no botão!');
});

// Evento 5: contextmenu (clique com botão direito)
document.getElementById('rightClickButton').addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Evita o menu padrão
    alert('Clique com o botão direito detectado!');
});

// Evento 6: change
document.getElementById('changeSelect').addEventListener('change', (event) => {
    alert(`Você selecionou a opção: ${event.target.value}`);
});

// function handlePageLoad() {
//     alert('A página foi carregada com sucesso!');
// }
