import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
    <div> Dashboard
        <ul>
            <li><NavLink to = "./stud">Student Info</NavLink></li>
            <li><NavLink to = "./">Courses Info</NavLink></li>
        </ul>
        <br /><br />
        <Outlet></Outlet>

    </div>
    
    </>
  )
}

export default Dashboard