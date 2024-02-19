import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, This is Bhargav </h2>
        <div className="prompt">
          <p>An aspiring software developer with a passion for learning and creating.</p>

          
 <a href="https://www.linkedin.com/in/bhargav-reddy-99a514216/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/bhargavreddy982" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Programming</h2>
            <span>
              C/C++, Python.
            </span>
          </li>
          <li className="item">
            <h2> Web Development</h2>
            <span>
              Html, CSS, JavaScript, Nodejs, Mongo DB, Redux, tailwind CSS.
            </span>
          </li>
          <li className="item">
            <h2> Tools/Frameworks</h2>
            <span> Express.js, React, Bootstrap, MATLAB.</span>
          </li>
          <li className="item">
            <h2> ACHEIVEMENTS</h2>
            <span>
              Advanced till the final round in EMIDS-HEALTHCARE HACKATHON 
              <br/>
              Solved 400+ Data Structures and Algorithms in various Coding Platforms
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
