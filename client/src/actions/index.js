export const getPokemons = ()=> async (dispatch) => {
    
    
    dispatch({type: "REQUEST_GET_POKEMONS"});
    fetch("http://localhost:3001/types/")
    .then(response => response.json())
    .then(json => {
        dispatch({ 
            type: "GET_TYPES_POKEMONS", 
            payload: json                    
        });
    })
    fetch("http://localhost:3001/pokemons/")
    .then(response => response.json())
    .then(json => {
        dispatch({ 
            type: "GET_POKEMONS", 
            payload: json                    
        });
    })
    
};

//FILTER ACTIONS
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

export const filter2=(filter)=>(dispatch)=> {
    
    dispatch({ 
        type: "FILTER_POKEMONS_2",                
        payload : filter
    });
    
}
export const filter3=(filter)=>(dispatch)=> {
    
    dispatch({ 
        type: "FILTER_POKEMONS_3",                
        payload : filter
    });
    
}
//SEARCH POKEMON ACTION
export function searchPokemonDetail(name){
    return function (dispatch){
        return fetch("http://localhost:3001/pokemons/?name=" + name)
        .then(response => response.json())
        .then(json => {
        dispatch({ type: "GET_DETAIL_POKEMON", payload: json });
    });
    }
}
//POKEMON DETAIL ACTION
export const getPokemonDetail=(id)=>(dispatch)=>{    
    fetch("http://localhost:3001/pokemons/" + id)
    .then(response => response.json())
    .then(json => {
        dispatch({ type: "GET_DETAIL_POKEMON", payload: json });
        });
}

export const addErrors =(errors)=>(dispatch)=>{
    dispatch({ 
        type: "ADD_ERRORS",                
        payload : errors
    });

}
