import React from 'react';
import './Navbar.css';
import { Link, defer, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
    const navigation = useNavigate();
    const location = useLocation();
    let isLogedIn = props.isLogedIn;
    let logUserData = props.logUserData;
    
    if(location.state){
        isLogedIn = location.state.isLogedIn;
        logUserData = location.state.logUserData;
    }
    const toPrj = () => {
        if(isLogedIn == "1"){
            navigation('/project', { state: { isLogedIn: "1", logUserData: logUserData } });
        }else{
            navigation('/project', {state: { isLogedIn: "0" }})
        }
    }
    const logPressed = () => {
        navigation('/home');
    }
    const toDash = () => {
        navigation('/dashboard', { state: { isLogedIn: isLogedIn, logUserData: logUserData }});
    }
    const toAbout = () => {
        navigation('/aboutus', {state: { isLogedIn: isLogedIn, logUserData: logUserData }});
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary"
                id="navTag">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ fontWeight: "600", fontSize: "22px" }}> Student-Collab </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex">
                        <ul className="nav justify-content-end" style={{ marginRight: "00px" }}>
                            <ul className="navbar-nav mb-2 mb-lg-0" style={{ padding: "0px 4px 1px 0px" }}>
                                <li className="nav-item">
                                    {
                                        isLogedIn == "0" ?
                                            // <button className="nav-link active" onClick={toPrj}>home</button>
                                            <Link to="/home" className="nav-link active">Home</Link>
                                            :
                                            <button className="nav-link active" onClick={toDash}>Dashboard</button>
                                    }
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active" onClick={toPrj}>Project</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active" onClick={toAbout}>About us</button>
                                    {/* <a className="nav-link active" href="/aboutus">About us</a> */}
                                </li>
                                <>
                                    {isLogedIn == "0" ?
                                        <li className="nav-item" style={{ backgroundColor: "black", width: "80px", textAlign: "center", marginLeft: "10px" }}>
                                            <a className="nav-link active" href="/login" style={{ color: "white"}}>Login</a>
                                        </li>
                                        :
                                        <li className="nav-item" style={{ backgroundColor: "black", width: "80px", textAlign: "center", marginLeft: "10px" }}>
                                            <button style={{ backgroundColor: "black", color: "white", border: 0, marginTop: "6px" }} onClick={logPressed}>Logout</button>
                                        </li>
                                    }
                                </>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.defaultProps = {
    logUserData: {}
}