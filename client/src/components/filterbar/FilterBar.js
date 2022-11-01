import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterPokemons } from '../../actions/index';
import {useEffect} from 'react';


export default function FilterBar (){
    const [state, setState] = useState({            
        filter : "",
        order : "",
        type : "",
        origin : ""
    })
    let dispatch = useDispatch()
    
    useEffect(()=>{        
        
        dispatch(filterPokemons(state.filter, state.order, state.type, state.origin ))
        // console.log(state.filter, state.order, state.type, state.origin,"effect")
          
}, [state])
    return(
        <div className='filter-tools'>
             <label htmlFor="filter">Choose type of filter:</label>
            <select id="filter" name="filter" value={state.filter} onChange={(event)=>setState({...state, filter:event.target.value})}>
                <option value="alphabetical">Alphabetical</option>
                <option value="attack">Attack</option>            
            </select>
            <label htmlFor="order">Choose order:</label>
            <select id="order" name="order" value={state.order} onChange={(event)=>setState({...state, order:event.target.value})}>
                <option value="ascendant">Ascendant</option>
                <option value="descendant">Descendant</option>            
            </select> 
        
            <label htmlFor="order">Choose type:</label>
            <select id="type" name="type" value={state.type} onChange={(event)=>setState({...state, type:event.target.value})}>
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
            <label htmlFor="order">Choose origin:</label>
            <select id="origin" name="origin" value={state.origin} onChange={(event)=>setState({...state, origin:event.target.value})}>                
                <option value="all">All</option>            
                <option value="api">API</option>
                <option value="bd">BD</option>
            </select>
        </div>
    )
}