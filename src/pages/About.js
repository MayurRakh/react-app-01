import React from 'react'
import { useAuth } from '../Auth';
import { Navigate } from 'react-router-dom';
const About = () => {
  // const {isLogin } = useAuth();
  // if (!isLogin) {
  //   return <Navigate to="../" replace="true"></Navigate>
  // }
  return (
    <div>About</div>
  )
}
export default About