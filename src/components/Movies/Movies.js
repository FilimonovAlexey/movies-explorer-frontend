import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import filmscards from "../../utils/FilmsCards";

function Movies() {
  return(
    <>
      <Header/>
        <main>
          <SearchForm/>
          <MoviesCardList />
          <button className="movies__button">Еще</button>
        </main>
      <Footer/>
    </>
  );
}

export default Movies;