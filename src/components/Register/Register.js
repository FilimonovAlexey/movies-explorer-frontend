import React, { useState, useEffect } from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link, useNavigate  } from "react-router-dom";
import { signup } from "../../utils/Api/MainApi";

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const [nameDirty, setNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [errorMessageName, setErrorMessageName] = useState('Введите имя')
  const [errorMessageEmail, setErrorMessageEmail] = useState('Введите email')
  const [errorMessagePassword, setErrorMessagePassword] = useState('Введите пароль')
  const [inputValid, setInputValid] = useState(false)

  const hendleRegister = async () => {
    signup({name, email, password})
    .then(data => {
      if(data.statusCode === 400){
        console.error('hendleRegister error ', data)
      } else {
        navigate("/signin")
      }
  }).catch(error=>{
      console.log('hendleRegister error ', error)
  });
  }

  useEffect(() => {
    if (errorMessageName || errorMessageEmail || errorMessagePassword) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [errorMessageName, errorMessageEmail, errorMessagePassword])

 
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name": 
        setNameDirty(true)
        break

      case "email": 
        setEmailDirty(true)
        break

      case "password": 
        setPasswordDirty(true)
        break

        // no default
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    const pattern = /^[A-Za-zА-Яа-яЁё /s -]{4,}/
    if (!pattern.test(String(e.target.value).toLocaleLowerCase())) {
      setErrorMessageName("Неккоректное имя")
    } else {
      setErrorMessageName("")
    }
  }
  
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const pattern = /^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    if (!pattern.test(String(e.target.value).toLocaleLowerCase())) {
      setErrorMessageEmail("Неккоректный email")
    } else {
      setErrorMessageEmail("")
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
      if (e.target.value.length < 4 || e.target.value.length > 8) {
        setErrorMessagePassword("Пароль должен содержать от 4 до 8 символов")
        if (!e.target.value) {
          setErrorMessagePassword("Пароль не может быть пустым")
        }
      } else {
        setErrorMessagePassword("")
      }
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
                  <label className="register__name">Имя</label>
                  <input className="register__input" 
                         type="text" 
                         name="name" 
                         placeholder="Введите Ваше Имя" 
                         minLength={4}
                         maxLength={30}
                         pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
                         required={true}
                         value={name}
                         onChange={e => nameHandler(e)}
                         onBlur={e => blurHandler(e)}
                   />
                   {(nameDirty && errorMessageName) && <div className="error__register">{errorMessageName}</div>}
              </label>
              <label>
                  <label className="register__email">E-mail</label>
                  <input className="register__input" 
                         type="email" 
                         name="email" 
                         placeholder="Введите Ваш E-mail" 
                         pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                         required={true}
                         minLength={2}
                         maxLength={30}
                         value={email}
                         onChange={e => emailHandler(e)}
                         onBlur={e => blurHandler(e)}
                  />
                  {(emailDirty && errorMessageEmail) && <div className="error__register">{errorMessageEmail}</div>}
              </label>
              <label>
                  <label className="register__password">Пароль</label>
                  <input className="register__input" 
                         type="password" 
                         name="password" 
                         placeholder="Введите Ваш Пароль"
                         minLength={4}
                         maxLength={8}
                         required={true}
                         value={password}
                         onChange={e => passwordHandler(e)}
                         onBlur={e => blurHandler(e)}
                   />
                   {(passwordDirty && errorMessagePassword) && <div className="error__register">{errorMessagePassword}</div>}
              </label>
          </div>
          <div className="register__button-box">
              <button className="register__button" type="submit" onClick={hendleRegister} disabled={!inputValid}>Зарегистрироваться</button>
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