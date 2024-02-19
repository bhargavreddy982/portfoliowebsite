import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, This is Bhargav </h2>
        <div className="prompt">
          <p>An aspiring software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
         
         
        <GitHubIcon />
<a href="https://github.com/bhargavreddy982" target="_blank" rel="noopener noreferrer">
  <img src="github_icon_url" alt="GitHub" />
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
            <span> Advanced till final round in EMIDS-HEALTHCARE HACKATHON 
              <br/>
                 Solved 400+ Data Structures and Algorithms in various Coding Platform</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
