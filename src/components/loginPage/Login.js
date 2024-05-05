import Navbar from "../../components/navBar/Navbar";
import React, { useEffect, useState } from 'react';
import welcomeImage from '../../assests/welcomeImage.jpeg';
import { BsPersonFill, BsLockFill } from "react-icons/bs";
import "../loginPage/Login.css";
import axios from "axios";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function LoginPage() {
     const [errorMessage, setErrorMessage] = useState(""); // State for error message
     const [showAlert, setShowAlert] = useState(false); // State to control visibility of alert
     const navigation = useNavigate();

     const fetchLoginUser = () => {
          const form = document.getElementById('loginForm');
          const formData = new URLSearchParams(new FormData(form));
          axios.post('http://localhost:3010/user/login', formData)
               .then((response) => {
                    if(response.data.userData.verified){
                         navigation('/dashboard', { state: { isLogedIn: "1", logUserData: response.data.userData}});
                    }
                    else{
                         const sampleErrorMessage = response.data.msg;
                         setErrorMessage(sampleErrorMessage);
                         setShowAlert(true);
                    }
               })
               .catch(err => {
                    console.log(err);
               })
     };
     
     return (
          <>
               <Navbar isLogedIn="0"></Navbar>
               <div className="box-container">
                    <div className="box">
                         <div className="box-content">
                              <div className="box-part logo">
                                   <center>
                                        <h2 className="welcome-quote">Welcome back to <br /> Student-Collab</h2>
                                   </center>
                                   <div className="welcome-image-container" style={{ width: '100%', height: 'auto' }}>
                                        <img src={welcomeImage} alt="Welcome Image" className="welcome-image" />
                                   </div>
                              </div>
                              {/* Vertical line */}
                              <div className="vertical-line"></div>
                              {/* Second Part (Login Form) */}
                              <div className="box-part login-form">
                                   <h2>Login</h2>
                                   <form id="loginForm">
                                        {/* Login form fields */}
                                        <div className="input-group mb-3">
                                             <span className="input-group-text"><BsPersonFill /></span>
                                             <input type="text" className="form-control custom-input" name="username" placeholder="Username" required />
                                        </div>
                                        <div className="input-group mb-3">
                                             <span className="input-group-text"><BsLockFill /></span>
                                             <input type="password" className="form-control custom-input" name="password" placeholder="Password" required />
                                        </div>
                                        <button type="button" className="btn btn-primary" onClick={fetchLoginUser} >Login</button>
                                   </form>
                                   <div className="extra-options">
                                        <a href="#" className="forgot-password">Forgot Password?</a>
                                        <p>Not a user? <Link to="/register" className="register">Register</Link></p>
                                   </div>
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
     )
}