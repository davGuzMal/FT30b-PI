const initialState = {
    page: 1,
    pokemonCreated: {},
    pokemonsLoaded: [],
    pokemonsSorted: [],
    pokemonDetail: {},
    activeFilters : [],
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
            let newState = Object.assign({}, state);
            let sortedArray1=[]
            if(action.payload.order==="asc") sortedArray1 = sortAsc(newState.pokemonsSorted, action.payload.property)
            else if(action.payload.order==="desc") sortedArray1 = sortDesc(newState.pokemonsSorted, action.payload.property)

            let activeFilters = state.activeFilters
            if(action.payload.order){
                let index = activeFilters.indexOf("FILTER_POKEMONS_1")
                if (index===-1){
                    activeFilters.push("FILTER_POKEMONS_1")
                    newState.pokemonsSorted = sortedArray1
                }
            }else{
                let index = activeFilters.indexOf("FILTER_POKEMONS_1")
                activeFilters.splice(index, 1)
                if(activeFilters.length===0){
                    newState.pokemonsSorted = newState.pokemonsLoaded
                }
            }
            
            return newState
        case "FILTER_POKEMONS_2":
            let newState2 = Object.assign({}, state);
            let filteredArray2=[]
            if(action.payload!=="all"){
    
                filteredArray2 = newState2.pokemonsLoaded.filter(p=>{
                    return p.types.find(t=>t===action.payload)
                })
                if(filteredArray2.length===0) filteredArray2 = newState2.pokemonsLoaded;

                let activeFilters = state.activeFilters
                // if(action.payload){
                    let index = activeFilters.indexOf("FILTER_POKEMONS_2")
                    if (index===-1){
                        activeFilters.push("FILTER_POKEMONS_2")
                    }
                    newState2.pokemonsSorted = filteredArray2
                
            }
            else{
                let activeFilters = state.activeFilters
                let index = activeFilters.indexOf("FILTER_POKEMONS_2")
                activeFilters.splice(index, 1)
                if(activeFilters.length===0){
                    newState2.pokemonsSorted = newState2.pokemonsLoaded
                }
                else{
                    newState2.pokemonsSorted = newState2.pokemonsLoaded
                }
            }
            return newState2;
        case "FILTER_POKEMONS_3":
            let filteredArray3=[]
            
            if(action.payload!=="all"){
                if(action.payload==="api"){                    
                    filteredArray3 = state.pokemonsSorted.filter(p => Number.isInteger(p.id))
                }
                else if(action.payload==="bd"){
                    filteredArray3 = state.pokemonsSorted.filter(p => !Number.isInteger(p.id))
                }
            }
            else if(action.payload==="all" || action.payload===""){
                filteredArray3 = state.pokemonsSorted;
            }
            return{
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
                loading : false
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