import logo from './logo.svg';
import './App.css';
import React from 'react';
// import AppBar  from './Components/Appbar';
import Login from './Components/Login';
import admin from './Components/admin';
import Signup from './Components/Signup';
import Home from './Components/Homepage';
import Navbar from './Components/Navbar';
import BasicModal from './Components/popup';
import StickyFooter from './Components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
 
  return (
    
    <div className="App">
      <header className="App-header">
       <Navbar/>
      </header>
      <div className="App-body">
 
        {/* <Pages/> */}
        
             {/* </div>  
             <div>
              <BasicModal/>
             </div>
             <div>
              <StickyFooter/>
             </div> */}
             <Router>
              <Routes>
                <Route path ='/login' element={<Login />} />
                <Route path ='/signup' element={<Signup />} />
                <Route path ='/home' element={<Home />} />
                <Route path ='/admin' element={<admin />} />
                
              </Routes>
             </Router>
             
             
             
    </div>
    </div>
    
  );
}

export default App;

