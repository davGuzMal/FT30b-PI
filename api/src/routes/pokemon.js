'use strict'

const models = require('../models/Pokemon.js')
const express = require('express')
const router = express.Router()
const { Op, Pokemon, Type} = require('../db.js');
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));




//get routes
router.get("/", async (req, res)=>{
    const pokemonName = req.query.name
    let pokemonsData = [];
    try{

        if(pokemonName){
            let pokemon
            let pokemonBD = await Pokemon.findOne({
                where : {name : pokemonName},
                include : Type
            });
            if(pokemonBD){
                pokemon = {
                    id : pokemonBD.id, 
                    image : pokemonBD.image,
                    name : pokemonBD.name,
                    types : pokemonBD.types.map(elem => elem.name),
                    height : pokemonBD.height,
                    weigth : pokemonBD.weight,
                    hp : pokemonBD.hp,
                    attack : pokemonBD.attack,
                    defense : pokemonBD.defense,
                    speed : pokemonBD.speed,    
                }
                res.json(pokemon)
            }
            else{

                let pokemonInfo = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemonName) 
                .then(response => response.json())
                .catch(error => console.log(error + "No existe ningun pokemon con este nombre"))
    
                pokemon = {
                    id : pokemonInfo.id, 
                    image : pokemonInfo.sprites.other.dream_world.front_default,
                    name : pokemonInfo.name,
                    types : pokemonInfo.types.map(elem => elem.type.name),
                    height : pokemonInfo.height,
                    weigth : pokemonInfo.weight,
                    hp : pokemonInfo.stats[0].base_stat,
                    attack : pokemonInfo.stats[1].base_stat,
                    defense : pokemonInfo.stats[2].base_stat,
                    speed : pokemonInfo.stats[5].base_stat,
        
                }
                    
                res.json(pokemon)     
            }
        }
        else {
            let pokemonBD = await Pokemon.findAll({include : Type});
            let pokemonsUrl = await fetch("https://pokeapi.co/api/v2/pokemon?limit=80&offset=0") 
            .then(response => response.json())
            .then(json=>json.results)
    
            pokemonsUrl = pokemonsUrl.map(elem =>elem.url)
            let pokemonsInfo = await Promise.all(pokemonsUrl.map(elem => 
                fetch(elem).then(response=>response.json())
                ));
            
                pokemonsInfo.forEach(element => {
                    pokemonsData.push(
                        {
                            id : element.id,
                            image : element.sprites.other.dream_world.front_default,
                            name : element.name,
                            attack : element.stats[1].base_stat,
                            types : element.types.map(elem => elem.type.name)
                        });
                    });    
            //console.log(pokemonBD)    
            if(pokemonBD.length!==0){
                pokemonBD.forEach(async(element) => {
                    //console.log(element)
                    pokemonsData.push(
                        {
                            id : element.dataValues.id,//.slice(0, (element.dataValues.id.length - 1)),
                            image : element.dataValues.image,                            
                            name : element.name,
                            attack: element.dataValues.attack,
                            types : element.dataValues.types.map(element=>element.name)                           
                        
                    }); 
                    
                })
            }
                    res.json(pokemonsData)        
        }

    }catch(e){
        res.status(404).send("No se encontro un pokemon con el nombre especificado");
    }
})

router.get("/:idPokemon", async (req, res)=>{

    const idPokemon = req.params.idPokemon;
    let pokemonInfo
    let pokemon;
    try{ 
        if(!idPokemon) return res.send('Please specify an Pokemon ID') 
        if(idPokemon.charAt(idPokemon.length-1)==='B'){
            pokemonInfo = await Pokemon.findByPk(idPokemon,
                {include : Type
            });
            pokemon = {
                id : pokemonInfo.id, 
                image : pokemonInfo.image,
                name : pokemonInfo.name,
                types : pokemonInfo.types.map(elem => elem.name),
                height : pokemonInfo.height,
                weigth : pokemonInfo.weight,
                hp : pokemonInfo.hp,
                attack : pokemonInfo.attack,
                defense : pokemonInfo.defense,
                speed : pokemonInfo.speed,    
            }
        }
        else{

            pokemonInfo = await fetch("https://pokeapi.co/api/v2/pokemon/"+idPokemon) 
            .then(response => response.json())      
            pokemon = {
                id : pokemonInfo.id, 
                image : pokemonInfo.sprites.other.dream_world.front_default,
                name : pokemonInfo.name,
                types : pokemonInfo.types.map(elem => elem.type.name),
                height : pokemonInfo.height,
                weigth : pokemonInfo.weight,
                hp : pokemonInfo.stats[0].base_stat,
                attack : pokemonInfo.stats[1].base_stat,
                defense : pokemonInfo.stats[2].base_stat,
                speed : pokemonInfo.stats[5].base_stat,    
            }
        }

            
        res.json(pokemon)        

    }catch(e){
        res.status(404).send(e.message);
    }
})

//post rutes

router.post('/', async(req, res)=>{
    const { id, name, hp, attack, defense, speed, height, weight, types, image} = req.body;

    try{


        if(!id || !name || !types) return res.send('Falta enviar datos obligatorios');
    
        const newPokemon = await Pokemon.create({
            id : `${id}B`,
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            image : "https://www.emp-online.fr/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw3d0bb8f3/images/4/8/6/6/486631a.jpg?sw=1000&sh=800&sm=fit&sfrm=png"
          });
        
        for (let i = 0; i < types.length; i++) {
            await newPokemon.addType( await Type.findOne({
                attributes : ['id'],
                where :{name:types[i]}                
            })
            )            
        }
          // typesPokemon.forEach(async (element)=>{

        // await newPokemon.setTypes( await Type.findOne({
        //         attributes : ['id'],
        //         where :{name:types[0]}                
        //     })
        //     )
        // })
        res.status(201).send("Pokemon "+newPokemon.name+" created successfully");
    }catch(err){
        return res.json(err.errors) 
    }
})


module.exports = router