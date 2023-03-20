import '../App/App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Main/Main"
import Page404 from '../Page404/Page404';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';

export const CurrentUserContext = createContext();
const initUser = {name: '', email: ''}
function App() {
  const [searchText, setSearchText] = useState('')
  const [user, setUser] = useState(initUser);
  const [logedId, setLogedId] = useState(false);
  const searchHandler = (text) =>{
    setSearchText(text)
  }
  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{ user, setUser, logedId, setLogedId }}>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/Movies" element={<Movies searchText={searchText} searchHandler={searchHandler}/>} />
            <Route exact path="/saved-movies" element={<SavedMovies/>} />
            <Route exact path="/signin" element={<Login/>} />
            <Route exact path="/signup" element={<Register/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="*" element={<Page404/>} />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;