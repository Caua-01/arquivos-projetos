// script.js

document.addEventListener('DOMContentLoaded', () => {
    const productButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemCountSpan = document.getElementById('cart-item-count');
    const cartListUl = document.getElementById('cart-list');
    const cartTotalSpan = document.getElementById('cart-total');
    const emptyCartMessage = document.querySelector('.empty-cart-message');

    let cart = []; // Array para armazenar os itens do carrinho

    // Função para atualizar a exibição do carrinho
    function updateCartDisplay() {
        cartListUl.innerHTML = ''; // Limpa a lista atual
        let total = 0;

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block'; // Mostra a mensagem de carrinho vazio
        } else {
            emptyCartMessage.style.display = 'none'; // Esconde a mensagem
            cart.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${item.name}</span>
                    <span>R$ ${item.price.toFixed(2)}</span>
                `;
                cartListUl.appendChild(li);
                total += item.price;
            });
        }

        cartItemCountSpan.textContent = cart.length;
        cartTotalSpan.textContent = total.toFixed(2);
    }

    // Adiciona o evento de clique a cada botão "Adicionar ao Carrinho"
    productButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productItem = event.target.closest('.product-item');
            const productId = event.target.dataset.productId;
            const productName = productItem.querySelector('h3').textContent;
            // Pega o texto do preço, remove "R$", substitui vírgula por ponto e converte para float
            const productPriceText = productItem.querySelector('.price').textContent;
            const productPrice = parseFloat(productPriceText.replace('R$', '').replace(',', '.').trim());

            const newItem = {
                id: productId,
                name: productName,
                price: productPrice
            };

            cart.push(newItem); // Adiciona o novo item ao array do carrinho
            updateCartDisplay(); // Atualiza a interface do carrinho
        });
    });

    // Chama a função pela primeira vez para garantir que o carrinho esteja correto no carregamento
    updateCartDisplay();
});