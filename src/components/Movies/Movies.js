import React, { useEffect, useState } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { getMovies } from "../../utils/ApiFilm/ApiDilm"; 

function Movies() {

  const [cards, setCards] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies();
      setCards(data);
    }
    fetchData();
  }, []);

  return(
    <>
      <Header loged={true}/>
        <main className="main__box">
          <SearchForm/>
          <MoviesCardList cards={cards}/>
          <button className="movies__button">Еще</button>
        </main>
      <Footer/>
    </>
  );
}

export default Movies;