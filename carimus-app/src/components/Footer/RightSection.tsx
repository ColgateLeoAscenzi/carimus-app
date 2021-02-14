import React, {CSSProperties} from "react";
import "./../../App.css";

// import ReactDOM from 'react-dom';
// import {Link} from 'react-router-dom';

// import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';


const RightSection:React.FunctionComponent = () => {
    return(
        <>
        <div style = {{width: "33%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2vw", textAlign: "center", borderLeft: "2px solid white"}}>
            <span style = {{marginTop: "4vh",color: "#160b43", fontFamily: "Montserrat", letterSpacing: "3.3px", fontWeight: "bolder"}}>RALEIGH</span>
            <span style = {{marginTop: "2vh",color: "#160b43", fontFamily: "Montserrat", fontWeight: "bolder"}}>120 Saint Albans Drive</span>
            <span style = {{marginTop: "0.5vh",color: "#160b43", fontFamily: "Montserrat", fontWeight: "bolder"}}>Raleigh, NC 27609</span>

            <span style = {{marginTop: "4vh",color: "#160b43", fontFamily: "Montserrat", letterSpacing: "3.3px", fontWeight: "bolder"}}>CONTACT</span>
            <span style = {{marginTop: "2vh",color: "#160b43", fontFamily: "Montserrat", fontWeight: "bolder"}}>919.710.5002</span>
            <span style = {{marginTop: "0.5vh",color: "#160b43", fontFamily: "Montserrat", fontWeight: "bolder"}}>General: leo.ascenzi@gmail.com</span>
            <span style = {{marginTop: "0.5vh",color: "#160b43", fontFamily: "Montserrat", fontWeight: "bolder"}}>University: lascenzi@colgate.edu</span>
            <span style = {{marginTop: "0.5vh",color: "#160b43", fontFamily: "Montserrat", fontWeight: "bolder"}}>Company: lascenzi@prometheusgroup.com</span>
        </div>
        </>
    );
}

export default RightSection;