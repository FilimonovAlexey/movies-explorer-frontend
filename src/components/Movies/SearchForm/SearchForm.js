import React from "react";
import "./SearchForm.css"

function SearchForm() {
  return (
      <form className="searchform">

        <div className="searchform__block">
          <input
            type="text"
            className="searchform__input"
            placeholder="Фильм"
            required
          />
          <button className="searchform__button"></button>
        </div>

        <label className="searchform__switch">
          <input type="checkbox" />
          <p className="searchform__shorts">Короткометражки</p>
        </label>

      </form>
  );
}

export default SearchForm;