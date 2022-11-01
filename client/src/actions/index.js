
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
export const filter1=(order1, order2)=>(dispatch)=> {
    
    dispatch({ 
        type: "FILTER_POKEMONS_1",                
        payload : {
            order1,
            order2
        }
    });    
}
export const filterPokemons=(order1, order2, filter1, filter2)=>(dispatch)=> {
    dispatch({ 
        type: "FILTER_POKEMONS_1",                
        payload : {
            order1,
            order2
        }
    });
    dispatch({ 
        type: "FILTER_POKEMONS_2",                
        payload : filter1
    });
    dispatch({ 
        type: "FILTER_POKEMONS_3",                
        payload : filter2
    }); 

}

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

export const getPokemonDetail=(id)=>async(dispatch)=>{
    //dispatch({type: "REQUEST_GET_POKEMONS"});
    fetch("http://localhost:3001/pokemons/" + id)
    .then(response => response.json())
    .then(json => {
        dispatch({ type: "GET_DETAIL_POKEMON", payload: json });
        });
    }

export function createPokemon(titulo) {
    return function(dispatch) {
        
    };
    }