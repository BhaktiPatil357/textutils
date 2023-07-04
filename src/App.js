import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {
  return (
      <>
      < Navbar Home="Home" About="About"/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyse"/>
      </div>
     </>
);
}
export default App;
