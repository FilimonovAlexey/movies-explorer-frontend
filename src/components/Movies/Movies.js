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
  const [switchCheked, setSwitchCheked] = useState(false)
  
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
      const a = text.toLowerCase().trim()
      setFilms(cards.filter((obg) => obg.nameRU.toLowerCase().indexOf(a) !== -1 || obg.nameEN.toLowerCase().indexOf(a) !== -1))
    };
  }

  return(
    <>
      <Header loged={true}/>
        <main className="main__box">
          <SearchForm {...props} findeMovies={findeMovies} switchCheked={switchCheked} setSwitchCheked={setSwitchCheked}/>
          <MoviesCardList cards={films} switchCheked={switchCheked}/>
          <button className="movies__button">Еще</button>
        </main>
      <Footer/>
    </>
  );
}

export default Movies;