import React, { useContext, useEffect, useState } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { getMovies } from "../../utils/Api/ApiFilm";
import { getSaveMovies } from "../../utils/Api/MainApi";
import { useResize } from "../../utils/hooks/UseResize";
import { CurrentUserContext } from "../App/App"

function Movies(props) {
 
  const [preloader, setPreloader] = useState(false)
  const [counterCard, setCounterCard] = useState(0)
  const [switchCheked, setSwitchCheked] = useState(false)
  const [isOther, setisOther] = useState(false)
  const [durationLength, setDurationLength] = useState(0);
  const { currentScreen } = useResize();
  const { setSaveMoviesStore,setFindeSaveMoviesStore, cards, setCards, films, setFilms,  } = useContext(CurrentUserContext);
  const { searchHandler } = props;

  useEffect(() => {
    if(switchCheked && durationLength > counterCard){
      setisOther(true)
    } else if(!switchCheked && (films.length > 0 && films.length > counterCard)){
      setisOther(true)
    } else {
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
    if(!cards.length){
      setPreloader(true)
      const fetchData = async () => {
        const saves = await getSaveMovies();
        setSaveMoviesStore(saves)
        setFindeSaveMoviesStore(saves)
        const data = await getMovies();
        const newData = data.map(item => {
          const isFind = saves.find(obg=> obg.movieId === item.id)
          const _id = !!isFind ? isFind._id : item.id;
          return {...item, inSaved: !!isFind, _id: _id }
        })
        setCards(newData);
        setPreloader(false)
      }
      fetchData();
    }
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

  useEffect(() => {
    const settings =  localStorage.getItem("settings");
    if(settings){
      const obj = JSON.parse(settings);
      if(obj.searchText.length > 0){
        searchHandler(obj.searchText)
        findeMovies(obj.searchText)
      }
    } 
  
  }, [])
  


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
      <Header/>
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