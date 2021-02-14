import React, {CSSProperties} from "react";
import "./../../App.css";

// import ReactDOM from 'react-dom';
// import {Link} from 'react-router-dom';

// import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const rightSectionStyle: CSSProperties = {
    width: "33%",
    display: "flex", 
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center", 
    padding: "2vw",
    textAlign: "center",
    borderLeft: "2px solid white"
}

const headerStyle:CSSProperties = {
    marginTop: "4vh",
    color: "#160b43",
    fontFamily: "Montserrat",
    letterSpacing: "3.3px",
    fontWeight: "bolder"
}

const header2Style:CSSProperties  = {
    marginTop: "2vh",
    color: "#160b43",
    fontFamily: "Montserrat",
    fontWeight: "bolder"
}

const itemStyle: CSSProperties = {
    marginTop: "0.5vh",
    color: "#160b43",
    fontFamily: "Montserrat",
    fontWeight: "bolder"
}

const RightSection:React.FunctionComponent = () => {
    return(
        <>
        <div style = {rightSectionStyle}>
            <span style = {headerStyle}>RALEIGH</span>
            <span style = {header2Style}>120 Saint Albans Drive</span>
            <span style = {itemStyle}>Raleigh, NC 27609</span>

            <span style = {headerStyle}>CONTACT</span>
            <span style = {header2Style}>919.710.5002</span>
            <span style = {itemStyle}>General: leo.ascenzi@gmail.com</span>
            <span style = {itemStyle}>University: lascenzi@colgate.edu</span>
            <span style = {itemStyle}>Company: lascenzi@prometheusgroup.com</span>
        </div>
        </>
    );
}

export default RightSection;