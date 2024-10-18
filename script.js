const btnFechar = document.querySelector('.btn-fechar');
const inputPesquisa = document.querySelector('.input-pesquisa');


btnFechar.addEventListener('click', () => {
    inputPesquisa.value = ''; 
    inputPesquisa.placeholder = 'Buscar...'; 
});

function togglePopup() {
    const popup = document.getElementById('popup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block'; 
    } else {
        popup.style.display = 'none'; 
    }
}

function togglePesquisaPopup() {
    const popupPesquisa = document.getElementById('popup-pesquisa');
    popupPesquisa.style.display = popupPesquisa.style.display === 'block' ? 'none' : 'block';
}
