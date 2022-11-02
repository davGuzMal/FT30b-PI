import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { createPokemon} from '../../actions/index';
import axios from 'axios';



export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required';
    }
    else if (!input.id) {
        errors.id = 'ID is required';
    }
    // else if (!/\S+@\S+\.\S+/.test(input.username)) {
    //   errors.username = 'Username is invalid';
    // }
    if (!input.type1 && !input.type2) {
      errors.type1 = 'At least 1 type is required';
    }
    // else if((!/(?=.*[0-9])/.test(input.password))){
    //   errors.password = 'Password is invalid';
    // }
  
    return errors;
  };

export default function Form() {

    let dispatch = useDispatch()
    let result = ""
    const [errors, setErrors] = useState({});
    const [output, setOutput] = useState("")
    const [input, setInput] = useState({
        ID: '',
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        type1:'',
        type2: ''
    });


    const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
        setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
        }));
      }
    const handleSubmit = function(e, result){
        e.preventDefault();
        const data = {
            id: parseInt(input.id),
            name: input.name,
            hp: parseInt(input.hp),
            attack: parseInt(input.attack),
            defense: parseInt(input.defense),
            speed: parseInt(input.speed),
            height : parseInt(input.height),
            weight: parseInt(input.weight),
            types: [input.type1, input.type2],
            image : ""
        }
        const element = document.querySelector('.response');
        axios.post("http://localhost:3001/pokemons/", data)
        .then((response, output) => {
            output = response.data.id
            console.log(response.data.name)
        })
        .catch(error=>{throw new Error(error)})
        // fetch("http://localhost:3001/pokemons/create",{
        // method: "POST",        
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(data)
        //})
        
    }
    return (
        <div>
             <h1>Create new pokemon</h1>   
            <form className="create-container" onSubmit={(event) => handleSubmit(event)}>
            <div>
                <label>ID:</label>
                <input className={errors.id && 'danger'} type="text" name="id" onChange={handleInputChange} value={input.id}/>
                {errors.id && (
                <p className="danger">{errors.id}</p>
                )}
            </div>    
            <div>
                <label>Name:</label>
                <input className={errors.name && 'danger'} type="text" name="name" onChange={handleInputChange} value={input.name}/>
                {errors.name && (
                <p className="danger">{errors.name}</p>
                )}
            </div>
            <div>
                <label>HP:</label>
                <input className={errors.hp && 'danger'} type="text" name="hp" onChange={handleInputChange} value={input.hp}/>
                {errors.hp && (
                <p className="danger">{errors.hp}</p>
                )}
            </div>
            <div>
                <label>Attack:</label>
                <input className={errors.attack && 'danger'} type="text" name="attack" onChange={handleInputChange} value={input.attack}/>
                {errors.attack && (
                <p className="danger">{errors.attack}</p>
                )}
            </div>
            <div>
                <label>Defense:</label>
                <input className={errors.defense && 'danger'} type="text" name="defense" onChange={handleInputChange} value={input.defense}/>
                {errors.defense && (
                <p className="danger">{errors.defense}</p>
                )}
            </div>
            <div>
                <label>Speed:</label>
                <input className={errors.speed && 'danger'} type="text" name="speed" onChange={handleInputChange} value={input.speed}/>
                {errors.speed && (
                <p className="danger">{errors.speed}</p>
                )}
            </div>
            <div>
                <label>Height:</label>
                <input className={errors.height && 'danger'} type="text" name="height" onChange={handleInputChange} value={input.height}/>
                {errors.height && (
                <p className="danger">{errors.height}</p>
                )}
            </div>
            <div>
                <label>Weight:</label>
                <input className={errors.weight && 'danger'} type="text" name="weight" onChange={handleInputChange} value={input.weight}/>
                {errors.weight && (
                <p className="danger">{errors.weight}</p>
                )}
            </div>
            <div>
            <label>Type:</label>
            <select id="type1" name="type1" value={input.type1} onChange={handleInputChange}>
                <option value="">Choose type1</option>            
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
            <select id="type2" name="type2" value={input.type2} onChange={handleInputChange}>
                <option value="">Choose type2</option>            
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
            <input type="submit" />
        </form>
        <h2 id="response">{result}</h2>
        
      </div>
      )
}