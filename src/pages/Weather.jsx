import React, { useEffect, useState } from 'react';
import axios from 'axios'




const Weather = (props) => {

    // Your useState definitions here
    let [zipcode, setZipcode] = useState('') // updated every time input is typed in
    let [userZip, setUserZip] = useState('') // userZip is only changed when I submit my form
    let [weather, setWeather] = useState()  // stores the information we get back from the API. Used to display to the user on the page
    
    const handleChange = (event) => {   // updateing the zipcode state
        setZipcode(event.target.value)
        console.log('Your zip code is' + zipcode)
    }

    const handleSubmit = (e) => {
        e.preventDefault()  // prevent page refresh! IMPORTANT!
        setUserZip(zipcode) //update the userZip state that the user wants to use to make the API call
    }

    console.log(process.env.REACT_APP_API_KEY)
    
    useEffect((event) => {  // called every time userZip is submitted
        console.log('getting weather for' + userZip)
        if (userZip) {
            const getWeather = async () => {
                // let results = await axios('http://api.openweathermap.org/data/2.5/weather?zip='+ userZip +',us&appid=b926cd279352cd07d7c38ea5b01e2d00')
                let results = await axios(`http://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${process.env.REACT_APP_API_KEY}`)
                console.log(results.data)
                setWeather(results.data)
              }
              // fetch(API_URL + query)
    // .then(response => response.json())
    // .then(results => {
    //   console.log(results.hits)
    //   setData({hits: results.hits})
    // })
              getWeather()
        }
    }, [userZip]) 

    let weatherInfo = <div><h1>Search Below to find the Weather</h1></div>
    if (weather) {
        weatherInfo =
        <div>
            <h1>Location: {weather.name}</h1>
            <h2>Current Temperature: {((weather.main.temp*1.8)-459.67).toFixed(1)} Fahrenheit</h2>
        </div>
    }
        
    return (
        <div>
            <h2>Weather</h2>
            <div className>
            <form onSubmit={handleSubmit}>
                <div>
                    { weatherInfo }
                </div> 
                <input type="text" placeholder="Enter a ZIP Code" onChange={handleChange} value={zipcode} />
                <input className="submitty" type="submit" value="Get my forecast!" />
            </form>
            </div>
        </div>
    )
}

export default Weather