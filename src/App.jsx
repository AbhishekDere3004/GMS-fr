
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Copyright from './components/Copyright'
import { ForgotPassword } from './pages/ForgotPassword'


function App() {

  return (
    <div  className=' h-[100vh] sm:h-[100vh] w-[100vw] sm:w-[100vw] '>
   
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/funding' element={<F}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Registration/>}/>
      </Routes>
      <Footer/>
      <Copyright/>
    </BrowserRouter>
 
    </div>
  )
}

export default App
