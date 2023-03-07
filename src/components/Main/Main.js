import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Main/Promo/Promo"
import AboutProject from "./AboutProject/AboutProject";

function Main() {
    return (
        <div className="content">
            <Header />
            <main>
                <Promo/>
                <AboutProject/>
            </main>
        </div>
    );
}

export default Main;