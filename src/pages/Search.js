import React, { useState } from 'react';
import Card from './Card';
import { NavLink } from 'react-router-dom';
const Search = () => {
  const [filter,setFilter]=useState("");
  const SearchText=(event)=>{
    setFilter(event.target.value)
  }
  let datasearch=Card.filter(item=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  })
  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>

      <div className='col-12 mb-5'>
        <div className='mb-3 col-4 mx-auto text-center'>
    
          <input  placeholder="Search here..." type="text" className='form-control' value={filter} onChange={SearchText.bind(this)}/>
        </div>
      </div>

        {datasearch.map((item,index)=>{
          return(
             <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
              
              <div className='card-body'>
              <img src={item.image} className='card-img-top' alt=""/>
            <div class="card-body text-center">
              <h5 class="card-title">{item.name}</h5>
              <p className="card-text">RS.{item.price}</p>
              <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">
                BUY NOW
              </NavLink>
            </div>
          </div>
          </div></div>
          )
        })}

      </div>
      
    </section>
  );
};

export default Search;