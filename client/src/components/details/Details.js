import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import FullPageLoader from "../fullpageloader/FullPageLoader"
import {getPokemonDetail} from '../../actions/index.js'
import "../fullpageloader/FullPageLoader.css";
import "./Details.css"


export default function Details() {
    const dispatch = useDispatch();
    const {id} = useParams()
    const pokemon = useSelector(state => state.pokemonDetail)
    

    useEffect(() => {
        dispatch(getPokemonDetail(id))
    }, [dispatch, id])
    
    return (
        <div className='container'>
            {!pokemon.hasOwnProperty('name') ? (<FullPageLoader/>) : 
            (
                <div className='detail-pokemon'>
                    <div>
                        <h1>{"Pokemon N° "+pokemon.id+" "+pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h1>
                    </div>
                    <div className='interior-detail'>
                        <div>
                            <h3>Types</h3>
                            <ul>
                                {pokemon.types.map((type, i) =>(
                                    <li key={i}>{type}</li>
                                ))}
                            </ul>
                            <h3>Stats</h3>
                            <ul>
                                <li>{"Health points: "+pokemon.hp}</li>
                                <li>{"Attack: "+pokemon.attack}</li>
                                <li>{"Defense: "+pokemon.defense}</li>
                                <li>{"Speed: "+pokemon.speed}</li>
                            </ul>
                            <h3>Caracteristics</h3>
                            <ul>
                                <li>{"Height: "+pokemon.height}</li>
                                <li>{"Weight: "+pokemon.weigth}</li>                    
                            </ul>
                        </div>
                        <div>
                            <img className='detail-img' src={pokemon.image} alt=''/>
                        </div>
                    </div>        
                </div>
            )}

        </div>
    )
}