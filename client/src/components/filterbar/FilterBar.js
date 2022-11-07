import React from 'react';
import Filter1 from  '../filter1/Filter1.js'
import Filter2 from  '../filter2/Filter2.js'
import Filter3 from  '../filter3/Filter3.js'
import './FilterBar.css'

export default function FilterBar (){
  
    return(
        <div className='filter-tools'>             
            <div>
            <Filter1/>
            </div>
            <div>
            <Filter2/>
            </div>
            <div>
            <Filter3/>
            </div>
        </div>
    )
}