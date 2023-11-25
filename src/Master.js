import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import { Routes, Route } from "react-router-dom";
import StudentInfo from './pages/StudentInfo'
import Courses from './pages/Courses'
import Navigation from './Navbar'
import Login from './pages/Login'
import Protected from './pages/Protected'
import Error from './pages/Error'
import Title from './pages/Title';

const Master = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigation />} >
                    <Route index element={<Login/>}></Route>
                    <Route path='/home' element={<Protected><Home ><Title > MY Name is Home</Title></Home></Protected> } />
                    <Route path='/dash' element={<Protected><Dashboard/></Protected> } >
                        <Route path="stud" element={<StudentInfo/>}></Route>
                        <Route index element={<Courses />}></Route>
                    </Route>
                    <Route path='/about' element={<Protected><About/></Protected> } />
                    <Route path='*' element={<Error/>}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default Master