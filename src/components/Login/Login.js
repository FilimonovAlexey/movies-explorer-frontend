import React, { useState, useContext, useEffect } from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../utils/Api/MainApi";
import { CurrentUserContext } from "../App/App";

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const { setLogedId } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  
  const hendleLogin = () => {
    signin({email, password})
    .then(data => {
      // console.log('hendleLogin ',data)
      if(data.message) {
        console.error(data.message)
      } else {
        localStorage.setItem('token', data.token)
        setLogedId(true)
        navigate("/movies")
      }
    }).catch(error=>{
        console.log('signin error ', error)
    });
  }

  useEffect(() => {
    if((email !== "" && password !== "" )){
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [email, password])
  
  return(
    <section className="login">
      <div className="login__box">
            <div className="login__logo-box">
              <Link to="/">
                <img src={logo} alt="Логотип" className="login__logo" />
              </Link>
            </div>
        <h2 className="login__title">Рады видеть!</h2>
        <form noValidate className="login__form" name="login-form" onSubmit={e=> e.preventDefault()}>
          <div className="login__field">
              <label>
                  <span className="login__email">E-mail</span>
                  <input className="login__input" 
                         type="email" 
                         name="email" 
                         placeholder="Введите Ваш E-mail" 
                         minLength={2}
                         maxLength={30}
                         pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$"
                         required={true}
                         value={email}
                         onChange={e => setEmail(e.target.value)}
                  />
              </label>
              <div className="login__line"></div>
              <label>
                  <span className="login__password">Пароль</span>
                  <input className="login__input" 
                         type="password" 
                         name="password" 
                         placeholder="Введите Ваш Пароль" 
                         minLength={2}
                         maxLength={30}
                         required={true}
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                   />
              </label>
              <div className="login__line"></div>
          </div>
          <div className="login__button-box">
              <button className="login__button" type="submit" onClick={hendleLogin} disabled={!isLogin}>Войти</button>
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