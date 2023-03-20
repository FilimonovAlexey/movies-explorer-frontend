import React, { useState} from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link, useNavigate  } from "react-router-dom";
import { signup } from "../../utils/Api/MainApi";

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const hendleRegister = async () => {
    signup({name, email, password})
    .then(data => {
      navigate("/signin")
      console.log('hendleRegister', data)
  }).catch(error=>{
      console.log('hendleRegister error ', error)
  });
  }

  return(
    <section className="register">
      <div className="register__box">
        <div className="register__logo-box">
          <Link to="/">
            <img src={logo} alt="Логотип" className="register__logo" />
          </Link>
        </div>

        <h2 className="register__title">Доброе пожаловать!</h2>

        <form noValidate className="register__form" name="register-form" onSubmit={e=> e.preventDefault()}>
          <div className="register__field">
          <label>
                  <span className="register__name">Имя</span>
                  <input className="register__input" 
                         type="text" 
                         name="name" 
                         placeholder="Введите Ваше Имя" 
                         minLength={2}
                         maxLength={30}
                         required={true}
                         value={name}
                         onChange={e => setName(e.target.value)}
                   />
              </label>
              <div className="register__line"></div>
              <label>
                  <span className="register__email">E-mail</span>
                  <input className="register__input" 
                         type="email" 
                         name="email" 
                         placeholder="Введите Ваш E-mail" 
                         required={true}
                         minLength={2}
                         maxLength={30}
                         value={email}
                         onChange={e => setEmail(e.target.value)}
                  />
              </label>
              <div className="register__line"></div>
              <label>
                  <span className="register__password">Пароль</span>
                  <input className="register__input" 
                         type="password" 
                         name="password" 
                         placeholder="Введите Ваш Пароль" 
                         minLength={4}
                         required={true}
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                   />
              </label>
              <div className="register__line"></div>
          </div>
          <div className="register__button-box">
              <button className="register__button" type="submit" onClick={hendleRegister}>Зарегистрироваться</button>
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