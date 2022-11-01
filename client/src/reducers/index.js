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
        case "FILTER_POKEMONS_1":
            let filteredArray1=[]
            if(action.payload.order1==="alphabetical" || action.payload.order1===""){
                    
                if(action.payload.order2==="ascendant" || action.payload.order2===""){
                    filteredArray1 = state.pokemonsSorted.sort((a, b)=>{
                        if(a.name>b.name) return 1;
                        if(a.name<b.name) return -1;
                        return 0;
                    })

                }
                else if(action.payload.order2==="descendant"){
                    filteredArray1 = state.pokemonsSorted.sort((a, b)=>{
                        if(a.name>b.name) return -1;
                        if(a.name<b.name) return 1;
                        return 0;
                    })
                }                
            }
            else if(action.payload.order1==="attack"){
                
                if(action.payload.order2==="ascendant" || action.payload.order2===""){
                    filteredArray1 = state.pokemonsSorted.sort((a, b)=>a.attack-b.attack)
                }
                else if(action.payload.order2==="descendant"){
                    filteredArray1 = state.pokemonsSorted.sort((a, b)=>b.attack-a.attack)
                }
                else{
                    filteredArray1 = state.pokemonsSorted
                }
            }
            else{
                filteredArray1 = state.pokemonsSorted
            }
            return{
                ...state,
                sortedArray : filteredArray1
            }
        case "FILTER_POKEMONS_2":
            let filteredArray2=[]
            if(action.payload!=="all"){
    
                filteredArray2 = state.pokemonsLoaded.filter(p=>{
                    return p.types.find(t=>t===action.payload)
                })
                if(filteredArray2.length===0) filteredArray2 = state.pokemonsLoaded;
            }else{
                filteredArray2 = state.pokemonsLoaded;
            }
            return{
                ...state,
                pokemonsSorted : filteredArray2
            }
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
            // case "FILTER_POKEMONS": 
            // let filteredArray=[] 
            // let sortedArray=[] 
            // let originArray=[]
            //     //Filtra por tipo
            //     if(action.payload.typeP!=="all"){
    
            //         filteredArray = state.pokemonsLoaded.filter(p=>{
            //             return p.types.find(t=>t===action.payload.typeP)
            //         })
            //         if(filteredArray.length===0) filteredArray = state.pokemonsLoaded;
            //     }else{
            //         filteredArray = state.pokemonsLoaded;
            //     }
    
            //     //Filtra por pokemons de API o BD
            //     if(action.payload.origin!=="all"){
            //         if(action.payload.origin==="api"){                    
            //             originArray = filteredArray.filter(p => Number.isInteger(p.id))
            //         }
            //         else if(action.payload.origin==="bd"){
            //             originArray = filteredArray.filter(p => !Number.isInteger(p.id))
            //         }
            //     }
            //     else if(action.payload.origin==="all" || action.payload.origin===""){
            //         originArray = filteredArray;
            //     }            
                
            //     //Filtra por nombre o ataque en orden asc o desc
            //     if(action.payload.filter==="alphabetical" || action.payload.filter===""){
                    
            //         if(action.payload.order==="ascendant" || action.payload.order===""){
            //             sortedArray = originArray.sort((a, b)=>{
            //                 if(a.name>b.name) return 1;
            //                 if(a.name<b.name) return -1;
            //                 return 0;
            //             })
    
            //         }
            //         else if(action.payload.order==="descendant"){
            //             sortedArray = originArray.sort((a, b)=>{
            //                 if(a.name>b.name) return -1;
            //                 if(a.name<b.name) return 1;
            //                 return 0;
            //             })
            //         }                
            //     }
            //     else if(action.payload.filter==="attack"){
                    
            //         if(action.payload.order==="ascendant" || action.payload.order===""){
            //             sortedArray = originArray.sort((a, b)=>a.attack-b.attack)
            //         }
            //         else if(action.payload.order==="descendant"){
            //             sortedArray = originArray.sort((a, b)=>b.attack-a.attack)
            //         }
            //         else{
            //             sortedArray = originArray;
            //         }
            //     }
            //     else{
            //         sortedArray = originArray;
            //     }
    
    
                
    
            //     return {
            //         ...state,
            //         pokemonsSorted: sortedArray
            //     };
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