import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import { NavbarDropdown } from "./modules/navbar";
import PreviousWorks from "./pages/previous_projects";
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
                </Routes>
        </Router>
    );
    return router;
}

