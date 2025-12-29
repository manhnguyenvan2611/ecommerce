import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import cartStyle from "../css/cart.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Sidebar from "../components/sidebar";
import { getCart, deleteCartItem, computeTotal } from "../js/cart";
import { products } from "../data/products";

export default function Cart() {
  let navigation = useNavigate();
  
  /**
   * cart display
   */
  let cart = getCart();
  let [cartHtml, setCartHtml] = useState(displayCart());
  
  if (cart == null) {
    cart = [];
  }

  function displayCart() {
    let cartHtml = cart.reverse().map(cartItem => {
      let cartproduct = null;
  
      products.forEach(product => {
        if (cartItem.productId == product.id) {
          cartproduct = product;
        }
      });

      let imageSource = cartproduct.image;
      let cartItemQuantity = cartItem.quantity;
      return (
          <div className={`${cartStyle.cartItem} cartItem-${cartproduct.id}`} key={cartproduct.id}>
            <div className={cartStyle.cartItemImage}>
              <img className={cartStyle.cart__item__img} src={`./images/subimages/${imageSource}`} alt="cart's item"/>
            </div>
            <div className={cartStyle.cartItemInfor}>
              <div className={cartStyle.cartItemDetails}>
                <h4 className={cartStyle.cart__item__name}>
                  {cartproduct.name}
                </h4>
                <div className={cartStyle.cartItemQuantity}>Quantity: 
                  <input className={cartStyle.quantity__input} type="number" defaultValue={cartItemQuantity} min="1" max="10"/>
                </div>
                <button className={cartStyle.deleteBtn} onClick={() => {deleteCartItem(cartproduct.id); setCartHtml(cartHtml => displayCart()); updateTotal();}}>
                  Delete
                </button>
              </div>
              <div className={cartStyle.cartItemPrice}>${cartproduct.price}</div>
            </div>
          </div>
        );
    });

    return cartHtml;
  }

  /**
   * total cost
   */
  let rateDiscount = 0.1; // 10%
  let [subtotal, setSubtotal] = useState(computeTotal());
  let [discount, setDiscount] = useState((subtotal * rateDiscount).toFixed(2));
  let [total, setTotal] = useState((subtotal - discount).toFixed(2));

  function updateTotal() {
    setTimeout(() => {
      let newSubtotal = computeTotal();
      let newDiscount = (newSubtotal * 0.1).toFixed(2)
      let newTotal = (newSubtotal - newDiscount).toFixed(2)
      
      setSubtotal(subtotal => newSubtotal);
      setDiscount(discount => newDiscount);
      setTotal(total => newTotal);
    }, 1000);
  }

  /**
   * sidebar styling
   */
  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let menuBtn = document.querySelector('.menuBtn');
    let body = document.querySelector('body');

    menuBtn.style.display = "block";
    sidebar.style.display = "none";
    sidebar.style.position = "fixed";
    sidebar.style.overflowY = "scroll";
    sidebar.style.top = '110px';
    sidebar.style.bottom = '0';

    if (body.clientWidth <= 600) {
      sidebar.style.top = '100px';
    }

    menuBtn.onclick = function() {
      sidebar.style.display = "block";
    }

    document.addEventListener('mouseup', function(e) {  
      if (!sidebar.contains(e.target)) {
          sidebar.style.display = "none";
      }
    });
  }, []);
  return (
    <>
      <Navigation />
      <Header />
      <Sidebar />
      <main className={cartStyle.main}>
        <h2 className={cartStyle.cart__heading}>Shopping cart</h2>

        <div className={cartStyle.cartItemsCheckout}>
          <section className={cartStyle.cartItems}>
            {cartHtml}

          </section>

          <section className={cartStyle.checkout}>
            <h3 className={cartStyle.checkout__heading}>Order Summary</h3>
            <div className={cartStyle.checkoutDetails}>
              <div className={cartStyle.checkoutDetail}>
                <h5 className={cartStyle.checkout__field}>Sub total</h5> ${subtotal}
              </div>
              <div className={cartStyle.checkoutDetail}>
                <h5 className={cartStyle.checkout__field}>Discount (10%)</h5> ${discount}
              </div>
              <div className={cartStyle.checkoutDetail}>
                <h5 className={cartStyle.checkout__field}>Total</h5> ${total}     
              </div>
            </div>
            <button className={cartStyle.checkoutBtn}>Checkout now</button>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}