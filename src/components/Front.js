import React from 'react'
import './Front.css'
import About from './About.js'
import Home from './Home.js'
import Contact from './Contact.js';
import { Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import image1 from "./image/1.jpg"

const front = () => {

    return (
        <div>
            <div className='div1'>
                <div className='divp1'>
                    <Link to="/"><p className='p1'><i>Maker</i> </p></Link>
                </div>
                <div className='divlist'>

                    <Link to=""> <button className='btn'>Home</button></Link>

                    <Link to="Contact"> <button className='btn'>Contact</button></Link>

                    <Link to="About"><button className='btn'> About</button> </Link>
                </div>
                

            </div>
            
            <Routes>

                <Route path="Home" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact />} />

            </Routes>
        </div>
    )
}

export default front
