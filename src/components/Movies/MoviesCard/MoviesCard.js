import React, { useState } from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';
import deleteFilmButton from "../../../images/deleteFilmButton.svg";
import saveFilmButton from "../../../images/saveFilmButton.svg";
import saveButton from "../../../images/save__button.svg";

function MoviesCard({card}) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  function handleClick() {
      setIsSaved(!isSaved);
  }

  return(
    <div className="moviesCard">
      <img className="moviesCard__image" src={card.image} alt="постер фильма" />
      <div className="moviesCard__container">
          <h2 className="moviesCard__title">{card.name}</h2>
          {location.pathname === "/saved-movies" &&
              <button type="button" aria-label="удалить фильм" className="moviesCard__button" onClick={handleClick}>
                  <img className="moviesCard__click" alt="удалить" src={deleteFilmButton} />
              </button>}
          {location.pathname === "/movies" &&
              <button type="button" aria-label="сохранить" className={isSaved ? "moviesCard__button" : "moviesCard__button"}
                  onClick={handleClick}>
                  {isSaved ? <img className="moviesCard__click" alt="добавлено" src={saveButton} /> :
                      <img className="moviesCard__add" alt="добавить" src={saveFilmButton} />}
              </button>}
          <p className="moviesCard__duration">{card.time}</p>
      </div>
    </div>
  );
}

export default MoviesCard;