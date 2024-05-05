import React from "react";
import Navbar from "../navBar/Navbar";
import FilterPanel from "./FilterPanel";
import ProjectWindow from "./ProjectWindow";
import "./ProjectList.css";
import { useLocation } from "react-router-dom";

export default function ProjectList() {
     const location = useLocation();
     const logFlag = location.state.isLogedIn;
     const userData = location.state.logUserData;
     return (
          <>
               <Navbar isLogedIn={logFlag}/>
               <div className="row">
                    <div class="col-3" style={{
                         borderRight: "2px solid black",
                         height: "92.5vh",
                         padding: "0px"
                    }}>
                        <FilterPanel isLogedIn={logFlag} logUserData={userData}></FilterPanel>
                    </div>
                    <div class="col-9" style={{backgroundColor: "white"}}>
                        <ProjectWindow isLogedIn={logFlag} logUserData={userData}></ProjectWindow> 
                    </div>
               </div>
          </>
     )
}