const initialState = {    
    pokemonCreated: {},
    pokemonTypes: [],
    pokemonsLoaded: [],
    pokemonsSorted: [],
    pokemonDetail: {},    
    loading: false
};

function sortAsc(arr, property) {
   return arr.sort(function (a, b) {
       if (a[property] > b[property]) {
           return 1;
       }
       if (b[property]> a[property]) {
           return -1;
       }
       return 0;
   })
}

function sortDesc(arr, property) {
   return arr.sort(function (a, b) {
       if (a[property] > b[property]) {
           return -1;
       }
       if (b[property]> a[property]) {
           return 1;
       }
       return 0;
   })
}

function rootReducer (state = initialState, action){
    switch (action.type) {        
        case "FILTER_POKEMONS_1":            
            let sortedArray1=[]
            if(action.payload.order==="asc") sortedArray1 = sortAsc(state.pokemonsSorted, action.payload.property)
            else if(action.payload.order==="desc") sortedArray1 = sortDesc(state.pokemonsSorted, action.payload.property)
            
            return {
                ...state,
                pokemonsSorted : [...sortedArray1]
            }
        case "FILTER_POKEMONS_2":            
            let filteredArray2=[]
            if(action.payload!=="all"){
    
                filteredArray2 = state.pokemonsSorted.filter(p=>{
                    return p.types.find(t=>t===action.payload)
                })
                if(filteredArray2.length===0) filteredArray2 = state.pokemonsSorted;
                
            }
            else{                
                filteredArray2 = state.pokemonsSorted;
            }
            return {
                ...state,
                pokemonsSorted : filteredArray2
            }
        case "FILTER_POKEMONS_3":            
            let filteredArray3=[]
            
            if(action.payload!=="all"){
                if(action.payload==="api"){                    
                    filteredArray3 = state.pokemonsLoaded.filter(p => Number.isInteger(p.id))
                }
                else if(action.payload==="bd"){
                    filteredArray3 = state.pokemonsLoaded.filter(p => !Number.isInteger(p.id))
                }
                
            }
            else if(action.payload==="all" || action.payload===""){
                filteredArray3 = state.pokemonsLoaded;                
            }
            return {
                ...state,
                pokemonsSorted : filteredArray3
            }
            
        case "REQUEST_GET_POKEMONS":

            return{
                ...state,
                loading : true
            }
        case "GET_POKEMONS":
                    return {
                ...state,
                pokemonsLoaded: action.payload,
                pokemonsSorted: action.payload,
                pokemonDetail : {},
                loading : false
            };
        case "GET_TYPES_POKEMONS":
                return {
            ...state,
            pokemonTypes : action.payload
        };    
        case "GET_DETAIL_POKEMON":

            return {
                ...state,
                pokemonDetail: action.payload,
                loading : false
            };       
        
        default:
            return state;
    }
}
export default rootReducer;