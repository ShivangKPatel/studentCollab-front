import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from './components/landPage/Landingpage';
import Aboutus from './components/aboutus/Aboutus';
import ProjectList from './components/project/ProjectList';
import CreateProject from './components/project/CreateProject';
import ProjectDetail from './components/project/PrjDetail';
import LoginPage from './components/loginPage/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Landingpage isLogIn="0"/>} />
                    <Route path='/home' element={<Landingpage isLogIn="0"/>} />
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='/project' element={<ProjectList />} />
                    <Route path='/projecttile' element={<ProjectDetail />} />
                    <Route path='/addproject' element={<CreateProject />} />
                    <Route path='/aboutus' element={<Aboutus />} />
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;