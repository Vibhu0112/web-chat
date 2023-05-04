import { useState } from 'react';
import {BrowserRouter, Routes} from "react-router-dom"
import './App.css';
import Hello from './components/hello';
import Login from './components/login/login';

function App() {
  const [isLoggedIn,setIsLoggedIn] =useState("");
  return (
    <div >
      <>
      {/* <BrowserRouter>
       <Routes > */}
      <div className="App">
        {isLoggedIn ?
         <Hello/>:
         <Login />
        }
        </div>
        {/* </Routes>
        </BrowserRouter> */}
      </>
    </div>
  );
}

export default App;
