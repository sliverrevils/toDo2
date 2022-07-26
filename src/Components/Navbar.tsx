import React from "react";
import { NavLink } from "react-router-dom";


export const Navbar: React.FunctionComponent = () => {

    return (
        <nav>
            <div className="nav-wrapper light-blue darken-1 px1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to={'/'}>Список дел</NavLink></li>
                    <li><NavLink to={'/about'}>Информация</NavLink></li>
                    
                </ul>
            </div>

        </nav>

    )
}