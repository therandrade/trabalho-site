// Seleciona o botão "X" e o input da barra de pesquisa
const btnFechar = document.querySelector('.btn-fechar');
const inputPesquisa = document.querySelector('.input-pesquisa');

// Adiciona um evento de clique ao botão "X"
btnFechar.addEventListener('click', () => {
    inputPesquisa.value = ''; // Limpa o valor
    inputPesquisa.placeholder = 'Buscar...'; // Restaura o placeholder
});

function togglePopup() {
    const popup = document.getElementById('popup');
    console.log("Popup toggled"); // Para verificar se a função é chamada
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

// Adiciona um evento de clique ao ícone de opções
const iconeOpcoes = document.querySelector('.icone-opcoes');
iconeOpcoes.addEventListener('click', togglePopup);

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Garante que o popup esteja escondido ao carregar a página
});
