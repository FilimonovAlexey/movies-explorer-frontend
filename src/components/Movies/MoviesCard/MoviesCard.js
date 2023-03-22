import React, { useState } from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';
import deleteFilmButton from "../../../images/deleteFilmButton.svg";
import saveFilmButton from "../../../images/saveFilmButton.svg";
import saveButton from "../../../images/save__button.svg";
import { saveMovies } from "../../../utils/Api/MainApi";
import { deleteSaveMovies } from "../../../utils/Api/MainApi";

function MoviesCard({card, saveMoviesCards, deliteFilm}) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  console.log('MoviesCard ', card);

  function handleClick() {
    if(isSaved){
      deleteSaveMovies(card._id)
    } else {
      saveMovies(card);
    }
    setIsSaved(!isSaved);
  }
  const handleDelete = () => {
    deliteFilm(card._id);
    deleteSaveMovies(card._id)
  }

  let src = saveMoviesCards ? card.image : `https://api.nomoreparties.co/${card.image.url}`;

  return(
    <div className="moviesCard">
      <a href={card.trailerLink}
        target="_blank"
        className="card__link"
        rel="noreferrer"
      >
        <img className="moviesCard__image" src={src} alt={`Постер ${card.nameRU}`} />
      </a>
      <div className="moviesCard__container">
          <h2 className="moviesCard__title">{card.nameRU}</h2>
          {location.pathname === "/saved-movies" &&
              <button type="button" aria-label="удалить фильм" className="moviesCard__button-del" onClick={handleDelete}>
                  <img className="moviesCard__delete" alt="удалить" src={deleteFilmButton} />
              </button>}
          {location.pathname === "/movies" &&
              <button type="button" aria-label="сохранить" className={isSaved ? "moviesCard__button-save" : "moviesCard__button"}
                  onClick={handleClick}>
                  {isSaved ? <img className="moviesCard__delete" alt="добавлено" src={saveButton} /> :
                      <img className="moviesCard__add" alt="добавить" src={saveFilmButton} />}
              </button>}
          <p className="moviesCard__duration">{Math.round(card.duration/60)}ч {card.duration - 60*Math.round(card.duration/60)}м</p>
      </div>
    </div>
  );
}

export default MoviesCard;