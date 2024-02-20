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