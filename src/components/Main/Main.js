import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Main/Promo/Promo"

function Main() {
    return (
        <div className="content">
            <Header />
            <main>
                <Promo/>
            </main>
        </div>
    );
}

export default Main;