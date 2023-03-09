import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return(
    <section className="login">
      <div className="login__box">
            <div className="login__logo-box">
              <Link to="/">
                <img src={logo} alt="Логотип" className="login__logo" />
              </Link>
            </div>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" name="login-form">
          <div className="login__field">
              <label>
                  <span className="login__email">E-mail</span>
                  <input className="login__input" 
                         type="email" 
                         name="email" 
                         placeholder="Введите Ваш E-mail" 
                         required 
                  />
              </label>
              <div className="login__line"></div>
              <label>
                  <span className="login__password">Пароль</span>
                  <input className="login__input" 
                         type="password" 
                         name="password" 
                         placeholder="Введите Ваш Пароль" 
                         minLength="4" 
                         required 
                   />
              </label>
              <div className="login__line"></div>
          </div>
          <div className="login__button-box">
              <button className="login__button" type="submit">Войти</button>
              <Link className="login__link" to="/signup">
                  Ещё не зарегистрированы?
                  <span className="login__register">Регистрация</span>
              </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;