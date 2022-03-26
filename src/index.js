import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import { NavbarDropdown } from "./modules/navbar";
import PreviousWorks from "./pages/previous_projects";
import { PreviousWorksProject1, PreviousWorksProject2 } from "./pages/previous_projects";
import Home from "./pages";

var rootElement = document.getElementById("root");
rootElement.style.overflow = "hidden";

ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  rootElement
);


function App() {
    const router = (
        <Router>
            <NavbarDropdown />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About/>} />
                    <Route exact path='/previous-works' element={<PreviousWorks />} />
                    <Route exact path='/previous-works/proj1' element={<PreviousWorksProject1 />} />
                    <Route exact path='/previous-works/proj2' element={<PreviousWorksProject2 />} />
                </Routes>
        </Router>
    );
    return router;
}

