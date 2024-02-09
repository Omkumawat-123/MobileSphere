import { Link } from 'phosphor-react';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Mobileitem extends Component {
  render() {
    let{name,price,img} = this.props;
    return (
      <div >
        <div className="card" href="/" >
          <img src={img}  className="card-img-top" alt="..." />
          <div className="card-body">
          <span className="badge text-bg-danger">New</span>
            <h5 className="card-name">{name}</h5>
            <p className="card-text">{price}</p>
            <NavLink>
            <button to="/Cart" className="btn btn-primary">Add to Cart</button> 
            </NavLink>
            
          </div>
        </div>
        
      
      </div>
    );
  }
}
