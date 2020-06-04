import React from 'react';
import { BrowserRouter  as Router } from 'react-router-dom';
import './App.css';


import Nav from './navigation/Nav'
import Content from './Content'

console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Adam Honoré</h1>
        
       
      </header>
      <Router>
        <div>
          <Nav />
          <Content />
        </div>
      </Router>

    </div>
  );
}

export default App;
