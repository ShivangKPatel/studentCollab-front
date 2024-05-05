import React from "react";
import Navbar from "../navBar/Navbar";
import homeImg from "../../assests/home-page-img.jpeg";
import { useNavigate } from "react-router-dom";

export default function Landingpage(props) {
     const navigation = useNavigate();
     const toPrj = () => {
          navigation('/project', { state: { isLogedIn: props.isLogedIn } });
     }

     return (
          <>
               <Navbar isLogedIn={props.isLogedIn} />
               <div className="text-center" style={{ padding: "0px 0px 0px 0px", margin: "20px auto", width: "90%", marginTop: "130px"}}>
                    <div className="row" style={{ marginLeft: "0px"}}>
                         <div className="col-6">
                              <div style={{ marginTop: "130px" }}>
                                   <h1 style={{ fontSize: "50px", fontWeight: "600", overflowY: "hidden" }}>Welcome to Student-Collab</h1>
                                   <p style={{ fontSize: "20px", fontWeight: "400" }}>Collaborate on projects with students from different fields</p>
                                   <button className="btn btn-outline-dark" style={{ marginTop: "10px" }} onClick={toPrj}>Explore projects</button>
                              </div>
                         </div>
                         <div className="col-6">
                              <img src={homeImg} alt="Home page image" height="500" width="600" style={{ borderRadius: "10px" }} />
                         </div>
                    </div>
               </div>
          </>
     )
}

Landingpage.defaultProps = {
     isLogedIn: "0",
};