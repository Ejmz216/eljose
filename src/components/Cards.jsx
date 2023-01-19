import React from "react";

import Card from "./Card";
import '../styles/card.css';
import { BsCodeSlash } from 'react-icons/bs';

import screen from "../assets/img/projects/screen.png";
import catsapp from "../assets/img/projects/catsapp.png";
import todo from "../assets/img/projects/todo.png";
import ptp from "../assets/img/projects/ptp.png";
import portfolio from "../assets/img/projects/portfolio.png";
import lego from "../assets/img/projects/lego.png";

const cards = [
  {
    id: 1,
    title: "The Screen",
    image: screen,
    text: "Practice on consumption of REST API with JavaScript",
    url: "https://thescreenejmz216.netlify.app/",
  },
  {
    id: 2,
    title: "ToDo App React",
    image: todo,
    text: "Classic for practice, Interactive webapp with React.js ⚛, that works as a task list. 📝",
    url: "https://ejmz216.github.io/todo-app-react/",
  },
  {
    id: 3,
    title: "Elmer's Portfolio Documentation",
    image: portfolio,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 4,
    title: "PtP DTS Analysis Documentaion",
    image: ptp,
    text: "Filtered multitone modulation for a PtP digital telecommunications system.",
    url: "https://github.com/Ejmz216/Proyecto-Laboratorio-2-de-Sistemas-de-Telecomunicaciones",
  },
  {
    id: 5,
    title: "CatsApp Documentation",
    image: catsapp,
    text: "Frist practice on consumption of REST API with JavaScript, very simple CSS style",
    url: "https://github.com/Ejmz216/Consumo_API_REST_1/blob/main/README.md",
  },
  {
    id: 5,
    title: "Lego CSS Animations",
    image: lego,
    text: "Design practice project with the use of animation, keyframe, interactive counters, performance and drawing of characters in CSS.",
    url: "https://cssanimationsandlayoutejmz216.netlify.app/",
  },
];

function Cards() {
  return (
    <section className="projects-container">
      <h3 id="projects"> Some Projets I've Built  <BsCodeSlash /></h3>      
      <div className="container">
        <div className="row">
          {cards.map(({ title, text, image, url, id }) => (
            <div className="col-md-4" key={id}>
              <Card imageSource={image} title={title} text={text} url={url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Cards };
