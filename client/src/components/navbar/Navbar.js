import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './images/pokemonLogo.png'

import "./Navbar.css";


export default function Navbar () {
        return(
            <header className="navbar">
            <div>
                <img id="pokeball" src={Logo} width="100" height="50" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/pokemons" >Home</NavLink>                        
                    </li>
                    <li className="list-item">                        
                        <NavLink to="/pokemons/create" >Add pokemon</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}