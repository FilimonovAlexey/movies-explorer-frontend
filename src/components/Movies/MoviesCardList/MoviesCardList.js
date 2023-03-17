import React, {useEffect} from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({cards, switchCheked}) {
  let films = cards;
  if(switchCheked){films =  cards.filter(film => film.duration < 41)}
  return(
    <section className="movieCardList">
      <div className="movieCardList__box">
          {films.map((card) => (
              <MoviesCard key={card.id} card={card} />
          ))}
      </div>
    </section>
  );
}

export default MoviesCardList;