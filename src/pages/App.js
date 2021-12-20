import Navbar from "../components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import FirstSection from "../components/1FirstSection";
import SecondSection from "../components/2SecondSection";
import ThirdSection from "../components/3ThirdSection";
import FourthSection from "../components/4FourthSection";
import FifthSection from "../components/5FifthSection";
import SixthSection from "../components/6SixthSection";
import SeventhSection from "../components/7SeventhSection";
import EighthSection from "../components/8EighthSection";
import NinthSection from "../components/9NinthSection";
import TenthSection from "../components/10TenthSection";
import SideBar from "../components/SideBar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <Router>
        <SideBar isSidebarOpen={isSidebarOpen} toggle={toggle} />
        <Navbar toggle={setIsSidebarOpen} />
        <FirstSection />
        {/* <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <NinthSection />
        <TenthSection /> */}
      </Router>
    </div>
  );
}

export default App;
