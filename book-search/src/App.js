import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import BookDetail from './components/BookDetail';



function App() {
  return (

  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/detail/:book_id_/:book_id__' element={<BookDetail />}/>
            
          
        </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;