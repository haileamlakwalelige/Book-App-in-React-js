import React from 'react';
import {useAppContext} from './context/appContext';

const Favorite=()=>{
    const checkFavorite=(id)=>{
        const boolean=favorite.some(book => book.id === id);
        return boolean;
    }
    const {favorite, addFavorite, removeFavorite} = useAppContext();
    console.log("the favorite is ", favorite)
    return(
        <>
        <div className="favorite">
        {favorite.length > 0 ? favorite.map((book)=>(
            <div key={book.id} className="card">
              <div><h3>{book.title}</h3></div>
             <div><img src={book.image_url} alt="" /></div>
             {checkFavorite(book.id) ? (
                <div><button onClick={()=>removeFavorite(book.id)}>Remove from Favorite</button></div>
             ):(
                <div><button onClick={()=>addFavorite(book)}> ADD to Favorite </button></div>
             )}
            </div>
        )) : <h1>You don't have any favorite books</h1>}
        </div>
        </>
    );
}

export default Favorite;