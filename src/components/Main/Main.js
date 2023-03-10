import React, {useState} from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Main/Promo/Promo"
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs"
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function Main() {
    
    const [loged, setLoged] = useState(false);

    return (
        <div className="content">
            <Header loged={loged} setLoged={setLoged}/>
            <main>
                <Promo/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
            </main>
            <Footer/>
        </div>
    );
}

export default Main;