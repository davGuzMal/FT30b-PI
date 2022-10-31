import React, {useState, Component} from 'react';
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom';
import { getPokemons, hideLoader, showLoader, searchPokemonDetail, filterPokemons } from '../../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../navbar/images/pokemonLogo.png'
import Card from '../card/Card'
import './Home.css';
import "../navbar/Navbar.css";
import "../fullpageloader/FullPageLoader.css";

export default function Home (){
    const [localState, setLocalState] = useState({
        namePokemon : "",
        filter : "",
        order : "",
        type : "",
        origin : ""
    });
    let dispatch = useDispatch()
    let pokemons = useSelector(state => state.pokemonsSorted)    
    let pokemonSeeked = useSelector(state => state.pokemonDetail)
    let redirect = useHistory()

    

    function handleSubmit(event){
        event.preventDefault();
        dispatch(searchPokemonDetail(localState.namePokemon.toLowerCase()))
        if(pokemonSeeked.hasOwnProperty("name")){
            redirect.push('/pokemons/'+pokemonSeeked.id)

        }
    }
    function handleChange(event){
        setLocalState({...localState, namePokemon : event.target.value })
    }
    function handleFilter(event){
        
        if(event.target.name==="order") setLocalState({...localState, order : event.target.value})
        // if(event.target.name==="filter") setLocalState({...localState, filter : event.target.value});
        // if(event.target.name==="type") setLocalState({...localState, type : event.target.value});
        // if(event.target.name==="origin") setLocalState({...localState, origin : event.target.value});
        
    }
    
    useEffect(()=>{
        if(pokemons.length===0) dispatch(getPokemons())
        else{
            // dispatch(filterPokemons(localState.filter, localState.order, localState.origin, localState.type))
            // console.log(localState.filter, localState.order, localState.type, localState.origin,"effect")
            dispatch(filterPokemons(localState.order))
            console.log(localState.order,"effect")
        }
        
    }, [localState])
    dispatch(hideLoader())
    
    
    return(
        <>
        <header className="navbar">
            <div>
                <img id="pokeball" src={Logo} width="100" height="50" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/pokemons" >Home</NavLink>                        
                    </li>
                    <li className="list-item">                        
                        <NavLink to="/pokemons/create" >Add pokemon</NavLink>
                    </li>                   
                </ul>
            </nav>            
        </header>

        <div className='search-tools'>
        <h2>{"Pokemon seeker "+localState.namePokemon}</h2>
        <form className="form-container" onSubmit={(event) => handleSubmit(event)}>
          <div>
            <label className="label" htmlFor="title">Search pokemon: </label>
            <input
              type="text"
              id="nombre"
              autoComplete="off"
              value={localState.namePokemon}
              onChange={(event) => handleChange(event)}
            />
          </div>
        </form>
          <button type="submit">BUSCAR</button>
            <label htmlFor="order">Choose order:</label>
            <select id="order" name="order" value={localState.order} onChange={(event)=>handleFilter(event)}>
                <option value="descendant">Descendant</option>            
                <option value="ascendant">Ascendant</option>
            </select>
        </div>
        
        <div>
            {/* <label htmlFor="filter">Choose type of filter:</label>
            <select id="filter" name="filter" value={localState.filter} onChange={(event)=>handleFilter(event)}>
                <option value="alphabetical">Alphabetical</option>
                <option value="attack">Attack</option>            
            </select>
            <label htmlFor="order">Choose type:</label>
            <select id="type" name="type" value={localState.type} onChange={(event)=>handleFilter(event)}>
                <option value="all">All</option>            
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
            <label htmlFor="order">Choose origin:</label>
            <select id="origin" name="origin" value={localState.origin} onChange={(event)=>handleFilter(event)}>                
                <option value="all">All</option>            
                <option value="original">Original</option>
                <option value="created">Created</option>
            </select> */}
        </div>
        <div className='cards-container'>{
        pokemons.loading ? dispatch(showLoader()) : pokemons.map(elem =>
            <Card
            key={elem.id}
            id = {elem.id}
            name = {elem.name}          
            image = {elem.image}
            attack = {elem.attack}
            types = {elem.types}            
            />)
        } 
        </div>
        </>
    )
  }



//   export class Home extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         namePokemon : "",
//         filter : "",
//         order : "",
//         typeP : "",
//         origin : ""
//       };
//     }
//     handleChange(event) {
//       this.setState({...this.state, namePokemon: event.target.value });
//     }
//     handleSubmit(event) {
//       event.preventDefault();
//       this.props.searchPokemonDetail(this.state.namePokemon.toLocaleLowerCase())
      
