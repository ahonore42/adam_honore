import React from 'react';
import SwagWagon from '../SwagWagon'

const Projects = props => {
    return (
        <div>
            <h1>Projects</h1>
            <div className="project">
                <div className="pSection">
                    <h2>Pokemon Dream</h2>
                    <p>Pokemon Dream is a game built primarily with Phaser3 and JavaScript. It allows users to play as a Bulbasaur to navigate through several maps, built in Tiled Map Editor, collect berries, and attack ghost pokemon with razor leaf. The goal of the game is to reach the end of the final map without being defeated by ghost pokemon.</p>
                    <a href="https://ahonore42.github.io/Pokemon-Dream-Deployed/">Pokemon Dream</a>
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
                    <a href="https://tippedcocktails.herokuapp.com/">Tipped</a>
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
                    <a href="https://github.com/ahhttps://game-launch-client.herokuapp.com/">Game Launch</a>
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
                <div>
                    <h2>SwagWagon</h2>
                    <p>The SwagWagon is a small project I built in React to create a new, dynamic template for React apps. It was built purely in CSS, both as a joke and an exploration of CSS design and animations.</p>
                    <a href="https://github.com/ahonore42/swag-wagon">SwagWagon</a>
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
    )
}

export default Projects