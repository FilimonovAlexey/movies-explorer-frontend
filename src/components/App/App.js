import '../App/App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Main/Main"
import Page404 from '../Page404/Page404';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/Movies" element={<Movies/>} />
          <Route exact path="/signin" element={<Login/>} />
          <Route exact path="*" element={<Page404/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
