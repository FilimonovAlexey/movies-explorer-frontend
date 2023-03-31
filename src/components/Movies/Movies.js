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
import { CurrentUserContext } from "../App/App";
import {
  MOVIES_CARDS_1280,
  MOVIES_CARDS_768,
  MOVIES_CARDS_480,
  ADD_MOVIES_CARD_1280,
  ADD_MOVIES_CARD_768,
  ADD_MOVIES_CARD_480,
} from "../../utils/Constants/constants";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage/localStorage";
import { convertSaveMoviesData } from "../../scripts/convertSaveMoviesData";

function Movies(props) {
  const [preloader, setPreloader] = useState(false);
  const [counterCard, setCounterCard] = useState(0);
  const [switchCheked, setSwitchCheked] = useState(false);
  const [isOther, setisOther] = useState(false);
  const [flag, setFlag] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [durationLength, setDurationLength] = useState(0);
  const { currentScreen } = useResize();
  const {
    setSaveMoviesStore,
    setFindeSaveMoviesStore,
    cards,
    setCards,
    films,
    setFilms,
    setSearchText
  } = useContext(CurrentUserContext);
  const { searchHandler } = props;
  const titleName =  "MoviesSearch";

  const switchHandler = (status) => {
    const settings =  localStorage.getItem(`settings_${titleName}`);
    if(settings){
      const obj = JSON.parse(settings);
      obj.shortSwich = status;
      localStorage.setItem(`settings_${titleName}`, JSON.stringify(obj))
    } else {
      localStorage.setItem(`settings_${titleName}`, `{"searchText": "", "shortSwich": ${status}}`)
    }
    setSwitchCheked(status);
  };

  useEffect(() => {
    if (switchCheked && durationLength > counterCard) {
      setisOther(true);
    } else if (
      !switchCheked &&
      films.length > 0 &&
      films.length > counterCard
    ) {
      setisOther(true);
    } else {
      setisOther(false);
    }
  }, [films, counterCard, switchCheked, durationLength]);

  useEffect(() => {
    switch (currentScreen) {
      case "SCREEN_XXL":
        setCounterCard(MOVIES_CARDS_1280);
        break;
      case "SCREEN_XL":
        setCounterCard(MOVIES_CARDS_1280);
        break;
      case "SCREEN_LG":
        setCounterCard(MOVIES_CARDS_1280);
        break;
      case "SCREEN_MD":
        setCounterCard(MOVIES_CARDS_768);
        break;
      default:
        setCounterCard(MOVIES_CARDS_480);
        break;
    }
  }, [currentScreen]);

  useEffect(() => {
    const searchSetings = getLocalStorage(`settings_${titleName}`);
    if(searchSetings?.searchText){
      setSearchText(searchSetings.searchText)
      
    }
    if(searchSetings?.shortSwich){
      setSwitchCheked(searchSetings.shortSwich)
    }
    
    if (!cards.length) {
      setPreloader(true);
      const fetchData = async () => {
        const MoviesSearchData = await getLocalStorage(titleName);
      
        if(!MoviesSearchData?.length){
          const saves = await getSaveMovies();
          const data = await getMovies();
          const convertSaves = await convertSaveMoviesData(data, saves)
          setSaveMoviesStore(convertSaves);
          setFindeSaveMoviesStore(convertSaves);
          
            const newData = data.map((item) => {
              const isFind = saves.find((obg) => obg.movieId === item.id);
              return { ...item, inSaved: !!isFind };
          });
         
          setCards(newData);
        } else {
          setCards(MoviesSearchData);
          setFlag(true);
        }
        setPreloader(false);
      };
      fetchData();
    }
    
  }, []);
  
  useEffect(() => {
    setLocalStorage(titleName, cards);
  }, [cards])

  useEffect(() => {
    if(flag){
      setSearchText('');
      const settings = localStorage.getItem(`settings_${titleName}`);
      if (settings) {
        const obj = JSON.parse(settings);
        if (obj.searchText.length > 0) {
          searchHandler(obj.searchText, titleName);
          findeMovies(obj.searchText);
        }
        setSwitchCheked(obj.shortSwich);
      }
    }
  }, [flag])

  const findeMovies = (text) => {
    setPreloader(true);
    if (text.length < 2) {
      setFilms(cards);
    } else {
      const a = text.toLowerCase().trim();
      setFilms(
        cards.filter(
          (obg) =>
            obg.nameRU.toLowerCase().indexOf(a) !== -1 ||
            obg.nameEN.toLowerCase().indexOf(a) !== -1
        )
      );
    }
    setIsSearch(true);
    setPreloader(false);
  };


  const addMoviesCard = () => {
    let add = ADD_MOVIES_CARD_1280;
    if (currentScreen === "SCREEN_MD") {
      add = ADD_MOVIES_CARD_768;
    } else if (currentScreen === "SCREEN_SM") {
      add = ADD_MOVIES_CARD_480;
    }
    setCounterCard((prev) => prev + add);
  };

  return (
    <>
      <Header />
      <main className="main__box">
        <SearchForm
          nameLocal={titleName}
          {...props}
          findeMovies={findeMovies}
          switchCheked={switchCheked}
          switchHandler={switchHandler}
        />
        {preloader && <Preloader />}
        {!preloader && (
          <MoviesCardList
            {...props}
            titleName={titleName}
            cards={films}
            switchCheked={switchCheked}
            counterCard={counterCard}
            setDurationLength={setDurationLength}
            isSearch={isSearch}
          />
        )}
        {isOther && (
          <button className="movies__button" onClick={addMoviesCard}>
            Еще
          </button>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
