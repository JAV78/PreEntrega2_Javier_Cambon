import React from 'react';
import Logo from "../Logo";
import CartWidget from './CartWidget';
import "../navbar/Navbar.css";


function Navbar() {
    return (
        <div className="navbar">
            <Logo/>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <Link to="/cafe">Cofee</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/salado">Salado</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/dulce">Dulce</Link>
                </li>
            </ul>   
            <CartWidget/>     
        </div>
    )
}

export default Navbar;