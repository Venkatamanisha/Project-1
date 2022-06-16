import React from "react";
import { NavLink } from "react-router-dom";

import Search from "./Search";


const Product = () => {
  const cartItem = (item) => {
    return (
      <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.image} class="card-img-top" alt={item.name} />
        <div class="card-body text-center">
          <h5 class="card-title">{item.name}</h5>
          <p className="card-text">RS.{item.price}</p>
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">
            BUY NOW
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row ">
          <div className="col-12 text-center">
            <h1>Our Menu</h1>
            <hr/>
            <Search/>
          </div>
        </div>
     </div></div>

    
 
  );
};

export default Product;
