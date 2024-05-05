import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from './components/landPage/Landingpage';
import Aboutus from './components/aboutus/Aboutus';
import ProjectList from './components/project/ProjectList';
import CreateProject from './components/project/CreateProject';
import ProjectDetail from './components/project/PrjDetail';
import LoginPage from './components/loginPage/Login';
import Dashboard from './components/dashboard/Dashboard';
import Register  from  './components/loginPage/Register'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Landingpage/>} />
                    <Route path='/home' element={<Landingpage/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='/project' element={<ProjectList />} />
                    <Route path='/projecttile' element={<ProjectDetail />} />
                    <Route path='/addproject' element={<CreateProject />} />
                    <Route path='/aboutus' element={<Aboutus />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<Register />} />
                    {/* <Route path='/register' element={<Register />} /> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;