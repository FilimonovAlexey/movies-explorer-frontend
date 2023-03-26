import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { SHORTS_MOVIES_DURATION } from "../../../utils/Constants/constants"

function MoviesCardList({cards, switchCheked, counterCard, setDurationLength, saveMoviesCards, deliteFilm}) {
  let films = cards;
  if(switchCheked){
    films =  cards.filter(film => film.duration < SHORTS_MOVIES_DURATION)
    setDurationLength(films.length)
  }
  films = films.filter((a, index)=> index < counterCard)
  
  return(
    <section className="movieCardList">
      <div className="movieCardList__box">
        {films.length ? films.map((card) => (
            <MoviesCard key={card._id} card={card} saveMoviesCards={saveMoviesCards} deliteFilm={deliteFilm} />
        )) : <>Ничего не найдено!</>}
      </div>
    </section>
  );
}

export default MoviesCardList;