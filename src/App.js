
import React, { Suspense, lazy } from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import DialogsContainer from './Components/Dialogs/DialogsContainer';
//import UsersContainer from './Components/Users/UsersContainer';
//import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Home from './Components/HomePage/HomePage';
import Login from './Components/Login/login';

const ProfileContainer = lazy(() => import ('./Components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import ('./Components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import ('./Components/Users/UsersContainer'));

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        
        <HeaderContainer />
        <Navbar />

        <div className="contentApp">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes path="/">
              <Route path="home" element={<Home />}/>
              <Route path="profile" element={<ProfileContainer  />}/>
              <Route path="profile/:userId" element={<ProfileContainer  />}/>
              
              <Route path="dialogs/*" element={<DialogsContainer  />}/>
              <Route path="users" element={<UsersContainer />}/>
              <Route path="login" element={<Login />}/>
            </Routes>
          </Suspense> 
        </div>
        
        <Footer /> 
      </div>
    </BrowserRouter>
    
  );
}

export default App;