//     }
//     handleFilter(event){
//         if(event.target.name==="order") this.setState({...this.state, order : event.target.value})
//         if(event.target.name==="filter") this.setState({...this.state, filter : event.target.value});
//         if(event.target.name==="typeP") this.setState({...this.state, typeP : event.target.value});
//         if(event.target.name==="origin") this.setState({...this.state, origin : event.target.value});
//     }
//     componentDidMount(){
//         setTimeout(() => {            
//             this.props.getPokemons()
//         }, 2000);
//     }
//     componentDidUpdate(){
//         setTimeout(() => {            
//             this.props.sortPokemons(this.state.filter,this.state.order, this.state.origin, this.state.typeP)
//         }, 2000);
//     }
  
//     render() {
        
//       const { namePokemon, filter, order, typeP, origin } = this.state;
//       //this.props.sortPokemons(this.state.filter,this.state.order, this.state.origin, this.state.typeP)
//       console.log(filter, order, origin, typeP)
//       return (
//         <>
//         <header className="navbar">
//             <div>
//                 <img id="pokeball" src={Logo} width="100" height="50" alt="" />
//             </div>
//             <nav>
//                 <ul className="list">
//                     <li className="list-item">
//                         <NavLink exact to="/pokemons" >Home</NavLink>                        
//                     </li>
//                     <li className="list-item">                        
//                         <NavLink to="/pokemons/create" >Add pokemon</NavLink>
//                     </li>                   
//                 </ul>
//             </nav>            
//         </header>

//         <div className='search-tools'>
//         <h2>{"Pokemon seeker "+namePokemon}</h2>
//         <form className="form-container" onSubmit={(event) => this.handleSubmit(event)}>
//           <div>
//             <label className="label" htmlFor="title">Search pokemon: </label>
//             <input
//               type="text"
//               id="nombre"
//               autoComplete="off"
//               value={namePokemon}
//               onChange={(event) => this.handleChange(event)}
//             />
//           </div>
//           <button type="submit">BUSCAR</button>
//             <label htmlFor="filter">Choose type of filter:</label>
//             <select id="filter" name="filter" value={filter} onChange={(event)=>this.handleFilter(event)}>
//                 <option value="alphabetical">Alphabetical</option>
//                 <option value="attack">Attack</option>            
//             </select>
//             <label htmlFor="order">Choose order:</label>
//             <select id="order" name="order" value={order} onChange={(event)=>this.handleFilter(event)}>
//                 <option value="ascendant">Ascendant</option>
//                 <option value="descendant">Descendant</option>            
//             </select>
//             <label htmlFor="order">Choose type:</label>
//             <select id="typeP" name="typeP" value={typeP} onChange={(event)=>this.handleFilter(event)}>
//                 <option value="all">All</option>            
//                 <option value="normal">Normal</option>
//                 <option value="fighting">Fighting</option>
//                 <option value="flying">Flying</option>
//                 <option value="poison">Poison</option>
//                 <option value="ground">Ground</option>
//                 <option value="rock">Rock</option>
//                 <option value="bug">Bug</option>
//                 <option value="ghost">Ghost</option>
//                 <option value="steel">Steel</option>
//                 <option value="fire">Fire</option>
//                 <option value="water">Water</option>
//                 <option value="grass">Grass</option>
//                 <option value="electric">Electric</option>
//                 <option value="psychic">Psychic</option>
//                 <option value="ice">Ice</option>
//                 <option value="dragon">Dragon</option>
//                 <option value="dark">Dark</option>
//                 <option value="fairy">Fairy</option>
//                 <option value="unknown">Unknown</option>
//                 <option value="shadow">Shadow</option>
//             </select>
//             <label htmlFor="order">Choose origin:</label>
//             <select id="origin" name="origin" value={origin} onChange={(event)=>this.handleFilter(event)}>                
//                 <option value="all">All</option>            
//                 <option value="original">Original</option>
//                 <option value="created">Created</option>
//             </select>
//         </form>
//         </div>

//         <div className='cards-container'>{
//         this.props.pokemons.loading ? this.props.showLoader() : this.props.pokemons.map(elem =>
//             <Card
//             key={elem.id}
//             id = {elem.id}
//             name = {elem.name}          
//             image = {elem.image}
//             attack = {elem.attack}
//             types = {elem.types}            
//             />)
//         } 
//         </div>
//         </>
//       );
//     }
//   }
//   function mapStateToProps(state) {
//     return {
//       pokemons: state.pokemonsSorted
//     };
//   }
  
//   function mapDispatchToProps(dispatch) {
    
//     return {
//         getPokemons : ()=>dispatch(getPokemons()),
//         sortPokemons: (filter, order, origin, typeP) => dispatch(filterPokemons(filter, order,origin, typeP)),
//         searchPokemonDetail: namePokemon => dispatch(searchPokemonDetail(namePokemon)),
//         showLoader : ()=>dispatch(showLoader()),
//         hideLoader : ()=>dispatch(hideLoader())
//     };
//   }
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Home);