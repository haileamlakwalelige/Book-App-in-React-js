import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {url} from '../Api/api';
import "../App.css";
import {useAppContext} from './context/appContext';
import {useNavigate} from 'react-router-dom';

const BookList =()=>{
    const [books, setBooks]=useState([]);

    const navigate=useNavigate();
    const checkFavorite=(id)=>{
        const boolean=favorite.some(book => book.id === id);
        return boolean;
    }
    const {favorite, addFavorite, removeFavorite} = useAppContext();
    console.log("the favorite is ", favorite)
    useEffect(()=>{
        axios.get(url)
        .then(res => { console.log(res.data);
        setBooks(res.data);
    })
        .catch(err => console.log(err))
    },[]);
    return(
        <>
        <div className="books">
        {books.map((book)=>(
            <div key={book.id} className="card">
              <div><h3>{book.title}</h3></div>
             <div><img src={book.image_url} alt="" onClick={()=>navigate(`/books/${book.id}`)}/></div>
             {checkFavorite(book.id) ? (
                <div><button onClick={()=>removeFavorite(book.id)}>Remove from Favorite</button></div>
             ):(
                <div><button onClick={()=>addFavorite(book)}> ADD to Favorite </button></div>
             )}
            </div>
        ))}
        </div>
        </>
    );
}

export default BookList;