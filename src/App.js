
import React from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        
        <HeaderContainer />
        <Navbar />
        <div className="contentApp">
          <Routes path="/">
            <Route path="profile" element={<ProfileContainer  />}/>
            <Route path="profile/:userId" element={<ProfileContainer  />}/>
            
            <Route path="dialogs/*" element={<DialogsContainer  />}/>
            <Route path="users" element={<UsersContainer />}/>
          </Routes>
          
          
        </div>
        
        <Footer />
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
