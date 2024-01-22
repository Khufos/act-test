import { useState } from 'react'
import Cad from './pages/Cad';
import Add from './pages/Add';
import Update from './pages/Update';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './styles.css'

function App() {
  

  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cad />} />
         <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} /> */
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
