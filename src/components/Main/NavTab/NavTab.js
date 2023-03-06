import React from "react";
import "./NavTab.css";

function NavTab() {
    return (
        <div className="nav-tab">
            <a href="#about-project" className="nav-tab__link">
                <button className="nav-tab__btn">Узнать больше</button>
            </a>
        </div>
    );
}

export default NavTab;