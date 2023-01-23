import React from "react";

import Card from "./Card";
import './card.css';
import { BsCodeSlash } from 'react-icons/bs';

import screen from "../../assets/img/projects/screen.png";
import petlify from "../../assets/img/projects/petlify.png";
import catsapp from "../../assets/img/projects/catsapp.png";
import todo from "../../assets/img/projects/todo.png";
import ptp from "../../assets/img/projects/ptp.png";
import portfolio from "../../assets/img/projects/portfolio.png";
import lego from "../../assets/img/projects/lego.png";

const cards = [
  {
    id: 1,
    color: "id1",
    title: "The Screen",
    image: screen,
    text: "Practice on consumption of REST API with JavaScript",
    url: "https://thescreenejmz216.netlify.app/",
  },
  {
    id: 2,
    color: "id2",
    title: "Petlify",
    image: petlify,
    text: "Movile App Design for a productivity app 🐶. Made for research purposes in HCI - Nomophonia",
    url: "https://www.figma.com/file/8hu45hDFF3LKeUE0krMje9/HCI---App?node-id=0%3A1&t=KEepdQf8Q8DA8ZkG-1",
  },
  {
    id: 3,
    color: "id3",
    title: "ToDo App React",
    image: todo,
    text: "Interactive webapp with React.js ⚛, that works as a task list. 📝",
    url: "https://ejmz216.github.io/todo-app-react/",
  },
  {
    id: 4,
    color: "id4",
    title: "Elmer's Portfolio ",
    image: portfolio,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 5,
    color: "id5",
    title: "PtP DTS Analysis",
    image: ptp,
    text: "Filtered multitone modulation for a PtP digital telecommunications system.",
    url: "https://github.com/Ejmz216/Proyecto-Laboratorio-2-de-Sistemas-de-Telecomunicaciones",
  },
  {
    id: 6,
    color: "id6",
    title: "Lego CSS Animations",
    image: lego,
    text: "Design practice project with the use of animation, keyframe, interactive countersand  performance",
    url: "https://cssanimationsandlayoutejmz216.netlify.app/",
  },
  {
    id: 7,
    color: "id1",
    title: "CatsApp",
    image: catsapp,
    text: "Frist practice on consumption of REST API with JavaScript, with a VERY simple CSS style",
    url: "https://github.com/Ejmz216/Consumo_API_REST_1/blob/main/README.md",
  },

];

function Cards() {
  return (
    <section className="projects-container">
      <h3 id="projects"> Some Projets I've Built  <BsCodeSlash /></h3>
      <div className="container">
        <div className="row">
          {cards.map(({ title, text, image, url, id, color }) => (
            <div className="col-md-4" key={id}>
              <Card imageSource={image} title={title} text={text} url={url} color={color} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Cards };
