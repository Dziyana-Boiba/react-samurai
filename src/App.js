
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className='contentApp'>
          <Routes path="/">
            <Route path="profile" element={<Profile store={props.store} />}/>
            <Route path="dialogs/*" element={<DialogsContainer store={props.store} />}/>
          </Routes>
          
          
        </div>
        
        <Footer />
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
