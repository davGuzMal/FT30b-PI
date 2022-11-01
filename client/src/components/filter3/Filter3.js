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
        
        dispatch(filterPokemons(null, null, null, state.filter))
                  
    }, [state])

    return (
        <div>
            <label htmlFor="order">Choose origin:</label>
            <select id="origin" name="origin" value={state.filter} onChange={(event)=>setState({...state, filter:event.target.value})}>                
                <option value="all">All</option>            
                <option value="api">API</option>
                <option value="bd">BD</option>
            </select>
        </div>
    )
}