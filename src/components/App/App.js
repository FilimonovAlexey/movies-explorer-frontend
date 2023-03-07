import '../App/App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Main/Main"
import Page404 from '../Page404/Page404';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          
          <Route exact path="*" element={<Page404/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
