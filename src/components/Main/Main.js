import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Main/Promo/Promo"
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs"

function Main() {
    return (
        <div className="content">
            <Header />
            <main>
                <Promo/>
                <AboutProject/>
                <Techs/>
            </main>
        </div>
    );
}

export default Main;