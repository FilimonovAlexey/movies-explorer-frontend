import React, { useState, useContext } from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';
import deleteFilmButton from "../../../images/deleteFilmButton.svg";
import saveFilmButton from "../../../images/saveFilmButton.svg";
import saveButton from "../../../images/save__button.svg";
import { saveMovies } from "../../../utils/Api/MainApi";
import { deleteSaveMovies } from "../../../utils/Api/MainApi";
import { CurrentUserContext } from "../../App/App";
import { DURATION_CONVERT } from "../../../utils/Constants/constants"

function MoviesCard({card, saveMoviesCards, deliteFilm}) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(card.inSaved);
  const { setFindeSaveMoviesStore, setSaveMoviesStore, setFilms, setCards } = useContext(CurrentUserContext);
  
  function handleClick() {
    if(isSaved){
      setCards(prev=> prev.map(item=> {
        if(item._id === card._id){
          return {...card, inSaved: false}
        }
        return item
      }))
      setFilms(prev=> prev.map(item =>{
        if(item._id === card._id){
          return {...card, inSaved: false}
        }
        return item
      }))
      setSaveMoviesStore(prev=> prev.filter(item=> item._id !== card._id))
      deleteSaveMovies(card._id)
    } else {
     
          saveMovies(card).then(data=>{
            
            setCards(prev=> prev.map(item=> {
              if(data.movieId === item.id){
                return {...card, inSaved: true, _id: data._id}
              }
              return item
            }))
            setFilms(prev=> prev.map(item =>{
              if(data.movieId === item.id){
                return {...card, inSaved: true, _id: data._id}
              }
              return item
            }))
            const saveCard = {...card, image: `https://api.nomoreparties.co/${card.image.url}`, _id: data._id }
            setFindeSaveMoviesStore(prev=>[...prev, saveCard])
            setSaveMoviesStore(prev=>[...prev, saveCard])
          });
    }
    setIsSaved(!isSaved);
  }
  
  const handleDelete = () => {
    // if(saveMoviesCards){
      setFilms(prev=> prev.map(item =>{
        if(item._id === card._id){
          item.inSaved = false;
        }
        return item
      }))
      setCards(prev=> prev.map(item =>{
        if(item._id === card._id){
          item.inSaved = false;
        }
        return item
      }))
    // }
    // card.inSaved = false;
    deliteFilm(card._id)
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
          <p className="moviesCard__duration">{Math.round(card.duration/DURATION_CONVERT)}ч {card.duration - DURATION_CONVERT*Math.round(card.duration/DURATION_CONVERT)}м</p>
      </div>
    </div>
  );
}

export default MoviesCard;