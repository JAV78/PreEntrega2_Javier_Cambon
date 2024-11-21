
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../navbar/NavBar";
import "./Layout.css"

function Layout() {
  return (
    <>
       
     <nav>
        <Navbar/>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/cafe"}>Café</Link>
            </li>
            <li>
                <Link to={"/salado"}>Salado</Link>
            </li>
            <li>
                <Link to={"/dulce"}>Dulce</Link>
            </li>
        </ul>                   
    </nav>
   
    <Outlet/>
    </>
  )
}

export default Layout