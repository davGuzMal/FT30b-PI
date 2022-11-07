import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { getPokemons} from '../../actions/index';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './Form.css'


export function validate(input) {
    let errors = {};
    //id validations
    if (!input.id) {
        errors.id = 'ID is required';
    }
    else if (!Number.isInteger(parseInt(input.id))) {
        errors.id = 'ID must be an integer number';
    }
    //name validations
    if (!input.name) {
      errors.name = 'Name is required';
    }
    else if (Number.isInteger(parseInt(input.name))) {
        errors.name = 'Name cant be a number';
    }
    if (!Number.isInteger(parseInt(input.hp))) {
        errors.hp = 'HP must be an integer number';
    }
    if (!Number.isInteger(parseInt(input.attack))) {
        errors.attack = 'Attack must be an integer number';
    }
    if (!Number.isInteger(parseInt(input.defense))) {
        errors.defense = 'Defense must be an integer number';
    }
    if (!Number.isInteger(parseInt(input.speed))) {
        errors.speed = 'Speed must be an integer number';
    }
    if (!Number.isInteger(parseInt(input.height))) {
        errors.height = 'Height must be an integer number';
    }
    if (!Number.isInteger(parseInt(input.weight))) {
        errors.weight = 'Weight must be an integer number';
    }
    if (!input.type1 && !input.type2) {
      errors.type1 = 'At least 1 type is required';
    }
    else if (input.type1 === input.type2) {
        errors.type2 = 'Types cant be equal';
    }
    
  
    return errors;
  };

export default function Form() {    
    let result = ""
    let redirect = useHistory()
    let types = useSelector(state => state.pokemonTypes)
    let dispatch = useDispatch()
    const [errors, setErrors] = useState({});
    //const [output, setOutput] = useState("")
    const [input, setInput] = useState({
        id: '',
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
    const handleSubmit = function(e){
        e.preventDefault();
        console.log(input)
        const data = {
            id: parseInt(input.id),
            name: input.name.toLowerCase(),
            hp: parseInt(input.hp),
            attack: parseInt(input.attack),
            defense: parseInt(input.defense),
            speed: parseInt(input.speed),
            height : parseInt(input.height),
            weight: parseInt(input.weight),
            types: [input.type1, input.type2],
            image : ""
        }
        
        axios.post("http://localhost:3001/pokemons/", data)
        .then((response) => { 
            if(Array.isArray(response.data)){
                console.log(response.data)
                response.data.forEach((element)=>{
                    if(element.message==='name must be unique') alert("Pokemon already existe, please choose another name")
                    else{alert(element.message)}
                })
                
            }         
            else{
                result=response.data.toString();
                alert(result)
                redirect.push('/pokemons')
            }
            
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
    useEffect(()=>{
        if(types.length===0) dispatch(getPokemons())               
    }, [types, dispatch])
    
    return (
        <div className='container1'>
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
            <select className={errors.type1 && 'danger'} id="type1" name="type1" value={input.type1} onChange={handleInputChange}>
                <option value="">Choose type1</option>
                {types.length && types.map(t=>(

                <option value={t.name} key={t.id}>{t.name.charAt(0).toUpperCase() + t.name.slice(1)}</option>
                ))}          
                
            </select>
            <select className={errors.type1 && 'danger'} id="type2" name="type2" value={input.type2} onChange={handleInputChange}>
                <option value="">Choose type2</option>
                {types.length && types.map(t=>(

                <option value={t.name} key={t.id}>{t.name.charAt(0).toUpperCase() + t.name.slice(1)}</option>
                ))}              
                
            </select>
            {errors.type1 && (
            <p className="danger">{errors.type1}</p>
            )}
            {errors.type2 && (
            <p className="danger">{errors.type2}</p>
            )}
            </div>
            <button type="submit">CREATE</button>
        </form>
        
        
      </div>
      )
}