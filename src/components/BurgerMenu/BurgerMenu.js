import React, { useState } from "react";
import "./BurgerMenu.css";
import account from "../../images/account.svg";
import burgermenuLogo from "../../images/burgermenu-logo.svg";
import burgermenuButtonClose from "../../images/burgermenu-close.svg";
import { Link } from "react-router-dom";

function BurgerMenu() {

  const [menuIsActive, setMenuIsActive] = useState(false)

  return(
    <div className="burgermenu">
    <button className="hamburger-menu__button" onClick={()=>setMenuIsActive(prev=>setMenuIsActive(!prev))}></button>
    {menuIsActive && <div className="hamburger-menu__active">
      <button className="hamburger-menu__close"></button>
      <nav className="hamburger-menu__links">
          <Link className="hamburger-menu__link" to="/">Главная</Link>
          <Link className="hamburger-menu__link hamburger-menu__link_active" to="/movies">Фильмы</Link>
          <Link className="hamburger-menu__link" to="/saved-movies">Сохранённые фильмы</Link>
      </nav>
      <nav className='hamburger-menu__footer'>
          <Link className="hamburger-menu__login" to="/profile">Аккаунт</Link>
          <Link className="hamburger-menu__account" to="/profile" src={account} alt='Логотип аккаунта'></Link>
      </nav>
    </div>}
    </div>
  );
}

export default BurgerMenu;
