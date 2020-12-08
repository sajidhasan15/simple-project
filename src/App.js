import React from 'react';
import './App.css';
import ContactUs from './components/Navbar/ContactUs/ContactUs';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactUs />
    </div>
  );
}

export default App;
