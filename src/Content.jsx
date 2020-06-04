import React from 'react';
import { Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Weather from './pages/Weather'


const Content = props => {
    return (
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Weather" component={Weather} />
        </div>
    )
}

export default Content