import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FilterPanel.css";
import addPrj from "./CreateProject";
import { useNavigate } from "react-router-dom";

export default function FilterPanel(props) {
     console.log(props.isLogIn)
     const navigation = useNavigate();
     const [data, setData] = useState(null);
     useEffect(() => {
          axios.get("http://localhost:3010/user/getAllDepartments")
               .then((response) => {
                    setData(response.data.dept);
               })
               .catch((error) => {
                    console.log(error);
               });
     }, []);
     const [checkedDept, setPrjList] = useState(null);
     const deptChange = (event) => {
          const { name, checked } = event.target;
          if (checked) {
               setPrjList({ ...checkedDept, [name]: true });
          } else {
               setPrjList({ ...checkedDept, [name]: false });
          }
     };
     console.log(checkedDept)
     const [checkedLevel, setLevelList] = useState(null);
     const levelChange = (event) => {
          const { name, checked } = event.target;
          if (checked) {
               setLevelList({ ...checkedLevel, [name]: true });
          } else {
               setLevelList({ ...checkedLevel, [name]: false });
          }
     };
     console.log(checkedLevel)
     const [checkedRating, setRatingList] = useState(null);
     const ratingChange = (event) => {
          const { name, checked } = event.target;
          if (checked) {
               setRatingList({ ...checkedRating, [name]: true });
          } else {
               setRatingList({ ...checkedRating, [name]: false });
          }
     };
     console.log(checkedRating)

     const showDept = () => {
          var deptField = document.getElementById("deptField");
          if (deptField.style.display === "none") {
               deptField.style.display = "block";
          } else {
               deptField.style.display = "none";
          }
     }
     const showPrjLevel = () => {
          var levelField = document.getElementById("prjLevelField");
          if (levelField.style.display === "none") {
               levelField.style.display = "block";
          } else {
               levelField.style.display = "none";
          }
     }

     const showPrjRating = () => {
          var levelField = document.getElementById("ratingField");
          if (levelField.style.display === "none") {
               levelField.style.display = "block";
          } else {
               levelField.style.display = "none";
          }
     }

     const showDurFiled = () => {
          var levelField = document.getElementById("prjDurField");
          if (levelField.style.display === "none") {
               levelField.style.display = "block";
          } else {
               levelField.style.display = "none";
          }
     }

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

     const addPrj = () => {
          console.log(props.isLogIn)
          if (props.isLogIn == 0) {
               alert("Please log in to add project");
          } else {
               navigation('/addproject', { state: { isLogIn: props.isLogIn } });
          }
     }
     return (
          <>
               <div className="flex-column" style={{ paddingTop: "5px", paddingLeft: "30px", paddingRight: "30px", overflowY: "auto", maxHeight: "85vh" }}>
                    <div className="row" style={{
                         marginTop: "10px",
                         marginBottom: "10px"
                    }}>
                         <div className="col-7" style={{
                              paddingTop: "5px",
                              fontSize: "1.125rem"
                         }}>
                              <span style={{ color: "green", fontWeight: "600" }}>15</span> projects matched
                         </div>
                         <div className="col-5">
                              <button type="button" className="btn" style={{ color: "blue", fontSize: "16px", marginLeft: "20px" }}>Clear filter</button>
                         </div>
                    </div>
                    <div className="row" style={{
                         marginTop: "20px",
                         paddingLeft: "0px",
                         fontSize: "1.125rem",
                         marginBottom: "7px",
                    }}>
                         <div className="row" style={{
                              marginLeft: "4px",
                              fontSize: "1.125rem",
                              marginBottom: "7px"
                         }}>
                              <ul className="navbar-nav" style={{ paddingLeft: "0px", width: "100%" }}>
                                   <li class="nav-item dropdown">
                                        <button style={{ width: "100%", justifyItems: "flex-start", padding: "10px 0px 15px 0px", fontSize: "16px", letterSpacing: "1px", }} onClick={showDept} className="btn myBtn">
                                             Department <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" style={{ marginBottom: "1px" }}> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /> </svg>
                                        </button>
                                   </li>
                              </ul>
                         </div>
                         <div className="row" id="deptField" style={{
                              paddingLeft: "40px",
                              fontSize: "1.125rem",
                              display: "none",
                         }}>
                              {data && data.map((department, index) => (
                                   department.DepartmentID === 3 ? null :
                                        <div className="form-check fill-Fields" style={{ marginLeft: "2px" }}>
                                             <input className="form-check-input" type="checkbox" value={department.DepartmentID} id={index} name={department.DepartmentID} onChange={deptChange} />
                                             <label className="form-check-label" for={index}>
                                                  {department.name}
                                             </label>
                                        </div>

                              ))}
                         </div>
                    </div>
                    <div className="row" style={{
                         paddingLeft: "0px",
                         fontSize: "1.125rem",
                         marginBottom: "7px",
                    }}>
                         <div className="row" style={{
                              fontSize: "1.125rem",
                              marginBottom: "7px",
                              marginLeft: "4px"
                         }}>
                              <ul className="navbar-nav" style={{ paddingLeft: "0px", width: "100%" }}>
                                   <li class="nav-item dropdown">
                                        <button style={{ width: "100%", justifyItems: "flex-start", padding: "10px 0px 15px 0px", fontSize: "16px", letterSpacing: "1px", }} onClick={showPrjLevel} className="btn myBtn">
                                             Project level <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" style={{ marginBottom: "1px" }}> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /> </svg>
                                        </button>
                                   </li>
                              </ul>
                         </div>
                         <div className="row" id="prjLevelField" style={{
                              paddingLeft: "40px",
                              fontSize: "1.125rem",
                              display: "none"
                         }}>
                              <div className="form-check fill-Fields" >
                                   <input className="form-check-input" type="checkbox" value="0" id="level0" />
                                   <label className="form-check-label" for="level0">
                                        Easy
                                   </label>
                              </div>
                              <div className="form-check fill-Fields"  >
                                   <input className="form-check-input" type="checkbox" value="1" id="level1" />
                                   <label className="form-check-label" for="level1">
                                        Medium
                                   </label>
                              </div>
                              <div className="form-check fill-Fields">
                                   <input className="form-check-input" type="checkbox" value="2" id="level2" />
                                   <label className="form-check-label" for="level2">
                                        Hard
                                   </label>
                              </div>
                         </div>
                    </div>
                    <div className="row" style={{
                         paddingLeft: "0px",
                         fontSize: "1.125rem",
                         marginBottom: "7px",
                    }}>
                         <div className="row" style={{
                              fontSize: "1.125rem",
                              marginBottom: "7px",
                              marginLeft: "4px"
                         }}>
                              <ul className="navbar-nav" style={{ paddingLeft: "0px", width: "100%" }}>
                                   <li class="nav-item dropdown">
                                        <button style={{ width: "100%", justifyItems: "flex-start", padding: "10px 0px 15px 0px", fontSize: "16px", letterSpacing: "1px", }} onClick={showPrjRating} className="btn myBtn">
                                             Project rating<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" style={{ marginBottom: "1px" }}> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /> </svg>
                                        </button>
                                   </li>
                              </ul>
                         </div>
                         <div className="row" id="ratingField" style={{
                              paddingLeft: "40px",
                              fontSize: "1.125rem",
                              display: "none"
                         }}>
                              <div className="form-check fill-Fields" >
                                   <input className="form-check-input" type="checkbox" value="0" id="rating0" />
                                   <label className="form-check-label" for="rating0">
                                        {filledStar(5)}
                                   </label>
                              </div>
                              <div className="form-check fill-Fields"  >
                                   <input className="form-check-input" type="checkbox" value="0" id="rating1" />
                                   <label className="form-check-label" for="rating1">
                                        {filledStar(4)}
                                   </label>
                              </div>
                              <div className="form-check fill-Fields">
                                   <input className="form-check-input" type="checkbox" value="1" id="rating2" />
                                   <label className="form-check-label" for="rating2">
                                        {filledStar(3)}
                                   </label>
                              </div>
                              <div className="form-check fill-Fields">
                                   <input className="form-check-input" type="checkbox" value="2" id="rating3" />
                                   <label className="form-check-label" for="rating3">
                                        {filledStar(2)}
                                   </label>
                              </div>
                              <div className="form-check fill-Fields">
                                   <input className="form-check-input" type="checkbox" value="3" id="rating4" />
                                   <label className="form-check-label" for="rating4">
                                        {filledStar(1)}
                                   </label>
                              </div>
                              <div className="form-check fill-Fields">
                                   <input className="form-check-input" type="checkbox" value="4" id="rating5" />
                                   <label className="form-check-label" for="rating5">
                                        {filledStar(0)}
                                   </label>
                              </div>
                         </div>
                    </div>
                    <div className="row" style={{
                         paddingLeft: "0px",
                         fontSize: "1.125rem",
                         marginBottom: "7px",
                    }}>
                         <div className="row" style={{
                              fontSize: "1.125rem",
                              marginBottom: "7px",
                              marginLeft: "4px"
                         }}>
                              <ul className="navbar-nav" style={{ paddingLeft: "0px", width: "100%" }}>
                                   <li class="nav-item dropdown">
                                        <button style={{ width: "100%", justifyItems: "flex-start", padding: "10px 0px 15px 0px", fontSize: "16px", letterSpacing: "1px", }} onClick={showDurFiled} className="btn myBtn">
                                             Time require to complete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" style={{ marginBottom: "1px" }}> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /> </svg>
                                        </button>
                                   </li>
                              </ul>
                         </div>
                         <div className="row" id="prjDurField" style={{
                              paddingLeft: "40px",
                              fontSize: "1.125rem",
                              display: "none"
                         }}>
                              <div className="form-check fill-Fields" >
                                   <input className="form-check-input" type="checkbox" value="0" id="Dur0" />
                                   <label className="form-check-label" for="Dur0">
                                        less than 1 month
                                   </label>
                              </div>
                              <div className="form-check fill-Fields"  >
                                   <input className="form-check-input" type="checkbox" value="1" id="Dur1" />
                                   <label className="form-check-label" for="Dur1">
                                        1-3 months
                                   </label>
                              </div>
                              <div className="form-check fill-Fields">
                                   <input className="form-check-input" type="checkbox" value="2" id="Dur2" />
                                   <label className="form-check-label" for="Dur2">
                                        3-6 months
                                   </label>
                              </div>
                              <div className="form-check fill-Fields">
                                   <input className="form-check-input" type="checkbox" value="3" id="Dur3" />
                                   <label className="form-check-label" for="Dur3">
                                        6-12 months
                                   </label>
                              </div>
                              <div className="form-check fill-Fields">
                                   <input className="form-check-input" type="checkbox" value="4" id="Dur4" />
                                   <label className="form-check-label" for="Dur4">
                                        more than 1 year
                                   </label>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="row" style={{ position: "fixed", bottom: 0, left: 0, borderRight: "1px solid black" }}>
                    <button style={{ marginLeft: "10px", padding: "20px 10px 20px 10px", width: "379.6px", backgroundColor: "white", border: "1px solid black", fontSize: "16px", fontWeight: "600", color: "blue" }} id="addPrjBtn" onClick={addPrj}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" style={{ marginBottom: "5px", marginRight: "10px" }}>
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                         </svg>Add project
                         {/* {
                              props.isLogin == 0 ?  
                              <a href="/addproject" className="nav-link disable" style={{ textDecoration: "none", color: "blue" }}>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" style={{ marginBottom: "5px", marginRight: "10px" }}>
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                   </svg>Add project
                              </a> : <a href="/addproject" style={{ textDecoration: "none", color: "blue" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" style={{ marginBottom: "5px", marginRight: "10px" }}>
                                   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                   <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                              </svg>Add project
                         </a>
                         } */}
                         {/* <a href="/addproject" style={{ textDecoration: "none", color: "blue" }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" style={{ marginBottom: "5px", marginRight: "10px" }}>
                                   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                   <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                              </svg>Add project
                         </a> */}
                    </button>
               </div>
          </>
     );
}
