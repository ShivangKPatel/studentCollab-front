import React from "react";
import Navbar from "../navBar/Navbar";
import PrjDetailNav from "./PrjDetailNav"
import PrjDetailWin from "./PrjDetailWin"
import { useLocation } from "react-router-dom";

export default function PrjDetail() {
     const location = useLocation();
     const logFlag = location.state.isLogedIn;
     const userData = location.state.logUserData;
     const subproject = location.state.selectedProject;
     return (
          <>
               <Navbar isLogIn={logFlag} />
               <div className="row">
                    <div class="col-3" style={{
                         borderRight: "2px solid black",
                         height: "92.5vh",
                         padding: "0px"
                    }}>
                         <PrjDetailNav isLogedIn={logFlag} logUserData={userData}> </PrjDetailNav> 
                    </div>
                    <div class="col-9">
                         <PrjDetailWin isLogedIn={logFlag} logUserData={userData} subproject={subproject}> </PrjDetailWin>
                    </div>
               </div>
          </>
     )
}