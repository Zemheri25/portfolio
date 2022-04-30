import React from "react";
import "./Contact.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <div style={{ marginTop: "10rem" }}>
      <div className="border3"></div>
      <h1 style={{ color: "#F56539", textAlign: "center" }}>Contact Me</h1>
      <div className="contactmain">
        <div className="contact1">
          <AlternateEmailIcon
            style={{
              backgroundColor: "#F56539",
              borderRadius: "100%",
              width: "3rem",
              height: "3rem",
              marginRight: "2rem",
              padding: "0.2rem",
            }}
          />
          <h3>omerzemheri14@gmail.com</h3>
        </div>

        <div className="contact1">
          <LocalPhoneIcon
            style={{
              backgroundColor: "#F56539",
              borderRadius: "100%",
              width: "3rem",
              height: "3rem",
              marginRight: "2rem",
              padding: "0.2rem",
            }}
          />
          <h3>+90 544 225 05 23</h3>
        </div>

        <div>
          <div className="icons1">
            <a href="https://www.linkedin.com/in/omerzemheri" target="_blank">
              <LinkedInIcon style={{ fontSize: "3rem", marginLeft  :"0rem" }} />
            </a>
            <a href=" https://github.com/Zemheri25" target="_blank">
              <GitHubIcon style={{ fontSize: "3rem" }} />
            </a>
            <a href="https://twitter.com/omerzemheri14" target="_blank">
              <TwitterIcon style={{ fontSize: "3rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
