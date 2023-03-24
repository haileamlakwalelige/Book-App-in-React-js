import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
// import {book_detail} from '../../Api/api'
import axios from 'axios';



const BookDetail =()=>{
    const [book, setBook]= useState({});
    const book_detail ="https://example-data.draftbit.com/books/";


     const {id} =useParams();

     useEffect(()=>{
        axios.get(`${book_detail}/${id}`)
        .then(res=>{
            setBook(res.data);
        }).catch(err => console.log(err))
     },[id])
    return(
        <div className="book-detail">
            <div className="book-image">
               <h2>{book?.title}</h2>
                <img src={book?.image_url} alt="" />
            </div>
            <div className="book-description">
                <h2 className="h2">Description</h2>
                <p>{book?.description}</p>
                <h2 className="h3">Authors</h2>
                <p>{book?.authors}</p>
                <h2 className="h3">Genres</h2>
                <p>{book?.genres}</p>
            </div>
        </div>
    );
}

export default BookDetail;