import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { filter1, filterPokemons } from '../../actions/index';
import {useEffect} from 'react';

export default function Filter1 (){
    const [state, setState] = useState({            
        order1 : "",
        order2 : ""
    })

    let dispatch = useDispatch()
    
    useEffect(()=>{        
        
        dispatch(filterPokemons(state.order1, state.order2))
                  
    }, [state])

    return (
        <div>
            <label htmlFor="filter">Choose type of filter:</label>
            <select id="filter" name="filter" value={state.order1} onChange={(event)=>setState({...state, order1:event.target.value})}>
                <option value="alphabetical">Alphabetical</option>
                <option value="attack">Attack</option>            
            </select>
            <label htmlFor="order">Choose order:</label>
            <select id="order" name="order" value={state.order2} onChange={(event)=>setState({...state, order2:event.target.value})}>
                <option value="ascendant">Ascendant</option>
                <option value="descendant">Descendant</option>            
            </select>
        </div>
    )
}