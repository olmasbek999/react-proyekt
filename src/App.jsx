import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import Katolog from './pages/Katolog'
import Aksiyalar from './pages/Aksiyalar'
import Dokonlar from './pages/Dokonlar'
import Sale from './pages/Sale'

function App() {
  return (
 <>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/catalog' element={<Katolog/>}/>
  <Route path='/aksiyalar' element={<Aksiyalar/>}/>
  <Route path='/dokonlar' element={<Dokonlar/>}/>
  <Route path='/sale' element={<Sale/>}/>
  

 </Routes>
 </>
  )
}

export default App