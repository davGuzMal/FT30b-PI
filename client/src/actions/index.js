
//filter="alphabetical", order="descendant"
export const getPokemons = ()=> async (dispatch) => {
    
    
    dispatch({type: "REQUEST_GET_POKEMONS"});
    fetch("http://localhost:3001/pokemons/")
    .then(response => response.json())
    .then(json => {
        dispatch({ 
            type: "GET_POKEMONS", 
            payload: json                    
        });
    })
    
};
export const filter1=(order)=>(dispatch)=> {
    if(order === "nameAscendant"){
        dispatch({ 
            type: "FILTER_POKEMONS_1",                
            payload : {
                order:"asc",
                property:"name"
            }
        });}
    else if (order === "nameDescendant"){
        dispatch({ 
            type: "FILTER_POKEMONS_1",                
            payload : {
                order:"desc",
                property:"name"
            }
        });
    }
    else if (order === "attackAscendant"){
        dispatch({ 
            type: "FILTER_POKEMONS_1",                
            payload : {
                order:"asc",
                property:"attack"
            }
        });
    }
    else if (order === "attackDescendant"){
        dispatch({ 
            type: "FILTER_POKEMONS_1",                
            payload : {
                order:"desc",
                property:"attack"
            }
        });
    }
}
// export const filterPokemons=(order1, order2, filter1, filter2)=>(dispatch)=> {
//     dispatch({ 
//         type: "FILTER_POKEMONS_1",                
//         payload : {
//             order1,
//             order2
//         }
//     });
//     dispatch({ 
//         type: "FILTER_POKEMONS_2",                
//         payload : filter1
//     });
//     dispatch({ 
//         type: "FILTER_POKEMONS_3",                
//         payload : filter2
//     }); 

// }

export const filter2=(filter)=>(dispatch)=> {
    
    dispatch({ 
        type: "FILTER_POKEMONS_2",                
        payload : filter
    });
    
}       
    


export function searchPokemonDetail(name){
    return function (dispatch){
        return fetch("http://localhost:3001/pokemons/?name=" + name)
        .then(response => response.json())
        .then(json => {
        dispatch({ type: "GET_DETAIL_POKEMON", payload: json });
    });
    }
}

export const getPokemonDetail=(id)=>(dispatch)=>{
    //dispatch({type: "REQUEST_GET_POKEMONS"});
    fetch("http://localhost:3001/pokemons/" + id)
    .then(response => response.json())
    .then(json => {
        dispatch({ type: "GET_DETAIL_POKEMON", payload: json });
        });
    }

export const createPokemon=(input)=>(dispatch)=>{
    fetch("http://localhost:3001/pokemons/create",{
        method: "POST",        
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: parseInt(input.id),
            name: input.name,
            hp: parseInt(input.hp),
            attack: parseInt(input.attack),
            defense: parseInt(input.defense),
            speed: parseInt(input.speed),
            height : parseInt(input.height),
            weight: parseInt(input.weight),
            type: [input.type1, input.type2],
            image : ""
        })

    }).then(()=>{return "Pokemon created succesfully"})
    .catch((error)=>{throw new Error(error)})
    // dispatch({type: "REQUEST_GET_POKEMONS"});
    // fetch("http://localhost:3001/pokemons/")
    // .then(response => response.json())
    // .then(json => {
    //     dispatch({ 
    //         type: "GET_POKEMONS", 
    //         payload: json                    
    //     });
    // })
}