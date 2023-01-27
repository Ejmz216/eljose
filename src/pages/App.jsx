import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar/NavBar.jsx";
import { Banner } from "../components/Banner/Banner.jsx";

import { Skills } from "../components/Skills/Skills.jsx";
import { Cards } from "../components/Projects/Cards.jsx";
import { Education } from "../components/Education/Education.jsx"
import { Contact } from "../components/Contact/Contact.jsx";

import { Footer } from "../components/Footer/Footer.jsx";
import { ScrollUp } from "../components/ScrollUp/ScrollUp.jsx";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Cards />
      <Education />
      <Contact />
      <ScrollUp />
      <Footer />
    </div>
  );
}

export default App;
