import React, { useEffect } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import cards from "../../utils/FilmsCards";

function Movies() {

  return(
    <>
      <Header loged={true}/>
        <main>
          <SearchForm/>
          <MoviesCardList cards={cards}/>
          <button className="movies__button">Еще</button>
        </main>
      <Footer/>
    </>
  );
}

export default Movies;