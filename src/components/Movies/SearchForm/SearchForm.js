import React from "react";
import "./SearchForm.css"

function SearchForm() {
  return (
      <form className="searchform">

        <div className="searchform__block">
          <div className="searchform__input-logo"></div>
          <input
            type="text"
            className="searchform__input"
            placeholder="Фильм"
            required
          />
          <button className="searchform__button"></button>
          <div className="searchform__line"></div>
        </div>

        <label className="searchform__switch">
          <input className="searchform__checkbox-input" type="checkbox" />
          <div className="searchform__checkbox-custom"></div>
          <p className="searchform__shorts">Короткометражки</p>
        </label>

      </form>
  );
}

export default SearchForm;