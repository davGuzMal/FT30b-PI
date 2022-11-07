import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { filter1 } from '../../actions/index';
import {useEffect} from 'react';

export default function Filter1 (){
    const [state, setState] = useState({            
        order : ""
    })

    let dispatch = useDispatch()
    
    useEffect(()=>{        
        
        dispatch(filter1(state.order))
                  
    }, [state, dispatch])

    return (
        <div>            
            <label htmlFor="order">Choose order:</label>
            <select id="order" name="order" value={state.order} onChange={(event)=>setState({...state, order:event.target.value})}>
                <option value="nameAscendant">Name - Ascendant</option>
                <option value="nameDescendant">Name - Descendant</option>
                <option value="attackAscendant">Attack - Ascendant</option>
                <option value="attackDescendant">Attack - Descendant</option>        
            </select>
        </div>
    )
}