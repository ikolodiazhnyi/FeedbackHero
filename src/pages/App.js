import Navbar from "../components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import FifthSection from "../components/FifthSection";
import SixthSection from "../components/SixthSection";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </Router>
    </div>
  );
}

export default App;
