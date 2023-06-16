
import { useState } from 'react'
import  Navbar from './components/navbar'
import  Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import productos from './views/tienda'
import Login from './views/login'
import Registrarse from './views/registrarse'
import Dashboard from './views/Dashboard'
import Marketplace from './views/marketplace'
import MarketProduct from './views/marketProduct'
import Footer from './components/Footer'
import AuthContext from './authContext'


function App() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
    <AuthContext.Provider value={{authenticated,setAuthenticated, user, setUser }} >
     <Navbar/>
    
    <main className="mt-20 px-6 sm:px-12 lg:px-8 xl:px-24">
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/productos' Component={productos}/>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='/registrarse' Component={Registrarse}/>
      <Route exact path='/perfil' Component={Dashboard}/>
      <Route exact path='/marketplace' Component={Marketplace}/>
      <Route path='/marketplace/:productId' Component={MarketProduct}/>
      
     </Routes>
    </main>

     <Footer></Footer>
     
     </AuthContext.Provider>
     
    </>
  )
}
export default App