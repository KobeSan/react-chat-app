import React from 'react';
import './App.css';
//import ContactList from './components/ContactList';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Maureen Rodriguez" avatar="https://randomuser.me/api/portraits/women/83.jpg"/>
    </div>
  );
}

export default App;
