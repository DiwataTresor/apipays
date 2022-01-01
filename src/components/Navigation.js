import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/main.css'

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" >
                Accueil
            </NavLink>
            <NavLink exact to="a-propos" >
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation; 