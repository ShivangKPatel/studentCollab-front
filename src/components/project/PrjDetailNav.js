import React from "react";
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function PrjDetailNav(props) {
     const [prjList, setData] = useState(null);
     useEffect(() => {
          axios.get("http://localhost:3010/project/getAllProject")
               .then((response) => {
                    setData(response.data.projects);
               })
               .catch((error) => {
                    console.log(error);
               });
     }, []);
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
                         style={{ marginBottom: "4px", marginRight: "8px" }}
                    >
                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
               );
          }
          for (let i = 0; i < 5 - filled; i++) {
               stars.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" style={{ marginBottom: "4px", marginRight: "8px" }}>
                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                    </svg>
               )
          }
          return stars;
     }
     const navigation = useNavigate();
     const handleProjectDetail = (project) => {
          navigation('/projecttile', { state: { isLogedIn: props.isLogedIn, logUserData: props.logUserData, selectedProject: project } });
          window.location.reload();
     }
     return (
          <>
               <div style={{ backgroundColor: "whitesmoke", height: "92.5vh", padding: "20px", paddingLeft: "20px", paddingRight: "30px" }}>
               {prjList && prjList.map((project, index) => (
                    <button style={{ border: 0, width: "100%", alignItems: "start", textAlign: "start", margin: "10px", paddingTop: "10px", paddingBottom: "10px", paddingRight: "10px", paddingLeft: "30px", backgroundColor: "white", borderRadius: "10px" }} onClick={() => handleProjectDetail(project.pID)}>
                         <div className="row">
                              {project.pName}
                         </div>
                         <div className="row" style={{marginTop: "5px"}}>
                              {project.pDef}
                         </div>
                         <div className="row">
                              <div className="col-6 me-auto"></div>
                              <div className="col-6">
                                   <div className='float-end'>
                                        {filledStar(project.pRating)}
                                   </div>
                              </div>
                         </div>
                         <div className="row" style={{ float: "inline-end", paddingRight: "20px" }}>
                              Hosteby - {project.pHost}
                         </div>
                         {/* onClick={() => handleProjectDetail(project.pID)} */}
                    </button>
               ))}
               </div>
          </>
     );
}