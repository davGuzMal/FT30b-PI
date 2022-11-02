import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { filter1, filterPokemons } from '../../actions/index';
import {useEffect} from 'react';

export default function Filter1 (){
    const [state, setState] = useState({            
        order : ""
    })

    let dispatch = useDispatch()
    
    useEffect(()=>{        
        
        dispatch(filter1(state.order))
                  
    }, [state])

    return (
        <div>
            {/* <label htmlFor="filter">Choose type of filter:</label>
            <select id="filter" name="filter" value={state.order1} onChange={(event)=>setState({...state, order1:event.target.value})}>
                <option value="alphabetical">Alphabetical</option>
                <option value="attack">Attack</option>            
            </select> */}
            <label htmlFor="order">Choose order:</label>
            <select id="order" name="order" value={state.order2} onChange={(event)=>setState({...state, order:event.target.value})}>
                <option value="nameAscendant">Name - Ascendant</option>
                <option value="nameDescendant">Name - Descendant</option>
                <option value="attackAscendant">Attack - Ascendant</option>
                <option value="attackDescendant">Attack - Descendant</option>        
            </select>
        </div>
    )
}