import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { computeCartQuantity } from "../js/cart";

export default function Header(cartQuantity) {
  /**
   * cart quantity
   */
  let [quantity, setQuantity] = useState(computeCartQuantity());
  
  setInterval(() => {
    setQuantity(quantity => computeCartQuantity());
  }, 1000);

  /**
   * redirects
   */
  let navigation = useNavigate();

  function signupRedirect() {
    navigation("/signup");
  }

  function cartRedirect() {
    navigation("/cart");
  }

  function homeRedirect() {
    navigation("/");
  }

  /**
   * show sidebar
   */
  useEffect(() => {
    let menuBtn = document.querySelector('.menuBtn');
    let sidebar = document.querySelector('.sidebar');

    menuBtn.onclick = function() {
      sidebar.classList.toggle('sidebar-display');
    }

    document.addEventListener('mouseup', function(e) {  
      if (!sidebar.contains(e.target)) {
          sidebar.classList.remove('sidebar-display');
      }
    });
  }, []);
  return (
    <header className="header">
      <div className="headerLogo">
        <button className="menuBtn">
          <img className="icon menu__img" src="./images/icons/menu.png" alt="menu"/>
        </button>
        <img className="logo__img" onClick={homeRedirect} src="./images/logo.jpg" alt="logo"/>
      </div>

      <form className="searchForm">
        <select className="searchSelect">
          <option className="searchOption">All</option>
          <option className="searchOption">Smartphones</option>
          <option className="searchOption">Computers</option>
        </select>

        <input className="search__input" type="search" placeholder="Search your favorite product..."/>

        <button className="searchBtn">
          Search
        </button>
      </form>

      <div className="headerShop">
        <button className="shopBtn">
          <img className="icon user__img" src="./images/icons/user.png" alt="account"/>
          <div className="shopRegister" onClick={signupRedirect}>
            <span className="shop__signin">Sign in</span>
            <span className="shop__account">Account</span>
          </div>
        </button>

        <button className="shopBtn">
          <div className="shop__number favorite__number">0</div>
          <img className="icon heart__img" src="./images/icons/heart.png" alt="favorites"/>
        </button>

        <button className="shopBtn" onClick={cartRedirect}>
          <div className="shop__number cart__number">{quantity}</div>
          <img className="icon cart__img" src="./images/icons/cart.png" alt="cart"/>
        </button>
      </div>
    </header>
  );
}