import React, {CSSProperties} from "react";
import "./../../App.css";

// import ReactDOM from 'react-dom';
// import {Link} from 'react-router-dom';

// import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const middleSectionStyle: CSSProperties = {
    width: "33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2vw",
    textAlign: "center",
    borderLeft: "2px solid white",
}

const headerWide: CSSProperties = {
    marginTop: "4vh",
    color: "#160b43",
    fontFamily: "Montserrat",
    letterSpacing: "3.3px",
    fontWeight: "bolder",
}

const headerCompact: CSSProperties = {
    marginTop: "4vh",
    color: "#160b43",
    fontFamily: "Montserrat",
    fontSize: "1em",
    fontWeight: "bolder", 
}

const emailStyle: CSSProperties = {
    marginTop: "4vh",
    backgroundColor: "#70c996",
    border: "none",
    outline: "none",
    color: "#7a7a7a",
    paddingTop: "0.5vw",
    paddingBottom: "0.5vw",
    paddingLeft: "2vw",
    paddingRight: "6vw",
    fontSize: "0.8em",
    fontFamily:"Montserrat",
    fontWeight: "bolder", 
}

const buttonStyle: CSSProperties = {
    marginTop: "4vh",
    backgroundImage:"linear-gradient(to right, #d25528, #da1d67)",
    border: "none",
    outline: "none", 
    color: "white",
    paddingTop: "0.5vw", 
    paddingBottom: "0.5vw", 
    paddingLeft: "3vw", 
    paddingRight: "8vw", 
    fontFamily:"Montserrat", 
    fontWeight: "bolder", 
    letterSpacing: "3.3px", 
    fontSize: "0.8em"
}


const MiddleSection:React.FunctionComponent = () => {
    return(
        <>
        <div style = {middleSectionStyle}>
                    <div style = {headerWide}>TRACK OUR EXPEDITIONS</div>
                    <div style = {headerCompact}>Get agency news and see the positive impact we have on our clients and our community each month.</div>
                    <form action="mailto:leo.ascenzi@gmail.com" method="post" >
                        <input type = "text" name = "email" placeholder = "Email address *" style = {emailStyle} autoComplete = "off"></input><br/>
                        <button type = "submit" style = {buttonStyle}> SUBSCRIBE</button>
                    </form>
                </div>
        </>
    );
}

export default MiddleSection;