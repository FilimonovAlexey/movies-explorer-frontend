import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return(
    <section className="register">
      <div className="register__box">
        <div className="register__logo-box">
          <Link to="/">
            <img src={logo} alt="Логотип" className="register__logo" />
          </Link>
        </div>

        <h2 className="register__title">Доброе пожаловать!</h2>

        <form className="register__form" name="register-form">
          <div className="register__field">
          <label>
                  <span className="register__name">Имя</span>
                  <input className="register__input" 
                         type="text" 
                         name="name" 
                         placeholder="Введите Ваше Имя" 
                         minLength="2" 
                         required 
                         defaultValue={'Виталий'}
                   />
              </label>
              <div className="register__line"></div>
              <label>
                  <span className="register__email">E-mail</span>
                  <input className="register__input" 
                         type="email" 
                         name="email" 
                         placeholder="Введите Ваш E-mail" 
                         required 
                         defaultValue={'pochta@yandex.ru'}
                  />
              </label>
              <div className="register__line"></div>
              <label>
                  <span className="register__password">Пароль</span>
                  <input className="register__input" 
                         type="password" 
                         name="password" 
                         placeholder="Введите Ваш Пароль" 
                         minLength="4" 
                         required
                         defaultValue={'••••••••••••••'}
                   />
              </label>
              <div className="register__line"></div>
          </div>
          <div className="register__button-box">
              <button className="register__button" type="submit">Зарегистрироваться</button>
              <Link className="register__link" to="/signin">
                  Ещё не зарегистрированы?
                  <span className="register__login">Войти</span>
              </Link>
          </div>
        </form>

      </div>
    </section>
  );
}

export default Register;