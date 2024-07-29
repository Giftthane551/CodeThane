import React from 'react';
import list from '../data';
import '../styles/amazon.css';
import Cards from './Cards';

const Amazon = ({handleClick}) => {
  return (
    <>
        <div class='text-front'>
           <h1>Store Books Available</h1>
        </div>
    <section>
        {
            
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
    </>
  )
}

export default Amazon