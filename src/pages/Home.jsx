import React from 'react';

const Home = props => {
    return (
        <div>
            <div className="project">
                <img className="myFace" src="https://res.cloudinary.com/ahonore42/image/upload/v1587911075/adam1_x3rxny.jpg" alt="Adam Honore"></img>
                <div className="pSection">
                    <h2>Full Stack Web Developer</h2>
                    <p>Hello, I'm Adam!</p><p> I'm a full-stack web developer with a passion for creating scalable code that has real-world impacts and implementing visually appealing styles. I enjoy working closely with a team to create apps and software from the ground up that bring abstract ideas and powerful solutions to life. Feel free to take a look at some of my projects and don't hesitate to reach out if you'd like to work or collaborate with me! </p>
                </div>
                <div className="pSection">
                    <h2>Contact Me</h2>
                    <p>Phone: (805)-607-9763</p>
                    <p>Email: a1honore80@gmail.com</p>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', textAlign: 'center'}}>
                        <div>
                            <p>GitHub </p><a href="https://github.com/ahonore42"><img src="https://go.weave.works/rs/249-YDT-025/images/github_icon_white.png" alt="github"></img></a>
                        </div>
                        <div>
                            <p>LinkedIn </p><a href="linkedin.com/in/adam-honoré-1082431a6"><img src="https://cdn.freebiesupply.com/logos/large/2x/linkedin-icon-logo-black-and-white.png" alt="github"></img></a>
                        </div>
                    </div>
                    

                </div>
            </div>
            <div>
                <div>
                    <div className="project">
                        <div className="pSection">

                            <h2 style={{margin: '0'}}>Technical Skills</h2>
                            <div style={{  
          backgroundImage: `url(https://maxcdn.icons8.com/Share/icon/nolan/Programming/source_code1600.png)`, backgroundSize: 'auto 100%', backgroundRepeat: 'no-repeat', height: '80%'}}></div>
                        </div>
                        <div className="pSection">
                            <h3>Languages</h3>
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>SASS</li>
                                <li>SQL</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div className="pSection">
                            <h3>Libraries</h3>
                            <ul>
                                <li>HTML5 Canvas</li>
                                <li>Bootstrap</li>
                                <li>Materialize</li>
                                <li>Material UI</li>
                                <li>Bcrypt</li>
                                <li>Passport</li>
                                <li>Axios</li>
                                <li>JSON Web Token</li>
                            </ul>
                        </div>
                        <div className="pSection">
                            <h3>Frameworks</h3>
                            <ul>
                                <li>Node</li>
                                <li>React</li>
                                <li>Express</li>
                            </ul>
                        </div>
                        <div className="pSection">
                            <h3>Databases</h3>
                            <ul>
                                <li>PostgreSQL</li>
                                <li>Sequelize</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                            </ul>
                        </div>
                        <div className="pSection">
                            <h3>Other</h3>
                            <ul>
                                <li>AJAX</li>
                                <li>JSON</li>
                                <li>User Authentication</li>
                                <li>RESTful Routing</li>
                                <li>Encryption</li>
                                <li>SCRUM / Agile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Home