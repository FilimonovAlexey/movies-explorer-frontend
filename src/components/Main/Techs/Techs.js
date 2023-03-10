import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__box">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__about">На курсе веб-разработки мы освоили технологии, которые применили в дипломном 
            проекте.
        </p>
        <ul className="techs__cards">
          <li className="techs__card">HTML</li>
          <li className="techs__card">CSS</li>
          <li className="techs__card">JS</li>
          <li className="techs__card">React</li>
          <li className="techs__card">Git</li>
          <li className="techs__card">Express.js</li>
          <li className="techs__card">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;