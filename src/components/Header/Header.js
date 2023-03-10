import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import HederAuth from "../HeaderAuth/HederAuth";

function Header(props) {
  const { loged, setLoged } = props;
  return (
    <>
      {loged && <HederAuth />}

      {!loged && (
        <header className="header">
          <div className="header__container">
            <Link to="/">
              <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            <div className="header__button-container">
              <Link to="/signup" className="header__button">
                Регистрация
              </Link>
              <Link to="/signin" className="header__button-auth">
                Войти
              </Link>
            </div>
          </div>
        </header>
      )}

      {/* <BurgerMenu /> */}
    </>
  );
}

export default Header;
