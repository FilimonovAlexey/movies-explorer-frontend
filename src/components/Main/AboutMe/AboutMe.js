import React from "react";
import "./AboutMe.css";
import Avatar from "../../../images/aboutme-avatar.png";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__block">
        <div className="aboutme__information">
          <h3 className="aboutme__name">Алексей</h3>
          <p className="aboutme__job">Фронтенд разработчик, 27 лет</p>
          <p className="aboutme__bio">Я родился в городе Новосибирск. Мой путь в it начался с 2022 года, когда я посетил бассейн Школы 21 от 
            Сбера, после которого я пошел на курсы по веб-разработке Яндекс Практикум. Еще в процессе обучения я смог 
            сменить работу и стать системным администратором в акредитованной it компании.
          </p>
          <a className="aboutme__github" href="https://github.com/FilimonovAlexey" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <img className="aboutme__avatar" src={Avatar} alt="Филимонов Алексей"></img>
      </div>
      <Portfolio/>
    </section>
  );
}

export default AboutMe;