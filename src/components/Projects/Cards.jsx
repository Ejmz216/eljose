import React from "react";

import Card from "./Card";
import './card.css';
import { BsCodeSlash } from 'react-icons/bs';

import pruebatec from "../../assets/img/projects/pruebatec.png";
import screen from "../../assets/img/projects/screen.png";
import screen2 from "../../assets/img/projects/screen2.png";
import petlify from "../../assets/img/projects/Petlify.png";
/* import catsapp from "../../assets/img/projects/catsapp.png"; */
import todo from "../../assets/img/projects/todo.png";
import ptp from "../../assets/img/projects/Ptp.png";
import portfolio from "../../assets/img/projects/Porfolio.png";
import lego from "../../assets/img/projects/Lego.png";

const cards = [
  {
    id: 1,
    color: "id1",
    title: "The Screen",
    image: screen,
    text: "Practice on consumption of REST API with JavaScript, Single Page Application with hash navigation and a movie search engine based on TheMovieDB.",
    url: "https://github.com/Ejmz216/TheMovieDB_API",
  },
  {
    id: 2,
    color: "id1",
    title: "The Screen V2.0",
    image: screen2,
    text: "New version of The Screen. This time, I have opted to completely update (remake) the application using ReactJS and the well-known organization and best practices method Atomic Design",
    url: "https://github.com/Ejmz216/react_the_screen2",
  },
  {
    id: 3,
    color: "id2",
    title: "Petlify",
    image: petlify,
    text: "Movile App Design for a productivity app 🐶. Made for research purposes in HCI - Nomophonia",
    url: "https://www.figma.com/file/8hu45hDFF3LKeUE0krMje9/HCI---App?node-id=0%3A1&t=KEepdQf8Q8DA8ZkG-1",
  },
  {
    id: 4,
    color: "id3",
    title: "ToDo App React",
    image: todo,
    text: "Interactive webapp with React.js ⚛, that works as a task list. 📝 Practice work on handling components, properties, state and effects. ",
    url: "https://github.com/Ejmz216/todo-app-react",
  },
  {
    id: 5,
    color: "id4",
    title: "Elmer's Portfolio ",
    image: portfolio,
    text: "Single page application with React.js, for sharing my projects and blog (soon!)",
    url: "https://github.com/Ejmz216/portfolio-elmer",
  },
  {
    id: 6,
    color: "id4",
    title: "Angular - SpringBoot Practice",
    image: pruebatec,
    text: "This test is intended to assess programming knowledge using the Angular and Springboot frameworks.",
    url: "https://github.com/Ejmz216/prueba-tecnica-fullstack",
  },
  {
    id: 7,
    color: "id5",
    title: "PtP DTS Analysis",
    image: ptp,
    text: "Filtered multitone modulation for a PtP digital telecommunications system.",
    url: "https://github.com/Ejmz216/Proyecto-Laboratorio-2-de-Sistemas-de-Telecomunicaciones",
  },
  {
    id: 8,
    color: "id6",
    title: "Lego CSS Animations",
    image: lego,
    text: "Design practice project with the use of animation, keyframe, interactive countersand  performance",
    url: "https://github.com/Ejmz216/Animaciones-con-CSS",
  },
  /*   {
      id: 7,
      color: "id1",
      title: "CatsApp",
      image: catsapp,
      text: "Frist practice on consumption of REST API with JavaScript, with a VERY simple CSS style",
      url: "https://github.com/Ejmz216/Consumo_API_REST_1/blob/main/README.md",
    }, */

];

function Cards() {
  return (
    <section className="projects-container">
      <h3 id="projects"> Projects <BsCodeSlash /></h3>
      <h4 className="section_subtitle SubProject">Some Stuff I've Built</h4>
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
