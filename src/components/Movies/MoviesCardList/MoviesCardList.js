import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({cards}) {
  return(
    <section className='movieCardList'>
      <div className='movieCardList__container'>
          {cards.map((card) => (
              <MoviesCard key={card.id} card={card} />
          ))}
      </div>
    </section>
  );
}

export default MoviesCardList;