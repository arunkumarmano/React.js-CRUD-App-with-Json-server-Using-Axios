import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Create from './pages/create';
import Update from './pages/update';
import Read from './pages/read';
function App() {
  return (
    <div>
   <BrowserRouter><Routes>
    <Route path='/' element={<Home/>}>  </Route >
    <Route path='/create' element={<Create />}>  </Route >
    <Route path='/update/:id' element={<Update />}>  </Route >
    <Route path='/read/:id' element={<Read />}>  </Route >


          </Routes></BrowserRouter>  
      </div>
  );
}

export default App;
