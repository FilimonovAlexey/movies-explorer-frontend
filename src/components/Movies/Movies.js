import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";

function Movies() {
  return(
    <>
      <Header/>
        <main>
          <SearchForm/>
        </main>
      <Footer/>
    </>
  );
}

export default Movies;