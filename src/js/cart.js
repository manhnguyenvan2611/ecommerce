import { products } from "../data/products";

let cart = getCart();

if (cart == null) {
  cart = [];
}

export function addToCart(productId) {
  let size = cart.length;
  let isContained = false;

  if (size == 0) {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  } else {
    cart.forEach(item => {
      if (item.productId == productId) {
        item.quantity += 1;
        isContained = true;
      }
    });

    if (!isContained) {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }
  }

  saveCart();
  addToCartPopup();
}

function addToCartPopup() {
  let addPopup = document.querySelector(".addNotification");
  addPopup.style.display = "flex";

  setTimeout(() => {
    addPopup.style.display = "none";
  }, 2000);
}

export function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function getCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  return cart;
}

export function computeCartQuantity() {
  let cart = getCart();
  let cartQuantity = 0;

  if (cart != null) {
    cart.forEach(cartTtem => {
      cartQuantity += cartTtem.quantity;
    });
  
    return cartQuantity;
  }

  return 0;
}

export function deleteCartItem(productId) {
  let cartItemHtml = document.querySelector(`.cartItem-${productId}`);
  cart = cart.filter(cartItem => cartItem.productId != productId);
  cartItemHtml.remove();
  saveCart();
}

export function computeTotal() {
  let subtotal = 0;

  cart.forEach(cartItem => {
    let cartItemId = cartItem.productId;
    let cartItemQuantity = cartItem.quantity;

    products.forEach(product => {
      if (product.id == cartItemId) {
        subtotal += (cartItemQuantity * product.price);
      }
    });
  });

  subtotal = subtotal.toFixed(2);
  return subtotal;
}