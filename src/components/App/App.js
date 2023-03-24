import '../App/App.css';
import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Main/Main"
import Page404 from '../Page404/Page404';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { getProfile } from "../../utils/Api/MainApi"

export const CurrentUserContext = createContext();
const initUser = {name: '', email: ''}
function App() {
  const [searchText, setSearchText] = useState('')
  const [user, setUser] = useState(initUser);
  const [logedId, setLogedId] = useState(true);
  const [saveMoviesStore, setSaveMoviesStore] = useState([]);
  const [findeSaveMoviesStore, setFindeSaveMoviesStore] = useState([]);
  const [cards, setCards] = useState([])
  const [films, setFilms] = useState([])
  
  const searchHandler = (text) =>{
    const settings =  localStorage.getItem("settings")
    if(settings){
      const obj = JSON.parse(settings);
      obj.searchText = text;
      localStorage.setItem('settings', JSON.stringify(obj))
    } else {
      localStorage.setItem('settings', `{"searchText": "${text}", "shortSwich": "false"}`)
    }
    setSearchText(text)
  }

  useEffect(() => {
    if(!localStorage.getItem("token") || localStorage.getItem("token") === ''){
      setLogedId(false)
    } 
    else {
      getProfile()
      .then(data=>{
        if(data.message){
          localStorage.removeItem("token")
          setLogedId(false)
          window.location.reload();
        }
      })
      .catch(error => {
        console.error('getProfile error ', error)
      })
    }
  }, [])

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{ user, setUser, logedId, setLogedId, saveMoviesStore, setSaveMoviesStore, cards, setCards, films, setFilms, findeSaveMoviesStore, setFindeSaveMoviesStore}}>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/signin" element={<Login/>} />
            <Route exact path="/signup" element={<Register/>} />

            <Route exact path="/profile" 
                         element={
                          <ProtectedRoute logedId={logedId}>
                           <Profile/>
                          </ProtectedRoute>
                         }
            />

            <Route exact path="/Movies" 
                         element={
                          <ProtectedRoute logedId={logedId}>
                            <Movies searchText={searchText} searchHandler={searchHandler}/>
                          </ProtectedRoute>
                         }
            />

            <Route exact path="/saved-movies" 
                         element={
                          <ProtectedRoute logedId={logedId}>
                            <SavedMovies searchText={searchText} searchHandler={searchHandler}/>
                          </ProtectedRoute>
                         }
            />

            <Route exact path="*" element={<Page404/>} />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;