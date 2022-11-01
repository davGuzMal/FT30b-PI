import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterPokemons } from '../../actions/index';
import {useEffect} from 'react';
import Filter1 from  '../filter1/Filter1.js'
import Filter2 from  '../filter2/Filter2.js'
import Filter3 from  '../filter3/Filter3.js'


export default function FilterBar (){
  
    return(
        <div className='filter-tools'>             
            <Filter1/>
            <Filter2/>
            <Filter3/>
            {/* <label htmlFor="order">Choose type:</label>
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
            </select> */}
            {/* <label htmlFor="order">Choose origin:</label>
            <select id="origin" name="origin" value={state.origin} onChange={(event)=>setState({...state, origin:event.target.value})}>                
                <option value="all">All</option>            
                <option value="api">API</option>
                <option value="bd">BD</option>
            </select> */}
        </div>
    )
}