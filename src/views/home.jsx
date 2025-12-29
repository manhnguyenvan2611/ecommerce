import { useState, useEffect } from "react";
import home from "../css/index.module.css";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Header from "../components/header";
import Navigation from "../components/navigation";
import AddPopup from "../components/addpopup";
import { products } from "../data/products";
import { bestSellers } from "../data/bestsellers";
import { addToCart, computeCartQuantity } from "../js/cart";

export default function() {
  /**
   * display html
   */
  let bestSellersHtml = bestSellers.map(bestItem => {
    let productId = bestItem.productId;
    let bestSellers = products.map(product => {
      if (productId == product.id) {
        let imageSource = product.image;

        return (
          <div key={product.id} className={home.productCard}>
            <div className={home.productCover}>
              <span className={home.sale__amount}>11%</span>
              <button className={home.favoriteBtn}>
                <img className={`small__icon ${home.heart__img}`} src="./images/icons/heart.png" alt="favorite"/>
              </button>
              <img className={home.product__img} src={`./images/subimages/${imageSource}`} alt="product"/>
            </div>

            <h4 className={home.product__name}>
              {product.name}
            </h4>
            <div className={home.productRating}>
              <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
              <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
              <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
              <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
              <img className={home.star__img} src="./images/icons/empty-star.png" alt="star"/>
              24
            </div>
            <div className={home.product__price}>${product.price}</div>

            <button className={home.cartBtn} onClick={() => addToCart(product.id)}>
              <img className={`small__icon ${home.cart__img}`} src="./images/icons/cart.png" alt="add to cart"/>
            </button>
          </div>
        );
      }
    });

    return bestSellers;
  });

  let smartphonesHtml = products.map(product => {
    let category = "smartphone";

    if (product.category == category) {
      let imageSource = product.image;

      return (
        <div key={product.id} className={home.productCard}>
          <div className={home.productCover}>
            <span className={home.sale__amount}>11%</span>
            <button className={home.favoriteBtn}>
              <img className={`small__icon ${home.heart__img}`} src="./images/icons/heart.png" alt="favorite"/>
            </button>
            <img className={home.product__img} src={`./images/subimages/${imageSource}`} alt="product"/>
          </div>

          <h4 className={home.product__name}>
            {product.name}
          </h4>
          <div className={home.productRating}>
            <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
            <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
            <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
            <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
            <img className={home.star__img} src="./images/icons/empty-star.png" alt="star"/>
            24
          </div>
          <div className={home.product__price}>${product.price}</div>

          <button className={home.cartBtn} onClick={() => addToCart(product.id)}>
            <img className={`small__icon ${home.cart__img}`} src="./images/icons/cart.png" alt="add to cart"/>
          </button>
        </div>
      );
    }
  });

  let computersHtml = products.map(product => {
    let category = "computer";

    if (product.category == category) {
      let imageSource = product.image;

      return (
        <div key={product.id} className={home.productCard}>
          <div className={home.productCover}>
            <span className={home.sale__amount}>11%</span>
            <button className={home.favoriteBtn}>
              <img className={`small__icon ${home.heart__img}`} src="./images/icons/heart.png" alt="favorite"/>
            </button>
            <img className={home.product__img} src={`./images/subimages/${imageSource}`} alt="product"/>
          </div>

          <h4 className={home.product__name}>
            {product.name}
          </h4>
          <div className={home.productRating}>
            <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
            <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
            <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
            <img className={home.star__img} src="./images/icons/filled-star.png" alt="star"/>
            <img className={home.star__img} src="./images/icons/empty-star.png" alt="star"/>
            24
          </div>
          <div className={home.product__price}>${product.price}</div>

          <button className={home.cartBtn} onClick={() => addToCart(product.id)}>
            <img className={`small__icon ${home.cart__img}`} src="./images/icons/cart.png" alt="add to cart"/>
          </button>
        </div>
      );
    }
  });

  useEffect(() => {
    /**
     * image slide change
     */
    let heroImgs = document.querySelectorAll('.hero__img');
    let dots = document.querySelectorAll('.dot');
    let imgIndex = 0;
    let heroLen = heroImgs.length;

    heroImgs[imgIndex].style.display = 'block';
    dots[imgIndex].style.background = 'black';
    setInterval(updateHeroIndex, 3000);

    function updateHeroIndex() {
      displayHeroImg();

      if (imgIndex < heroLen - 1) {
        imgIndex++;
      } else {
        imgIndex = 0;
      }
    }

    function displayHeroImg() {
      heroImgs[imgIndex].style.display = 'block';
      dots[imgIndex].style.background = 'black';

      for (let i = 0; i < heroLen; i++) {
        if (i != imgIndex) {
          heroImgs[i].style.display = 'none';
          dots[i].style.background = 'white';
        }
      }
    }
  }, []);
  return (
    <>
      <Header 
        cartQuantity = {computeCartQuantity()}
      />
      <Navigation />
      <AddPopup />
      <main className={home.main}>
        <div className={home.hero}>
          <Sidebar />

          <section className={home.heroSection}>
            <nav className={home.heroNav}>
              <div className={home.heroNavSlide}>
                <select className={home.heroSelect}>
                  <option className={home.heroOption}>Home</option>
                  <option className={home.heroOption}>Shop</option>
                </select>
                <button className={home.heroBtn}>
                  <img className={`small__icon ${home.cellphone__img}`} src="./images/icons/cellphone.png" alt="smartphones"/>
                  Cell Phones
                </button>
                <button className={home.heroBtn}>
                  <img className={`small__icon ${home.headphones__img}`} src="./images/icons/headphones.png" alt="headphones"/>
                  Headphones
                </button>
                <a className={home.hero__link}>Blog</a>
                <a className={home.hero__link}>Contact</a>
              </div>

              <button className={home.discountBtn}>
                <img className={`icon ${home.discount__img}`} src="./images/icons/discount.png" alt="discount"/>
                Super discount
                <img className={`icon ${home.discount__arrow__img}`} src="./images/icons/down-arrow.png" alt="options"/>
              </button>
            </nav>

            <div className={home.heroSlidesContainer}>
              <div className={home.heroSlides}>
                <img className={`${home.hero__img} hero__img`} src="./images/adverts/banner1.jfif" alt="banner"/>
                <img className={`${home.hero__img} hero__img`} src="./images/adverts/banner2.jfif" alt="banner"/>
                <img className={`${home.hero__img} hero__img`} src="./images/adverts/banner3.jfif" alt="banner"/>
              </div>

              <div className={home.dots}>
                <div className={`${home.dot} dot`}></div>
                <div className={`${home.dot} dot`}></div>
                <div className={`${home.dot} dot`}></div>
              </div>
            </div>
          </section>
        </div>

        <div className={home.brandScroll}>
          <div className={home.brandNames}>
            <h3 className={home.brand__name}>OPPO</h3>
            <h3 className={home.brand__name}>DELL</h3>
            <h3 className={home.brand__name}>LENOVO</h3>
            <h3 className={home.brand__name}>ASUS</h3>
            <h3 className={home.brand__name}>SAMSUNG</h3>
            <h3 className={home.brand__name}>SONY</h3>
            
            <h3 className={home.brand__name}>OPPO</h3>
            <h3 className={home.brand__name}>DELL</h3>
            <h3 className={home.brand__name}>LENOVO</h3>
            <h3 className={home.brand__name}>ASUS</h3>
            <h3 className={home.brand__name}>SAMSUNG</h3>
            <h3 className={home.brand__name}>SONY</h3>
          </div>
        </div>

        <section className={home.productsSection}>
          <div className={home.adSidebar}>
            <img className={home.ad__img} src="./images/adverts/side-advert1.jfif" alt="advert"/>
            <img className={home.ad__img} src="./images/adverts/side-advert2.jfif" alt="advert"/>
            <img className={home.ad__img} src="./images/adverts/side-advert3.jfif" alt="advert"/>
          </div>

          <div className={home.productsContainer}>
            <div className={home.adProducts}>
              <img className={home.ad__product__img} src="./images/adverts/advert1.jfif" alt="advert"/>
              <img className={home.ad__product__img} src="./images/adverts/advert2.jfif" alt="advert"/>
            </div>

            <div className={home.productTheme}>
              <h3 className={home.product__heading}>Best Sellers</h3>

              <div className={home.productCards}>
                {bestSellersHtml}
              </div>
            </div>

            <div className={home.productAdvert}>
              <img src="./images/adverts/advert3.jfif" alt="advert"/>
            </div>
            
            <div className={home.productTheme}>
              <h3 className={home.product__heading}>Smartphones</h3>

              <div className={home.productCards}>
                {smartphonesHtml}
              </div>
            </div>

            <div className={home.productTheme}>
              <h3 className={home.product__heading}>Computers</h3>

              <div className={home.productCards}>
                {computersHtml}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}