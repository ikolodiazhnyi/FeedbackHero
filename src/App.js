import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </Router>
    </div>
  );
}

export default App;
