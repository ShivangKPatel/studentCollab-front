import React from "react";
import Navbar from "../navBar/Navbar";
import FilterPanel from "./FilterPanel";
import ProjectWindow from "./ProjectWindow";
import "./ProjectList.css";
import { useLocation } from "react-router-dom";

export default function ProjectList() {
     const location = useLocation();
     const logFlag = location.state.isLogIn;
     const userData = location.state.logUserData
     return (
          <>
               <Navbar isLogIn={logFlag}/>
               <div className="row">
                    <div class="col-3" style={{
                         borderRight: "2px solid black",
                         height: "92.5vh",
                         padding: "0px"
                    }}>
                         {
                              logFlag == "1" ? <FilterPanel isLogIn={logFlag} logUserData={userData}></FilterPanel> : <FilterPanel isLogIn={logFlag}/>
                         }
                    </div>
                    <div class="col-9" style={{backgroundColor: "white"}}>
                         {
                              logFlag == "1" ? <ProjectWindow isLogIn={logFlag} logUserData={userData}></ProjectWindow> : <ProjectWindow  isLogIn={logFlag}/>
                         }
                         
                    </div>
               </div>
          </>
     )
}