import React from "react";
import "./HeaderAuth";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import account from "../../images/account.svg"

<header className="header__auth">
  <Link to="/" className="form__logo">
    <img src={logo} alt="логотип" />
  </Link>
  <div className="header__button-box_films">
    <Link to="/movies" className="header__button-films">
      Фильмы
    </Link>
    <Link to="/saved-movies" className="header__button-films">
      Сохранённые фильмы
    </Link>
  </div>
  <div className="header__button-box">
    <Link to="/profile" className="header__account-button">
      <img src={account} alt="аккаунт" />
    </Link>
  </div>
</header>