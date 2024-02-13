import "./App.css";
import Nav from "./Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PersonalProjects from "./Pages/PersonalProject";
import Contact from "./Pages/Contact";
import {Routes, Route, Navigate} from "react-router-dom";

export default function App() {
  return (
  

    <>
          <Routes>
          <Route path="/" element={<Navigate to = "/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Personal_Projects" element={<PersonalProjects />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <></>  
    </>
  
  )
}
