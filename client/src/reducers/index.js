const initialState = {
    pagination: [],
    pokemonCreated: {},
    pokemonsLoaded: [],
    pokemonsSorted: [],
    pokemonDetail: {},
    loading: false
};

function rootReducer (state = initialState, action){
    switch (action.type) {
        case "FILTER_POKEMONS":
            let filteredArray=[]
            let sortedArray=[]
            
           //state.pokemonsSorted = []

            // switch (action.typeP) {
            //     case "all":
            //         filteredArray = state.pokemonsLoaded;
                  
            //         break;
            //     case "":
            //         filteredArray = state.pokemonsLoaded;
                                        
            //         break;
            //     default:
            //         filteredArray = state.pokemonsLoaded.filter(p=>{
            //             p.types.find(t=>t===action.typeP)
            //         })
            //         if(filteredArray.length===0) filteredArray = state.pokemonsLoaded;
            //         break;
            // }

            if(action.typeP!=="all"){

                filteredArray = state.pokemonsLoaded.filter(p=>{
                    return p.types.find(t=>t===action.typeP)
                })
                if(filteredArray.length===0) filteredArray = state.pokemonsLoaded;
            }else{
                filteredArray = state.pokemonsLoaded;
            }

            if(action.filter==="alphabetical" || action.filter===""){
                if(action.order==="ascendant" || action.order===""){
                    sortedArray = filteredArray.sort((a, b)=>{
                        if(a.name>b.name) return 1;
                        if(a.name<b.name) return -1;
                        return 0;
                    })

                }
                else if(action.order==="descendant"){
                    sortedArray = filteredArray.sort((a, b)=>{
                        if(a.name>b.name) return -1;
                        if(a.name<b.name) return 1;
                        return 0;
                    })
                }                
            }
            else if(action.filter==="attack"){
                if(action.order==="ascendant" || action.order===""){
                    sortedArray = filteredArray.sort((a, b)=>a.attack-b.attack)
                }
                else if(action.order==="descendant"){
                    sortedArray = filteredArray.sort((a, b)=>b.attack-a.attack)
                }
                else{
                    sortedArray = filteredArray;
                }
            }
            else{
                sortedArray = filteredArray;
            }

            return {
                ...state,
                pokemonsSorted: sortedArray
            };
        
        case "GET_POKEMONS":
                    return {
                ...state,
                pokemonsLoaded: action.payload,
                pokemonsSorted: action.payload
            };
            
        case "GET_DETAIL_POKEMON":

            return {
                ...state,
                pokemonDetail: action.payload
            };
        case "SHOW_LOADER":

            return {
                ...state,
                loading: true
            };
        case "HIDE_LOADER":

            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
export default rootReducer;