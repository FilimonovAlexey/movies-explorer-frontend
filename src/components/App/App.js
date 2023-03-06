import '../App/App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Main/Main"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Main/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
