import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../navBar/Navbar";

export default function Dashboard(){
     const navigation = useNavigate();
     const location = useLocation();
     console.log(location.state.logUserData)
     
     return(
          <>
               <Navbar isLogedIn={location.state.isLogedIn} logUserData={location.state.logUserData}></Navbar>

          </>
     )
}