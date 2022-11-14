import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service'

import {BrowserRouter,Routes, Route} from "react-router-dom";



const App=()=> {
  
  return (
    <BrowserRouter className="all">
   
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Service" element={<Service/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
