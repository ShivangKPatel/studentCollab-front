import React from "react";
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'


function noToLevel(levelNo) {
     let level = "";
     switch (levelNo) {
          case 1:
               level = "Easy";
               break;
          case 2:
               level = "Medium";
               break;
          case 3:
               level = "Hard";
               break;
          default:
               level = "Not defined";
     }
     return level;
}


export default function PrjDetailWin(props) {
     const location = useLocation();
     const [prjList, setData] = useState(null);
     const [loading, setLoading] = useState(true);
     const [userData, setUserData] = useState({}); // State to store user data
     const logFlag = props.isLogIn;
     const projectID = props.subproject
     const project = props.subproject;
     // alert(logFlag)
     // const logFlag = location.state.isLogIn;
     // const projectID = location.state.subproject;
     useEffect(() => {
          axios.get(`http://localhost:3010/project/getProject?projectId=${projectID}`)
               .then((response) => {
                    setData(response.data.project);
                    setTimeout(() => setLoading(false), 5);
               })
               .catch((error) => {
                    console.log(error);
               });
     }, []);
     if(loading){
          return (
               <div>
                    <div style={{ backgroundColor: "white", height: "86vh", marginLeft: "10px", marginRight: "30px", marginTop: "30px", overflowY: "auto", padding: "10px", paddingLeft: "25px", borderRadius: "10px", paddingTop: "20px", paddingRight: "30px" }}>
                         <center>
                              <div class="spinner-border text-primary" role="status" style={{overflow:"hidden"}}>
                                   <span class="sr-only"></span>
                              </div>
                         </center>
                    </div>
               </div>
          )
     }
     const createDate = new Date(prjList.createDate);
     const formattedDate = createDate.toLocaleDateString('en-IN', {day: 'numeric', year: 'numeric', month: 'long'});
     console.log(prjList)
     const filledStar = (filled) => {
          const stars = [];
          for (let i = 0; i < filled; i++) {
               stars.push(
                    <svg
                         key={i}
                         xmlns="http://www.w3.org/2000/svg"
                         width="14"
                         height="14"
                         fill="currentColor"
                         className="bi bi-star-fill"
                         viewBox="0 0 16 16"
                         style={{ marginBottom: "4px", marginRight: "10px" }}
                    >
                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
               );
          }
          for (let i = 0; i < 5 - filled; i++) {
               stars.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" style={{ marginBottom: "4px", marginRight: "10px" }}>
                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                    </svg>
               )
          }
          return stars;
     }
     return (
          <>
               {
                    <div style={{ backgroundColor: "white", height: "86vh", marginLeft: "10px", marginRight: "30px", marginTop: "30px", overflowY: "auto", padding: "10px", paddingLeft: "25px", borderRadius: "10px", paddingTop: "20px", paddingRight: "30px", boxShadow: "0px 0px 20px grey", position: "relative" }}>
                         <div className="row" style={{ borderBottom: "1px solid black", paddingBottom: "10px", fontSize: "18px", letterSpacing: "1px" }}>
                              <div className='col-10 me-auto'>
                                   {prjList.projectName}
                              </div>
                              <div className='col-2'>
                                   <div className='float-end'>
                                        {filledStar(prjList.rating)}
                                   </div>
                              </div>
                         </div>


                         <div className='row' style={{marginTop: "10px", paddingBottom: "5px",fontSize: "14px", letterSpacing: "1px", borderBottom: "1px solid black" }}>
                              <div className='col-9'>
                                   <p style={{ fontWeight: "600", marginBottom: "10px"}}>Hosted by: {prjList.firstname} {prjList.lastname}</p>
                              </div>
                              <div className="col-3">
                                   <p style={{ fontWeight: "600" }}>Number of required students: {prjList.noOfStuReq}</p>
                              </div>
                              <div className="col-9">
                                   <p style={{ fontWeight: "600" }}>Level: {noToLevel(prjList.projectLevel)} </p>
                              </div>
                              <div className="col-3">
                                   
                                   <p style={{ fontWeight: "600" }}>Hosted on: {formattedDate}</p>
                              </div>
                         </div>
                         

                         <div className='row' style={{ margin: "20px 0px 0px -10px", fontSize: "14px", letterSpacing: "1px" }}>
                              <div className='col-12'>
                                   <div style={{marginBottom: "10px"}}>
                                        <span style={{ fontWeight: "600", marginBottom: "10px"}}>Defination: </span>{prjList.projectDef} <br />
                                   </div>
                                   <span style={{ fontWeight: "600" }}>Description: </span>{prjList.projectDesc} <br />
                              </div>
                         </div>

                         <div style={{position: "absolute", bottom: "0", height: "50px", overflow: "hidden", backgroundColor: "whitesmoke", width: "100%", marginLeft: "-25px", padding: "2px", borderTop: "2px solid grey"}}>
                              <button className="btn btn-primary btn-sm" style={{position: "absolute", right: "10px", marginTop: "6px"}}>Join project</button>
                         </div>
                    </div>
               }
          </>
     );
}