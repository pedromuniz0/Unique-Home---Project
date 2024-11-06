function myFunction(smallImg){
  let fullimg = document.querySelector(".luminaria");
  fullimg.src = smallImg.src;
}

//Shop Cart
  let iconCart = document.querySelector('.fa-cart-shopping');
  let closeBtn = document.querySelector('.cartTab .close');
  let body = document.querySelector('body');
  
  iconCart.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
  })
  closeBtn.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
  })

  // Seleciona os botões de Wishlist e Comprar, e o ícone do carrinho
const wishlistButton = document.querySelector('.evaluation-container button:nth-child(2)');
const buyButton = document.querySelector('.evaluation-container button:nth-child(1)');
const cartIcon = document.querySelector('.fa-cart-shopping');

// Variável para armazenar o contador de itens no carrinho
let cartItemCount = 0;

// Função para adicionar item ao carrinho
function addItemToCart() {
  // Incrementa o contador de itens
  cartItemCount++;

  // Verifica se o contador já existe; se não, cria um
  let cartCounter = document.querySelector('.cart-counter');
  if (!cartCounter) {
    cartCounter = document.createElement('span');
    cartCounter.classList.add('cart-counter');
    cartIcon.parentElement.appendChild(cartCounter);
  }

  // Atualiza o contador com o número de itens no carrinho
  cartCounter.textContent = cartItemCount;
}

// Adiciona o evento de clique aos botões de Wishlist e Comprar
wishlistButton.addEventListener('click', addItemToCart);
buyButton.addEventListener('click', addItemToCart);

// Seleciona o botão e cria a estrutura do modal
document.getElementById('luminaria-office-pro-icon').addEventListener('click', function () {
  showModal();
});

function showModal() {
  // Cria a sobreposição e o modal
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');
  overlay.addEventListener('click', closeModal);

  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  // Conteúdo do modal
  modal.innerHTML = `
    <h2>PRODUTO NOVO:</h2>
    <p>Luminaria Office Pro</p>
    <p>Valor: R$499,99</p>
    <p>Deseja alterar o produto?</p>
    <button id="confirm-yes">Sim</button>
    <button id="confirm-no">Não</button>
  `;
  
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  
  // Adiciona eventos aos botões do modal
  document.getElementById('confirm-yes').addEventListener('click', function () {
    alert('Produto alterado!');
    closeModal();
  });
  
  document.getElementById('confirm-no').addEventListener('click', closeModal);
  
  // Exibe o modal e a sobreposição
  overlay.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  const overlay = document.querySelector('.modal-overlay');
  const modal = document.querySelector('.modal');
  if (overlay) overlay.remove();
  if (modal) modal.remove();
}
