// Seleciona o botão "X" e o input da barra de pesquisa
const btnFechar = document.querySelector('.btn-fechar');
const inputPesquisa = document.querySelector('.input-pesquisa');

// Adiciona um evento de clique ao botão "X"
btnFechar.addEventListener('click', () => {
    // Limpa o valor do input e restaura o placeholder
    inputPesquisa.value = ''; // Limpa o valor
    inputPesquisa.placeholder = 'Buscar...'; // Restaura o placeholder
});

// Aqui você pode incluir a funcionalidade do carrinho, se necessário.
