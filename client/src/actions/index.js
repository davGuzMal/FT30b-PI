
//filter="alphabetical", order="descendant"
export function getPokemons(filter, order, typeP, origin) {
    return function(dispatch) {
        return fetch("http://localhost:3001/pokemons/")
        .then(response => response.json())
        .then(json => {
            dispatch({ 
                type: "GET_POKEMONS", 
                payload: json, 
                filter: filter, 
                order : order,
                typeP : typeP,
                origin : origin
            });
        })
        
    };
}
export function filterPokemons(filter, order, typeP, origin) {
    return function(dispatch) {
            dispatch({ 
            type: "FILTER_POKEMONS",                
            payload : {
                filter: filter, 
                order : order,
                typeP : typeP,
                origin : origin
            }
        });
    }       
    
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

export function getPokemonDetail(id){
    return function (dispatch){
        return fetch("http://localhost:3001/pokemons/" + id)
        .then(response => response.json())
        .then(json => {
        dispatch({ type: "GET_DETAIL_POKEMON", payload: json });
    });
    }
}

export function showLoader(){
    return function(dispatch){
        dispatch({type:"SHOW_LOADER"})
    }
}

export function hideLoader(){
    return function(dispatch){
        
        dispatch({type:"HIDE_LOADER"})
    }
}

export function createPokemon(titulo) {
    return function(dispatch) {
        
    };
    }