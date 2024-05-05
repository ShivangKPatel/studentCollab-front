import React, { useState, useEffect } from 'react';
import Navbar from "../../components/navBar/Navbar";
import { Link } from "react-router-dom";
import { BsPersonFill, BsLockFill, BsEnvelopeArrowDownFill, BsEnvelope } from "react-icons/bs";
import welcomeImage from '../../assests/welcomeImage.jpeg';

import "./Register.css";
import axios from 'axios';
import { BiEnvelope } from 'react-icons/bi';


export default function Register(props) {

    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const [showAlert, setShowAlert] = useState(false); // State to control visibility of alert
    
    const sendRequest = async () => {
        
        const form = document.getElementById('registerForm');
        const formData = new URLSearchParams(new FormData(form));
        // const formData = new FormData(form);        
    
        axios.post('http://localhost:3010/user/register',formData)
        
            .then((response)=>{
                console.log(response.data.msg)
                const sampleErrorMessage = response.data.msg;
                setErrorMessage(sampleErrorMessage);
                setShowAlert(true);
                
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
    }
    
        return (
            <>
                <Navbar></Navbar>
                <div className="box-container">
                    <div className="box2">
                        <div className="box-content">
                            {/* First Part (Logo and Welcome Quote) */}
                            <div className="box-part logo">
                                <h2 className="welcome-quote">Be a part of Student-Collab,</h2>
                                <div className="welcome-image-container" style={{ width: '100%', height: 'auto' }}>
                                    <img src={welcomeImage} alt="Welcome Image" className="welcome-image" />
                                </div>
                            </div>
                            {/* Vertical line */}
                            <div className="vertical-line"></div>
                            {/* Second Part (Login Form) */}
                            <div className="box-part login-form">
                                <h2 className="register-heading">Register</h2>
                                <form id="registerForm">
                                    {/* Login form fields */}
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text no-right-radius"><BsPersonFill />
                                                <i className="bi bi-person-fill"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control custom-input" name="username" placeholder="Username" />
                                    </div>
    
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text no-right-radius"><BsEnvelope/>
                                                <i className="bi bi-envelope-fill"></i>
                                            </span>
                                        </div>
                                        <input type="email" className="form-control custom-input" name="email" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                                    </div>
    
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text no-right-radius"><BsLockFill/>
                                                <i className="bi bi-lock-fill"></i>
                                            </span>
                                        </div>
                                        <input type="password" className="form-control custom-input" name="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                                    </div>
                                    <button type="button" className="register-button" onClick={sendRequest}>Register</button>
                                </form>
                                <div className="extra-options">
                                    <p>Already Registered ? <Link to="/login" className="register">Sign-In</Link></p> {/* Add class for styling */}
                                </div>
                                {/* Alert div for displaying error message */}
                                {showAlert && (
                                <div className="alert">
                                    {errorMessage}
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };