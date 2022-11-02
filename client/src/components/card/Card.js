import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {useEffect} from 'react';
import {Link} from 'react-router-dom';

import './Card.css';

export default function Card({id, attack , name, image, types}) {
   
    return (      
      <Link className="link"to={"/pokemons/"+id}>
        <div className="card" key={id}>
          <h1 className='title'>{name.charAt(0).toUpperCase()+name.slice(1)}</h1> 
          <div className="footerCard">
            <div className="attack">
                <h3>Attack</h3>
                <p>{attack}</p>
            </div>
            <div className="types">
              <h3>Types</h3>
              <ul>
                  {types.map((type, i)=>(
                    <li key={i}>{type}</li>
                    ))}
              </ul>
            </div>
            <div>
              <img className="image" src={image} alt="" />
            </div>
          </div>
        </div> 
      </Link>             
      )
  };