import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Navbar=()=>{

   return(
    <div className="navbar">
        <h1><Link to="/">Book-List</Link></h1>
        <h4><Link to="/favorite">Your Favorite</Link></h4>
    </div>
   );
}


export default Navbar;