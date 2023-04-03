import React from "react";
import "./AboutProject.css"

function AboutProject() {
  return (
    <section className="about-project" id="about">
      <h2 className="about__title">О проекте</h2>
      <div className="project">
         <div className="project-block">
             <h3 className="project-block__title">Дипломный проект включал 5 этапов</h3>
             <p className="project-block__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
         </div>
         <div className="project-block">
             <h3 className="project-block__title">На выполнение диплома ушло 5 недель</h3>
             <p className="project-block__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
         </div>
      </div>
      <div className="project-duration">
          <div className="project-duration__backend">
              <p className="project-duration__time_green">1 неделя</p>
              <p className="project-duration__title">Back-end</p>
          </div>
          <div className="project-duration__frontend">
              <p className="project-duration__time_grey">4 недели</p>
              <p className="project-duration__title">Front-end</p>
          </div>
      </div>
    </section>
  );
}

export default AboutProject;