export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerUpper">
        <div className="footerIntro">
          <div className="footerSlogan">
            <h6 className="footerBrand">BRAND NAME</h6>
            <div className="brandSlogan">Enter your slogan here</div>
          </div>

          <div className="footerAbout">
            <h6 className="about__heading">About us</h6>
            <p className="about__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="footerColumn">
          <h6 className="footer__heading">Services</h6>

          <div className="footerLinks">
            <a className="footer__link">Planning</a>
            <a className="footer__link">Research</a>
            <a className="footer__link">Consulting</a>
            <a className="footer__link">Analysis</a>
            <a className="footer__link">User Testing</a>
          </div>
        </div>

        <div className="footerColumn">
          <h6 className="footer__heading">Company</h6>

          <div className="footerLinks">
            <a className="footer__link">Who We Are</a>
            <a className="footer__link">Our Services</a>
            <a className="footer__link">Our Clients</a>
            <a className="footer__link">Pricing</a>
            <a className="footer__link">Contact Us</a>
          </div>
        </div>

        <div className="footerColumn">
          <h6 className="footer__heading">Contact Us</h6>

          <div className="footerLinks">
            <div className="infor__details">
              <b>Call:</b> <br/> +0123 456 789 00
            </div>
            <div className="infor__details">
              <b>Email:</b> <br/> user@example.com
            </div>
          </div>
        </div>

        <div className="footerInteract">
          <form className="emailForm">
            <input className="email__input" type="email" placeholder="Write Email"/>
            <button className="emailBtn">
              <img className="small__icon send__img" src="./images/icons/send.png" alt="send"/>
            </button>
          </form>

          <div className="footerSocial">
            <h6 className="footer__heading">Follow us</h6>
            <div className="socialLinks">
              <a className="icon social__link"><img className="social__img facebook__img" src="./images/icons/facebook.png" alt="facebook"/></a>
              <a className="icon social__link"><img className="social__img twitter__img" src="./images/icons/twitter.png" alt="twitter"/></a>
              <a className="icon social__link"><img className="social__img facebook__img" src="./images/icons/youtube.png" alt="facebook"/></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footerLower">
        Privacy Policy | Our History | What We Go
      </div>
    </footer>
  );
}