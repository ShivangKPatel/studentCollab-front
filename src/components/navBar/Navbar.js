import React from 'react';
import './Navbar.css';
import { Link, defer, useLocation, useNavigate } from 'react-router-dom';
import Landingpage from '../landPage/Landingpage';

export default function Navbar(props) {
    const navigation = useNavigate();
    const location = useLocation();
    let logFlag = props.isLogIn;
    let userData = props.logUser;
    if(location.state){
        logFlag =  location.state.isLogIn;
        userData = location.state.logUser;
    }
    const toPrj = () => {
        if(logFlag == "1"){
            navigation('/project', { state: { isLogIn: "1", logUserData: userData } });
        }else{
            navigation('/project', {state: {isLogIn: "0"}})
        }
    }
    const logPressed = () => {
        navigation('/home');
    }
    const toDash = () => {
        navigation('/dashboard', { state: { isLogIn: props.isLogIn, logUserData: props.logUser } });
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
                                        logFlag == "0" ?
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
                                    <a className="nav-link active" href="/aboutus">About us</a>
                                </li>
                                <>
                                    {props.isLogIn === "0" ?
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
    logUser: {}
}   