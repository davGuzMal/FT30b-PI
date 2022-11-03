import React from 'react';
import {Link} from 'react-router-dom';
import "./Landing.css";


export default function Landing () {
      
    return(        
        <div className="landing-container">
        <div>
            <img className="landing-image" src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt=''/>
        </div>
        <div className="pokemon-detail">

            
            <h1>Welcome to The Pokemon API</h1>
            <h2>More than 3.400.535 pokemons exist around the world</h2>
            <Link to="/pokemons">
                <button className="goHome">
                !Gotta catch 'em all!                
                </button>
            </Link>
        </div>
        <div>
            <img className="landing-image" src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt=''/>
        </div>
        </div>
        )
}