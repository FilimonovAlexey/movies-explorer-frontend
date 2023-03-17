import React, { useEffect, useState } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { getMovies } from "../../utils/ApiFilm/ApiFilm"; 

function Movies(props) {
  const { searchText } = props;

  const [cards, setCards] = useState([])
  const [films, setFilms] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovies();
      setCards(data);
    }
    fetchData();
  }, []);

  const findeMovies = (text) => {
    let films =[]
    if(text.length < 2) {
      setFilms(cards)
    } else {
      const a = text.toLowerCase()
      setFilms(cards.filter((obg) => obg.nameRU.toLowerCase().indexOf(a) !== -1 || obg.nameEN.toLowerCase().indexOf(a) !== -1))
    };
    console.log('findeMovies ',films)
  }

  return(
    <>
      <Header loged={true}/>
        <main className="main__box">
          <SearchForm {...props} findeMovies={findeMovies}/>
          <MoviesCardList cards={films}/>
          <button className="movies__button">Еще</button>
        </main>
      <Footer/>
    </>
  );
}

export default Movies;