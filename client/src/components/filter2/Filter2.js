import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filter2 } from '../../actions/index';
import {useEffect} from 'react';

export default function Filter1 (){
    const [state, setState] = useState({            
        filter : "all"
    })
    let types = useSelector(state => state.pokemonTypes)
    let dispatch = useDispatch()
    
    useEffect(()=>{        
        
        dispatch(filter2(state.filter))
                  
    }, [state, dispatch])

    return (
        <div>
            <label htmlFor="order">Choose type:</label>
            <select id="type" name="type" value={state.filter} onChange={(event)=>setState({...state, filter:event.target.value})}>
                <option value="all">All</option>            
                {types.length && types.map(t=>(

                    <option value={t.name} key={t.id}>{t.name.charAt(0).toUpperCase() + t.name.slice(1)}</option>
                ))}
            </select>
        </div>
    )
}