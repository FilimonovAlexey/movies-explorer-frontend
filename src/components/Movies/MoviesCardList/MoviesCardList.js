import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({cards, switchCheked, counterCard}) {
  let films = cards;
  if(switchCheked){films =  cards.filter(film => film.duration < 41)}
  films = films.filter((a, index)=> index < counterCard)
  return(
    <section className="movieCardList">
      <div className="movieCardList__box">
          {films.length ? films.map((card) => (
              <MoviesCard key={card.id} card={card} />
          )) : <>Ничего не найдено!</>}
          
      </div>
    </section>
  );
}

export default MoviesCardList;