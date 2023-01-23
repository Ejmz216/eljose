import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar/NavBar.jsx";
import { Banner } from "../components/Banner/Banner.jsx";
import { Skills } from "../components/Skills/Skills.jsx";
import { Cards } from "../components/Projects/Cards.jsx";
/* import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact"; */
import { Footer } from "../components/Footer/Footer.jsx";
import { ScrollUp } from "../components/ScrollUp/ScrollUp.jsx";
/* import { Contact } from "../components/Contact/Contact.jsx";
 */
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Cards />
      <ScrollUp />
      <Footer />
    </div>
  );
}

export default App;
