import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css';

function NavBae() {
    return (
        <div className="body-div">
        <div className="main-div">
            <Link className ='home' to="/" >Home</Link>
            <Link className ='about'to="/Service">Service</Link>
            <Link className ='about'to="/Search">Search</Link>
            <Link className ='about'to="/about">About</Link>
            <Link className ='Contact'to="/contact">Contact</Link>
            
        </div>
        </div>
    )
}

export default NavBae
