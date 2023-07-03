import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import Services from './Service'
import About from './About'
import Navbar from "./Navbar";

const App=()=>{
    return(
        <>  
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App;