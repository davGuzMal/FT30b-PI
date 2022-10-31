import React from 'react';
import {Link} from 'react-router-dom';
//import {useDispatch, useSelector} from 'react-redux';
import "./Landing.css";
//import { hideLoader, showLoader } from '../../actions';

export default function Landing () {
        
    
    // const handleHome = function() {
    //     console.log("Hola "+loading)
    //     dispatch(showLoader())        
    //     setTimeout(()=>{
    //         dispatch(hideLoader())
    //     }, 2000)
    //   }

    return(
        <div className="pokemon-detail">
             Bienvenido a la Pokemon API                
             <h1>Existen mas de 3.400.535 Pokemon</h1>
             <Link to="/pokemons">
                <button className="goHome">
                !Atrapalos ya!                
                </button>
            </Link>
        </div>
    )
}