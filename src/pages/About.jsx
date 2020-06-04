import React from 'react';

const About = props => {
    return (
        <div>
            <h2>About Me</h2>
            <div className="aboutInfo">
                <p>Hi, I'm Adam. I'm currently a freelance software engineer with skills in languages and databases such as JavaScript, Python, React, PostgreSQL, and MongoDB. I have a passion for designing websites that not only look nice, but perfom just as well on both the front and back ends. When designing websites, I like to let data structures inform my design first and design as I go. I personally feel that this methodology streamlines the process in building user friendly applications. I'm always inspired by newer and bigger ideas, so I am always learning something that I can implement in current and future projects. For this reason I love to work in teams, where collaboration not only allows for a greater scope, but also creates an environment where knowledge and methodologies are shared - collaborative learning is a top priority for me!</p>
                <img src="https://res.cloudinary.com/ahonore42/image/upload/v1591283381/yellowaster_cpmnms.jpg" alt="Yellow Aster Butte"></img>
                <p style={{textAlign: 'center'}}>Yellow Aster Butte, North Cascades NP</p>
                <p>When I'm not coding, you can find me in national parks, hiking in what I feel are some of the most sacred and beautiful places on this planet, or seeing live music with friends. I come from a professional background in hospitality and public service. With that prior experience, I am always interested in understanding how I can best turn complete strangers into good friends. As a former bartender, I enjoy experimenting with flavor and creating new craft cocktails to try out on friends and family. On that note, I feel very strongly about building community and lasting friendships, which I feel are some of the most valuable things you can have in life.</p>
                <p>Thanks for taking a look at my website!</p>
                <p>Take a look at <a href="https://res.cloudinary.com/ahonore42/image/upload/v1591281353/adamHonoreResume_yueoap.pdf">My Resume</a> if you feel so inclined.</p>


            </div>
        </div>
    )
}

export default About