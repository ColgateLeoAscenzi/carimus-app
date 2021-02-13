import React, {CSSProperties} from "react";
// import ReactDOM from 'react-dom';
// import {Link} from 'react-router-dom';

// import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';


const footerWrapperStyle: CSSProperties = {
    backgroundColor: "#78E690",
    width: "100vw",
    height: "75vh",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    paddingTop: "5vw",
    paddingBottom: "5vw",
}

const innerFooterWrapper: CSSProperties = {
    backgroundColor: "#78E690",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    // paddingLeft: "5vw",
    // paddingRight: "5vw",
    // paddingTop: "10vw",
}


const Footer:React.FunctionComponent = () => {
    return(
        <>
        <div style = {footerWrapperStyle}>
            <div style = {innerFooterWrapper}>
                <div style = {{width: "33%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2vw", textAlign: "center"}}>
                <img id = "CarimusFooterLogo" src={process.env.PUBLIC_URL+"/logo-footer.png"} alt="Logo" onClick = {() => {window.location.href = "./../"}} style = {{cursor: "pointer", width: "45%", textAlign: "center" }}/>
                </div>
                <div style = {{width: "33%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2vw", textAlign: "center", borderLeft: "2px solid white"}}>
                    <div style = {{marginTop: "4vh",color: "#160b43", fontFamily: "Montserrat", letterSpacing: "3.3px"}}>TRACK OUR EXPEDITIONS</div>
                    <div style = {{marginTop: "4vh",color: "#160b43", fontFamily: "Montserrat", fontSize: "1em"}}>Get agency news and see the positive impact we have on our clients and our community each month.</div>
                    <form action="mailto:leo.ascenzi@gmail.com" method="post" >
                        <input type = "text" name = "email" placeholder = "Email address *" style = {{marginTop: "4vh",backgroundColor: "#70c996", border: "none", outline: "none", color: "#7a7a7a", paddingTop: "0.5vw", paddingBottom: "0.5vw", paddingLeft: "2vw", paddingRight: "6vw", fontSize: "0.8em", fontFamily:"Montserrat"}} autoComplete = "off"></input><br/>
                        <button type = "submit" style = {{marginTop: "4vh", backgroundImage:"linear-gradient(to right, #d25528, #da1d67)", border: "none", outline: "none", color: "white",paddingTop: "0.5vw", paddingBottom: "0.5vw", paddingLeft: "3vw", paddingRight: "8vw", fontFamily:"Montserrat", fontWeight: "bolder", letterSpacing: "3.3px", fontSize: "0.8em"}}> SUBSCRIBE</button>
                    </form>
                </div>
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
            </div>
            <div style = {{width: "99%", textAlign: "center", marginTop: "2vw", padding: "1vw", color: "#160B43", fontWeight: "bolder"}}>
                2021 Leo Ascenzi | Terms & Conditions | Designed by Leo Ascenzi
            </div>
        </div>
        </>
    );
}

export default Footer;