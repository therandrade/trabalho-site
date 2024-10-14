
const buttons = document.querySelectorAll('.adicionar');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalSpan = document.getElementById('total');
let total = 0;
 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.parentElement;
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));
       
        adicionarAoCarrinho(nome, preco);
    });
});
 
function adicionarAoCarrinho(nome, preco) {
    const item = document.createElement('div');
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    itensCarrinho.appendChild(item);
   
    total += preco;
    totalSpan.textContent = total.toFixed(2);
}