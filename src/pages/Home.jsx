import React from 'react';
import Nav from '../navigation/Nav'
import SwagWagon from '../SwagWagon'
import LangIcons from '../pages/LangIcons'
import phoneicon from '../assets/phoneicon.png'
import TitlebarGridList from './TitlebarGridList'
import Footer from './Footer'
var ReactRotatingText = require('react-rotating-text');


const Home = props => {

    return (
        <div>
            <Nav />
            <header className="App-header">
                <div className="myTitle">
                    <h1>Adam Honoré</h1>
                    <h2>Full-Stack Software Developer</h2>

                </div>
                <div className="myFaceBack1">
                    <div className="myFaceBack2">
                        <img className="myFace" src="https://res.cloudinary.com/ahonore42/image/upload/v1587911075/adam1_x3rxny.jpg" alt="Adam Honore"></img>
                    </div>
                </div>
                <div className="introText">

                    <ReactRotatingText pause={2500} typingInterval={20} deletingInterval={10} items={['Hello, I\'m Adam!', 'I\'m a full-stack software developer with a passion for creating scalable code and visually appealing styles.', 'I love working with teams to create applications that bring abstract ideas and powerful solutions to life.','Feel free to take a look at my projects and reach out if you\'d like to work or collaborate with me!']} />
                </div>
            </header>
            <div className="contentPage" id="projects">
                <h1>Projects</h1>
                <div className="myProjects">
                    <div className="project">
                        <div className="pSection">
                            <h2>Pokemon Dream</h2>
                            <p>Pokemon Dream is a game built primarily with Phaser3 and JavaScript. It allows users to play as a Bulbasaur to navigate through several maps, built in Tiled Map Editor, collect berries, and attack ghost pokemon with razor leaf. The goal of the game is to reach the end of the final map without being defeated by ghost pokemon.</p>
                            <a target="#" href="https://ahonore42.github.io/Pokemon-Dream-Deployed/"><p>Pokemon Dream</p></a>
                        </div>
                        <div className="pSection">
                            <div className="projectPic">
                                <img src='https://res.cloudinary.com/ahonore42/image/upload/v1591267625/pokemondream2_hpgjqv.png' alt="Project Pic"/>
                                <img className="pic2" src='https://res.cloudinary.com/ahonore42/image/upload/v1591267630/pokemondream1_arvbyr.png' alt="Project Pic"/>
                            </div>
                        </div>
                        <div className="pSection">
                            <h2>Technologies Implemented</h2>
                            <ul>
                                <li>HTML5</li>
                                <li>JavaScript</li>
                                <li>Phaser3</li>
                                <li>Babel</li>
                                <li>Tiled Map Editor</li>
                                <li>GIMP</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project">
                        <div className="pSection">
                            <h2>Tipped</h2>
                            <p>Tipped is a cocktail resource for bartenders build with node, express, and SQL databases. It allows users to create a profile that is protected with authentication, search cocktails and see what ingredients they require along with preparation instructions, save favorite cocktail recipes, and view other user profiles on the site. </p>
                            <a target="#" href="https://tippedcocktails.herokuapp.com/"><p>Tipped</p></a>
                        </div>
                        <div className="pSection">
                            <div className="projectPic">
                                <img src='https://res.cloudinary.com/ahonore42/image/upload/v1591267644/tipped2_yfeegn.png' alt="Project Pic"/>
                                <img className="pic2" src='https://res.cloudinary.com/ahonore42/image/upload/v1591267645/tipped1_f4e4ju.png' alt="Project Pic"/>
                            </div>
                        </div>
                        <div className="pSection">
                            <h2>Technologies Implemented</h2>
                            <ul>
                                <li>Node Express</li>
                                <li>JavaScript</li>
                                <li>Express EJS Layouts</li>
                                <li>Express Session</li>
                                <li>Materialize</li>
                                <li>Passport</li>
                                <li>Bcrypt JS</li>
                                <li>SQL</li>
                                <li>Cloudinary</li>
                                <li>Sequelize</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project">
                        <div className="pSection">
                            <h2>Game Launch</h2>
                            <p>Game Launch is a social media website for gamers, meant to allow gamers to connect with all relevant gamer tags and content streaming services. It allows users to search through an API library of 50,000+ games and view information about them, save favorite games, view other users, add friends, and play free HTML5 games on the website.  </p>
                            <a target="#" href="https://github.com/ahhttps://game-launch-client.herokuapp.com/"><p>Game Launch</p></a>
                        </div>
                        <div className="pSection">
                            <div className="projectPic">
                                <img src='https://res.cloudinary.com/ahonore42/image/upload/v1591267633/gamelaunch2_foc4id.png' alt="Project Pic"/>
                                <img className="pic2" src='https://res.cloudinary.com/ahonore42/image/upload/v1591267640/gamelaunch1_xylhmz.png' alt="Project Pic"/>
                            </div>
                        </div>
                        <div className="pSection">
                            <h2>Technologies Implemented</h2>
                            <ul>
                                <li>React</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>Material UI</li>
                                <li>JSON Web Token</li>
                                <li>Node Express</li>
                                <li>CORS</li>
                                <li>Bcrypt JS</li>
                                <li>React Router DOM</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project">
                        <div className="pSection">
                            <h2>SwagWagon</h2>
                            <p>The SwagWagon is a small project I built in React to create a new, dynamic template for React apps. It was built purely in CSS, both as a joke and an exploration of CSS design and animations.</p>
                            <a target="#" href="https://github.com/ahonore42/swag-wagon"><p>SwagWagon</p></a>
                        </div>
                        <div className="pSection">
                                <SwagWagon /> 
                        </div>
                        <div className="pSection">
                            <h2>Technologies Implemented</h2>
                            <ul>
                                <li>React</li>
                                <li>CSS</li>
                            </ul>
                        </div>   
                    </div>
                </div>
                <div className="contentPage" id="skills">
                    <div>
                        <h1>Technical Skills</h1>
                        <div className="mySkills">
                            <div>
                            <LangIcons />
                            </div>
                            <div className="icons">
                                <h2>Other Skills and Technologies</h2>
                                <ul>
                                    <li>Axios</li>
                                    <li>AJAX</li>
                                    <li>JSON</li>
                                    <li>User Authentication</li>
                                </ul>
                                <ul>
                                    <li>RESTful Routing</li>
                                    <li>Encryption</li>
                                    <li>SCRUM / Agile</li>
                                    <li>Slack</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="contentPage" id="contact">
                <h1>Contact Me</h1>
                <div>
                    <div className="myContact">
                        <div>
                            <div className="icon2">
                                <img src={phoneicon} alt="phone"></img>
                            </div>
                            <h2>(805)-607-9763</h2>
                        </div>
                        <div>
                            <div  className="icon2">
                                <img src="https://image.flaticon.com/icons/png/512/8/8807.png" alt="emailLink"></img>
                            </div>
                            <h2>a1honore80@gmail.com</h2>
                        </div>
                        <div>
                            <a target="#" href="https://github.com/ahonore42">
                                <div className="icon2" id="github">
                                    <svg viewBox="0 0 128 128">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                                    </svg>
                                </div>
                            </a>
                            <h2>GitHub </h2>
                        </div>
                        <div>
                            <a target="#" href="https://linkedin.com/in/adam-honoré-1082431a6">
                                <div className="icon2">
                                    <svg viewBox="0 0 128 128">
                                        <path id="plain" d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3ZM39.17,107H21.06V48.73H39.17Zm-9-66.21a10.5,10.5,0,1,1,10.49-10.5A10.5,10.5,0,0,1,30.12,40.77ZM107,107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53V48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75Z"></path>
                                    </svg>
                                </div>
                            </a>
                            <h2>LinkedIn </h2>
                        </div>
                        <div>
                            <div className="icon2" id="resume">
                                <a target="#" href="https://res.cloudinary.com/ahonore42/image/upload/v1592787062/AdamHonoreATS_yhwmne.pdf">
                                    <img src="https://cdn.onlinewebfonts.com/svg/img_49403.png" alt="resume"></img>
                                </a>
                            </div>
                            <h2>Resume</h2>
                        </div>
                       
                        

                    </div>
                    
                </div>
            </div>
            <div className="contentPage" id="about">

                <h1>About Me</h1>
                <div className="myAbout">
                    <div className="aboutInfo">
                        <p>Hi, I'm Adam. I'm currently a freelance software engineer with skills in languages and databases such as JavaScript, Python, React, PostgreSQL, and MongoDB. I have a passion for designing websites that not only look nice, but perfom just as well on both the front and back ends. When designing websites, I like to let data structures inform my design first and design as I go. I personally feel that this methodology streamlines the process in building user friendly applications. I'm always inspired by newer and bigger ideas, so I am always learning something that I can implement in current and future projects. For this reason I love to work in teams, where collaboration not only allows for a greater scope, but also creates an environment where knowledge and methodologies are shared - collaborative learning is a top priority for me!</p>
                        <p>When I'm not coding, you can find me in national parks, hiking in what I feel are some of the most sacred and beautiful places on this planet, or seeing live music with friends. I come from a professional background in hospitality and public service. With that prior experience, I am always interested in understanding how I can best turn complete strangers into good friends. As a former bartender, I enjoy experimenting with flavor and creating new craft cocktails to try out on friends and family. On that note, I feel very strongly about building community and lasting friendships, which I feel are some of the most valuable things you can have in life.</p>
                    </div>
                    <div className="gridListContainer">
                        <TitlebarGridList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default Home