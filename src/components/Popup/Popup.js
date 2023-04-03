import React from "react";
import "./Popup.css";

export default function Popup({ popupOpen, popupMessage, closePopup }) {
  return (
    <div className={`popup ${popupOpen ? "popup__opened" : "popup__notactive"}`}>
      <div className="popup__box">
        <p className="popup__message">{popupMessage}</p>
        <div className="popup__button-close" onClick={closePopup}></div>
      </div>
    </div>
  );
}