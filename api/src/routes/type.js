'use strict'

const models = require('../models/Type.js')
const { Op, Pokemon, Type} = require('../db.js');
const express = require('express')
const router = express.Router()
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

let pokemonsType = [];

router.get("/", async (req, res)=>{

    try{
        
        let typesBD = await Type.findAll();

        if(typesBD.length===0){
            
            let types = await fetch("https://pokeapi.co/api/v2/type") 
            .then(response => response.json())
            .then(json=>json.results)             
    
            pokemonsType = types.map((element) => 
                Type.create({
                    name : element.name
                })
            )
            await Promise.all(pokemonsType)
            typesBD = await Type.findAll();
            return res.json(typesBD)
        }
        
        res.json(typesBD)

    }catch(e){
        res.status(404).send(e.message);
    }
})

module.exports = router