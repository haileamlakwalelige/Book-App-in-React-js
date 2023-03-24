import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Favorite from './components/Favorite'
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/books/:id" element={<BookDetail />} />
      <Route path="/" element={<BookList />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
