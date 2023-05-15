import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import GitHub from "./pages/github/GitHub";
import Contact from "./pages/contact/Contact";
import AboutMe from "./pages/aboutMe/AboutMe";

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/github" element={<GitHub/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
