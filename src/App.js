
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className='contentApp'>
          <Routes path="/">
            <Route path="profile" element={<Profile />}/>
            <Route path="dialogs" element={<Dialogs />}/>
          </Routes>
          
          
        </div>
        
        <Footer />
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
