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

export const CurrentUserContext = createContext();
const initUser = {name: '', email: ''}
function App() {
  const [searchText, setSearchText] = useState('')
  const [user, setUser] = useState(initUser);
  const [logedId, setLogedId] = useState(false);
  const [saveMoviesStore, setSaveMoviesStore] = useState([]);
  const searchHandler = (text) =>{
    setSearchText(text)
  }

  useEffect(() => {
    if(localStorage.getItem("token") && localStorage.getItem("token") !== ''){
      setLogedId(true)
    }
  }, [])

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{ user, setUser, logedId, setLogedId, saveMoviesStore, setSaveMoviesStore }}>
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