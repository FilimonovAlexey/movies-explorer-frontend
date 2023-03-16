import React, { useState } from "react";
import "./SearchForm.css"

function SearchForm(props) {

  const {searchText, searchHandler, findeMovies} = props;

  return (
      <form className="searchform" onSubmit={(e)=>{e.preventDefault()}}>

        <div className="searchform__block">
          <div className="searchform__input-logo"></div>
          <input
            type="text"
            className="searchform__input"
            placeholder="Фильм"
            required
            onChange={(event) => {searchHandler(event.target.value)}}
            value={searchText}
          />
          <button className="searchform__button" onClick={()=>findeMovies(searchText)}></button>
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