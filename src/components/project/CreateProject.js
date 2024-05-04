import React from "react"
import "./CreateProject.css"
import Navbar from "../navBar/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

export default function CreateProject() {
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
    const subPrj = () => {
        const form = document.getElementById("newPrjCreateForm");
        const formData = new URLSearchParams(new FormData(form));
        formData.append("hostedBy", 3);
        formData.delete("requiredDep");
        const selectElement = document.getElementById('department');
        // Get an array of selected option elements
        const selectedOptions = Array.from(selectElement.selectedOptions);
        // Extract values of selected options
        const selectedValues = selectedOptions.map(option => option.value);
        formData.append("reqDep", selectedValues);

        axios.post("http://localhost:3010/project/createProject", formData)
            .then((response) => {
                alert(response.data.msg)
                
            })
            .catch((error) => {
                console.log(error);
            });
        
        // console.log(selectedValues[1] +" First Val")
        // console.log(selectedValues.toString());
        // console.log(formData.get("student_id"));
    }
    return (
        <>
            <Navbar></Navbar>
            <form id="newPrjCreateForm">
                {/* <input name="student_id" style={{display: "none"}} value={3}></input> */}
                <div className="container mt-5">
                    <div className="card" id="c">
                        <div className="card-body" id="cbody">
                            <h2 className="card-title" id="c-title" style={{ marginBottom: "20px" }}>Create Project</h2>
                            <div className="row mb-3">
                                <div className="col">
                                    <label for="projectname" className="form-label" >Project name</label>
                                    <input type="text" className="form-control" id="projectname" placeholder="Enter your project name" name="projectName" />
                                </div>
                                <div className="col">
                                    <label for="hostby" className="form-label">Hoste name</label>
                                    <input type="email" className="form-control" id="hostby" placeholder="Enter host name" disabled
                                        value="Shivam" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <label for="projectdef" className="form-label">Project Definition</label>
                                    <textarea name="projectDefination" id="projectdef" cols="10" rows="5" className="form-control"
                                        placeholder="Enter project definition upto 150 words."></textarea>
                                </div>
                                <div className="col">
                                    <label for="projectdesc" className="form-label">Project Description</label>
                                    <textarea name="projectDescription" id="projectdesc" cols="10" rows="5" className="form-label form-control"
                                        placeholder="Enter project description"></textarea>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <label for="department" className="form-label"> Required department</label>
                                    <select className="form-select"  id="department" name="requiredDep" multiple>
                                        {data && data.map((department, index) => (
                                            department.DepartmentID === 3 ? null :
                                            <option value={department.DepartmentID}>{department.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col">
                                    <label for="totalstu" className="form-label">Team size</label>
                                    <input type="number" className="form-control" id="totalstu" placeholder="Total required students" name="noOfStudentRequired" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col">
                                    <label for="projectlevl" className="form-label">Project level</label>
                                    <select className="form-select" id="projectlevel" aria-placeholder="Select level" name="projectLevel">
                                        <option value="1">Easy</option>
                                        <option value="2">Intermideate</option>
                                        <option value="3">Advanced</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label for="timeToComp" className="form-label">Time duration</label>
                                    <select className="form-select" id="timeToComp" name="timeToComp">
                                        <option value="0">Less than 1 month</option>
                                        <option value="1">1-3 Months</option>
                                        <option value="2">4-6 Months</option>
                                        <option value="3">6-12 Months</option>
                                        <option value="4">More than 1 year</option>
                                    </select>
                                </div>
                            </div>
                            <center>
                                <div className="button" style={{ alignSelf: "center", marginTop: "20px" }}>
                                    <button type="button" className="btn btn-outline-dark btn-sm " style={{ width: "20%", borderWidth: "2px" }} onClick={subPrj}>Create Project</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}