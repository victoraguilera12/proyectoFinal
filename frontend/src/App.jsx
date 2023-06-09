import { useState } from 'react'
import  Navbar from './components/navbar'
import  Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import productos from './views/tienda'
import Login from './views/login'
import Registrarse from './views/registrarse'
import Context from './context'
import Perfil from './views/perfil'


function App() {
  const [usuario, setUsuario] = useState(null)

  return (
    <>
    <Context.Provider value={{ usuario, setUsuario }} >
     <Navbar/>
    
     <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/productos' Component={productos}/>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='/registrarse' Component={Registrarse}/>
      <Route exact path='/perfil' Component={Perfil}/>
      
     </Routes>
     
     </Context.Provider>
    </>
  )
}
export default App
