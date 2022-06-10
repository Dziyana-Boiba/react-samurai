import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {
      message: "Hello",
      like: 10,
      img: "https://image.shutterstock.com/image-vector/japanese-samurai-soldier-on-illustration-260nw-1436193641.jpg"
  },
  {
      message: "Hi, how are you?",
      like: 15,
      img: "https://image.shutterstock.com/image-vector/illustration-concept-samurai-warrior-260nw-1813360324.jpg"
  },
  {
      message: "Hello my friends",
      like: 110,
      img: "https://img.freepik.com/free-vector/illustration-concept-samurai-warrior_157713-245.jpg"
  },
  {
      message: "What's up bro?",
      like: 1,
      img: "https://static.vecteezy.com/system/resources/previews/005/432/320/non_2x/samurai-warrior-illustration-vector.jpg"
  }
];

let dialogsData = [
  {id: 1, name: "Diana"},
  {id: 2, name: "Di"}, 
  {id: 3, name: "Anna"}, 
  {id: 4, name: "Yuliana"},  

]

let messagesData = [
  {id: 1, message: "hi"},
  {id: 2, message: "How are you?"}, 
  {id: 3, message: "Anna"}, 
  {id: 4, message: "Yuliana"},  

]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
