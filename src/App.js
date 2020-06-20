import React from 'react';
import { BrowserRouter  as Router } from 'react-router-dom';
import './App.css';
import 'fontsource-roboto';


import Content from './Content'

console.log(process.env.REACT_APP_API_KEY)

function App() {
  return (
    <div className="App">
      
      <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
      <Router>
        <div>
          
          <Content />
        </div>
      </Router>

    </div>
  );
}

export default App;
