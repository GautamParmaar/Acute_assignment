import React from 'react';

import './App.css';
import Data from './components/SaleEntry';
import Drawer1 from './components/Drawer';
import Header from './components/Header';
import Temp from './components/Temp';
import Title from './components/Title';
import Drawer2 from './components/Drawer1';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PurchaseEntry from './components/PurchaseEntry';
import ItemMaster from './components/ItemMaster';
import PartyMaster from './components/PartyMaster';





function App() {
  return (
   <><BrowserRouter>
   <Drawer2/>
   {/* <Header /> */}
   
   <Title/>
   {/* <Drawer1/> */}
   {/* <Temp/> */}
   
   <Routes>
    <Route path='/Sales'  element={<Data/>}/>
    <Route path='/PurchaseEntry'  element={<PurchaseEntry/>}/>
    <Route path='/ItemMaster'  element={<ItemMaster/>}/>
    <Route path='/PartyMaster'  element={<PartyMaster/>
}/>
  

    

    
   
   {/* <Drawer1/> */}
   </Routes>
   
   </BrowserRouter>
   
   </>
  );
}

export default App;
