import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PP from "../../image/pp.jpeg";
import { Link } from "react-router-dom";

import "./Head.css";

const Head = () => {
  return (
    <div className="head">
      <div className="left">
        <h1 style={{fontWeight : "bolder"}}>Ömer Zemheri</h1>
        <div className="icons">
          <a href="https://www.linkedin.com/in/omerzemheri" target="_blank">
            <LinkedInIcon style={{ fontSize: "3rem" }} />
          </a>
          <a href=" https://github.com/Zemheri25" target="_blank">
            <GitHubIcon style={{ fontSize: "3rem" }} />
          </a>
          <a href="https://twitter.com/omerzemheri14" target="_blank">
            <TwitterIcon style={{fontSize  :"3rem"}}/>
          </a>
        </div>
      </div>

      <div className="right">
        <div>
          <img src={PP} alt="pp" className="img" />
        </div>
        <div className="infotop">
          <h3>Full Stack Developer</h3>
          <h1>Ömer Zemheri</h1>
          <p>
            As a Full Stack Developer and IT enthusiast, I do projects on React
            and JavaScript in accordance with my teammates to produce the best
            output, which gives me great joy!
          </p>
        </div>

        <div className="links">
          <Link to = "/" className="link1">About</Link>
          <Link to = "/projects" className="link1">Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Head;
