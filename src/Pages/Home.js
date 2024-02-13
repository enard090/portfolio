import Nav from "../Nav";
import App from "../App"
import About from "./About";
import PersonalProjects from "./PersonalProject";
import Contact from "./Contact";
import {Routes, Route} from "react-router-dom";
export default function Home() {
  return (
  
    <>
    <h1>This is Home</h1>
    <Nav />
    <App/>
    </>
  )
}