import React, { useEffect, useState } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { getMovies } from "../../utils/Api/ApiFilm";
import { useResize } from "../../utils/hooks/UseResize";

function Movies(props) {
  const [cards, setCards] = useState([])
  const [films, setFilms] = useState([])
  const [preloader, setPreloader] = useState(false)
  const [counterCard, setCounterCard] = useState(0)
  const [switchCheked, setSwitchCheked] = useState(false)
  const [isOther, setisOther] = useState(false)
  const [durationLength, setDurationLength] = useState(0);
  const { currentScreen } = useResize();

  useEffect(() => {
    if(switchCheked && durationLength > counterCard){
      console.log('switchCheked ', switchCheked, durationLength,  counterCard)
      setisOther(true)
    } else if(!switchCheked && (films.length > 0 && films.length > counterCard)){
      console.log('switchCheked else if ', switchCheked, films.length,  counterCard)
      setisOther(true)
    } else {
      console.log('switchCheked else', switchCheked, films.length,  counterCard)
      setisOther(false)
    }
  }, [films, counterCard, switchCheked, durationLength])
  
  useEffect(()=>{
    switch(currentScreen) {
      case 'SCREEN_XXL':
        setCounterCard(12)
        break;
  
      case "SCREEN_XL":
        setCounterCard(12)
        break;
      case "SCREEN_LG":
        setCounterCard(12)
        break;
      case "SCREEN_MD":
        setCounterCard(8)
        break;

      default:
        setCounterCard(5)
        break;
    }
    
  },[currentScreen])
  
  useEffect(() => {
    setPreloader(true)
    const fetchData = async () => {
      const data = await getMovies();
      setCards(data);
      setPreloader(false)
    }
    fetchData();
  }, []);

  const findeMovies = (text) => {
    setPreloader(true)
    if(text.length < 2) {
      setFilms(cards)
    } else {
      const a = text.toLowerCase().trim()
      setFilms(cards.filter((obg) => obg.nameRU.toLowerCase().indexOf(a) !== -1 || obg.nameEN.toLowerCase().indexOf(a) !== -1))
    };
    setPreloader(false)
  }
  const addMoviesCard = () =>{
    let add = 3;
    if(currentScreen === 'SCREEN_MD'){
      add = 2
    } else if(currentScreen === 'SCREEN_SM'){
      add = 1
    }
    setCounterCard(prev => prev + add)
  }

  return(
    <>
      <Header loged={true}/>
        <main className="main__box">
          <SearchForm {...props} findeMovies={findeMovies} switchCheked={switchCheked} setSwitchCheked={setSwitchCheked}/>
          {preloader && <Preloader />}
          {!preloader && <MoviesCardList cards={films} switchCheked={switchCheked} counterCard={counterCard} setDurationLength={setDurationLength}/>}
          {isOther && <button className="movies__button" onClick={addMoviesCard}>Еще</button>}
        </main>
      <Footer/>
    </>
  );
}

export default Movies;