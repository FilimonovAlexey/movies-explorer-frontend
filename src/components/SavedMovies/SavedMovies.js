import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies() {
  return(
    <>
    <Header loged={true}/>
      <main>
        <SearchForm/>
      </main>
    <Footer/>
    </>
  )

}

export default SavedMovies;