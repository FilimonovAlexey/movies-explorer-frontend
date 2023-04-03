import React from "react";
import "./NavTab.css";

function NavTab() {
    return (
        <div className="navtab">
            <a href="#about" className="navtab__link">
                <button className="navtab__button">Узнать больше</button>
            </a>
        </div>
    );
}

export default NavTab;