import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { searchPokemonDetail} from '../../actions/index';
import {useHistory} from 'react-router-dom';
import './SearchBar.css'

export default function SearchBar (){
    const [state, setState] = useState({
        namePokemon : ""        
    });
    let dispatch = useDispatch()
    let redirect = useHistory()
    let pokemonSeeked = useSelector(state => state.pokemonDetail)

    function handleSub(event){
        event.preventDefault();
        //console.log(state.namePokemon)
        dispatch(searchPokemonDetail(state.namePokemon.toLowerCase()))
        if(pokemonSeeked.hasOwnProperty("name")){
            redirect.push('/pokemons/'+pokemonSeeked.id)

        }
    }
    function handleChange(event){
        setState({...state, namePokemon : event.target.value })
        
    }   

    return (
        
        <div className='search-tools'>
        <h2>{"POKEMON SEEKER"}</h2>
        <form className="form-container" onSubmit={(event) => handleSub(event)}>
          <div>
            <label className="label" htmlFor="title">Search pokemon: </label>
            <input
              type="text"
              id="nombre"
              autoComplete="off"
              value={state.namePokemon}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <button type="submit">SEARCH</button>
        </form>
        </div>
    )
}