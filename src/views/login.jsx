import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import signup from "../css/signup.module.css";

export default function Login() {
  let navigation = useNavigate();
  let [input, setInput] = useState({});
  let [isVisible, setVisible] = useState(false);
  let [eyeIcon, setEyeIcon] = useState("close-eye.png");

  function onInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    setInput(input => ({...input, [name]: value}));
  }

  function showPassword() {
    setVisible(isVisible => !isVisible);
    setEyeIcon(eyeIcon => !isVisible? "open-eye.png": "close-eye.png");
  }
  
  function homeRedirect() {
    navigation("/");
  }
  return (
    <main className={signup.main}>
      <div className={signup.bannerImage}>
        <img className={signup.banner__img} src="./images/adverts/side-advert1.jfif" alt="banner"/>
      </div>

      <div className={signup.signup}>
        <button className={`${signup.returnBtn} returnBtn`} onClick={homeRedirect}>
          <img className={`${signup.return__img} small__icon`} src="./images/icons/return.png" alt="return"/>
          Return
        </button>

        <div className={signup.signupBox}>
          <div className={signup.signupOptions}>
            <button className={signup.signupOptionsBtn}>
              <img className={`${signup.google__img} small__icon`} src="./images/icons/google.png" alt="google"/>
              Log in with Google
            </button>
            <button className={signup.signupOptionsBtn}>
              <img className={`${signup.facebook__img} small__icon`} src="./images/icons/facebook.png" alt="facebook"/>
              Log in with Facebook
            </button>
          </div>

          <div className={signup.signupLine}><div className={signup.signupLine__or}>Or</div></div>

          <form className={signup.signupForm}>
            <div className={signup.signupInput}>
              <input className={signup.signup__input} type="signup.email" name="email" onChange={onInputChange} defaultValue={input.email}  placeholder="Email" required/>
            </div>
            <div className={signup.signupInput}>
              <input className={`${signup.signup__input} password__input`} type={isVisible? 'text': 'password'} name="password" onChange={onInputChange} defaultValue={input.password} placeholder="Password" required/>
              <button className={`${signup.showPassBtn} showPassBtn`} onClick={showPassword}>
                <img className={`${signup.eye__img} eye__img small__icon`} src={`./images/icons/${eyeIcon}`} alt="show password"/>
              </button>
            </div>
            <button type={signup.submit} className={signup.signupSubmitBtn}>
              Log in
            </button>
          </form>
          
          <div className={signup.signupLogin}>
            Don't have an account? <Link className={signup.login__link} to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </main>
  );
}