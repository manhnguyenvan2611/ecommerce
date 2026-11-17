import { products } from "../data/products";

let cart = getCart();

if (cart == null) {
  cart = [];
}

export function addToCart(cart, productId) {
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

  saveCart(cart);
  addToCartPopup();
}

function addToCartPopup() {
  let addPopup = document.querySelector(".addNotification");
  addPopup.style.display = "flex";

  setTimeout(() => {
    addPopup.style.display = "none";
  }, 2000);
}

export function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function getCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));

  if (cart == null) {
    cart = [];
  }
  
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
  let tempCart = getCart();
  let cartItemHtml = document.querySelector(`.cartItem-${productId}`);
  tempCart = tempCart.filter(cartItem => cartItem.productId != productId);
  saveCart(tempCart);

  return getCart().reverse();
}

export function computeTotal(cart) {
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

/**
 * update cart item's quantity
 */
export function updateItemQuanity(cartItemId, amount) {
  let tempCart = getCart();
  let quantityInput = document.querySelector(`.quantity__input-${cartItemId}`);

  tempCart.forEach(cartItem => {
    if (cartItem.productId == cartItemId) {
      if (amount < 0 && cartItem.quantity > 1) {
        cartItem.quantity = cartItem.quantity - 1;
      } else if (amount > 0) {
        cartItem.quantity = cartItem.quantity + 1;
      }

      quantityInput.value = cartItem.quantity;
      saveCart(tempCart);
    }
  });

  return tempCart.reverse();
}

export function updateInputQuantity(event, cartItemId) {
  let tempCart = getCart();
  let newQuantity = event.target.value;

  tempCart.forEach(cartItem => {
    if (cartItem.productId == cartItemId) {
      cartItem.quantity = newQuantity;

      saveCart(tempCart);
    }
  });

  return tempCart.reverse();
}
