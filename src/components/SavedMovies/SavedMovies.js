import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import cards from "../../utils/FilmsCards";

function SavedMovies() {
  return(
    <>
    <Header loged={true}/>
      <main>
        <SearchForm/>
        <MoviesCardList cards={cards}/>
      </main>
    <Footer/>
    </>
  )

}

export default SavedMovies;