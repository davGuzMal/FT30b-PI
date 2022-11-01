import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {filterPokemons } from '../../actions/index';
import {useEffect} from 'react';

export default function Filter1 (){
    const [state, setState] = useState({            
        filter : ""
    })

    let dispatch = useDispatch()
    
    useEffect(()=>{        
        
        dispatch(filterPokemons(null, null, state.filter))
                  
    }, [state])

    return (
        <div>
            <label htmlFor="order">Choose type:</label>
            <select id="type" name="type" value={state.filter} onChange={(event)=>setState({...state, filter:event.target.value})}>
                <option value="all">All</option>            
                <option value="normal">Normal</option>
                <option value="fighting">Fighting</option>
                <option value="flying">Flying</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="rock">Rock</option>
                <option value="bug">Bug</option>
                <option value="ghost">Ghost</option>
                <option value="steel">Steel</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="fairy">Fairy</option>
                <option value="unknown">Unknown</option>
                <option value="shadow">Shadow</option>
            </select>
        </div>
    )
}