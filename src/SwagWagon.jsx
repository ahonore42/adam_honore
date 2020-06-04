import React from 'react';
import logo from './assets/wheel.png';
import './Swag.css'

const SwagWagon = props => {
 return (
    <div className="carBody">
        <div className="spoilerTop"></div>
        <div className="spoiler"></div>
        <div className="spoilerSupport"></div>
        <div className="depth"></div>
        <div className="exhaust1"></div>
        <div className="exhaust2"></div>
        <div className="carTop2">
            <div className="carTop"></div>
        </div>
        <div className="carShape"></div>
        <div className="carBottom">
            <div className="lightBeam"></div>
            <div className="headlight"></div>
            <div className="fender1"></div>
            <div className="fender2"></div>
            <img className="fire" src="http://www.clipartbest.com/cliparts/niE/yAR/niEyARbrT.png" alt="flames"></img>
            <div className="heady">
                <img src={logo} className="App-logo" alt="logo" />
                <div></div>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="backlight"></div>
                <div className="underglow"></div>
            </div>
        </div>
    </div>
 )
}

export default SwagWagon