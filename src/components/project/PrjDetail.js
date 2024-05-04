import React from "react";
import Navbar from "../navBar/Navbar";
import PrjDetailNav from "./PrjDetailNav"
import PrjDetailWin from "./PrjDetailWin"
import { useLocation } from "react-router-dom";

export default function PrjDetail() {
     const location = useLocation();
     const logFlag = location.state.isLogIn;
     const userData = location.state.logUserData
     const subproject = location.state.project
     return (
          <>
               <Navbar isLogIn={logFlag} />
               <div className="row">
                    <div class="col-3" style={{
                         borderRight: "2px solid black",
                         height: "92.5vh",
                         padding: "0px"
                    }}>
                         {
                              logFlag == "1" ? <PrjDetailNav isLogIn={logFlag} logUserData={userData}> </PrjDetailNav> : <PrjDetailNav isLogIn={logFlag} />
                         }
                    </div>
                    <div class="col-9">
                         {
                              logFlag == "1" ? <PrjDetailWin isLogIn={logFlag} logUserData={userData} subproject={subproject}> </PrjDetailWin> : <PrjDetailWin isLogIn={logFlag} subproject={subproject} />
                         }
                    </div>
               </div>
          </>
     )
}