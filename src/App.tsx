import React, { useEffect, useState } from 'react';
import { Navbar } from './Components/Navbar';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import { TodosPage } from './Pages/TodosPage';
import { AboutPage } from './Pages/AboutPage';


const  App: React.FunctionComponent=()=> {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Routes>
          <Route path='/' element={<TodosPage/>} />
          <Route path='/about' element={<AboutPage/>} />
      </Routes>      
    </div>
    </BrowserRouter>
  );
}

export default App;
