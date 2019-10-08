import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Marshall Walker" avatar="https://randomuser.me/api/portraits/men/24.jpg" online={true} />
      <Contact name="Tracy Perry" avatar="https://randomuser.me/api/portraits/men/49.jpg" online={false} />
      <Contact name="Anita Baker" avatar="https://randomuser.me/api/portraits/women/33.jpg" online={true} />
      <Contact name="Cathy Ramirez" avatar="https://randomuser.me/api/portraits/women/11.jpg" online={true} />
    </div>
  );
}

export default App;
