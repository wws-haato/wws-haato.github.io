import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import { NavbarDropdown } from "./modules/navbar";
import PreviousWorks from "./pages/previous_works";

import Home from "./pages";
import CurrentEvent from "./pages/current_event";
import PreviousWorksProject1 from "./pages/previous_works_proj1";
import PreviousWorksProject2 from "./pages/previous_works_proj2";
import { merge } from "./utils";
import Contact from "./pages/contact";
import News from "./pages/news";

var rootElement = document.getElementById("root");
rootElement.style.overflow = "hidden";
//rootElement.style.backgroundColor = "black";

ReactDOM.render(
    <StrictMode>
        <App/>
    </StrictMode>,
    rootElement
);




function App() {
    document.body.style.backgroundColor = "black";

    //const pages = merge(prevPages.get(0), prevPages.get(1));
    const router = (
        <Router>
            <NavbarDropdown/>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/about' element={<About/>} />
                    <Route exact path='/current-event' element={<CurrentEvent />} />
                    <Route exact path='/previous-works' element={<PreviousWorks />} />
                    <Route exact path='/previous-works/proj1' element={<PreviousWorksProject1 />} />
                    <Route exact path='/previous-works/proj2' element={<PreviousWorksProject2 />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/news' element={<News />} />
                </Routes>
        </Router>
    );

    return router;
}