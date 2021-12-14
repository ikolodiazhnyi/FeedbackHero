import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </Router>
    </div>
  );
}

export default App;
