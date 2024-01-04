import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import MyRouter from './router';

function App() {
  return (
    <div>
     <Navbar/>

     <MyRouter/>
    </div>
  );
}

export default App;
