import "./Nav.css";
import {Link, Route, Routes} from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home"
import About from "./Pages/About";
import PersonalProjects from "./Pages/PersonalProject";
import Contact from "./Pages/Contact";

export default function App() {

  const [open, setOpen] = useState(false);
  const OpenSidebar = (e) => {
    const sidebar = document.getElementById("myNav");

    if (open) {
      sidebar.style.height = "0%";
      setOpen(false);
    } else {
      sidebar.style.height = "100%";
      setOpen(true);
    }
  };

  return (
    <>
    
      <div className="overlay" id="myNav">
        <a to="javascript:void(0)" className="closebtn" onClick={OpenSidebar}>
          &times;
        </a>

        <div className="overlay-content">

          <Link to ="/Home">Home</Link>
          <Link to ="/Personal_Projects">Personal Project</Link>
          <Link to ="/About">About</Link>
          <Link to ="/Contact">Contact</Link>



        </div>
      </div>

        <div class = 'container'>
            {<button className="btn"
            onClick={OpenSidebar}
            style={{ fontSize: "20px"}}
            >
            Explore
            </button>}
            </div>
     
    </>
  );
}