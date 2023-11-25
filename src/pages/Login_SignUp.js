import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {useDispatch, useSelector } from 'react-redux'


import React, { useEffect } from "react";
import { useAuth } from '../Auth';
import { loginValidateInDbAction, register } from '../Redux/RegisterAction';
import FormikController from '../Formik/FormikController';

const Login_SignUp = (props) => {
    const { login } = useAuth();
    const navigate = useNavigate();
    let dispatch = useDispatch();

    const {isLogin,message} = useSelector(state => state);
    const initialValues = {
        "username": "",
        "email": "",
        "password": ""
    }
    
    const validation = Yup.object({
        "username": Yup.string().required("Required..!").min(3, "Minimum 3 character required.."),
        "email": Yup.string().required("Required..!").email("Please enter valid email.."),
        "password": Yup.string().required("Required..!").min(3, "Minimum 3 character required.."),
    })
    const loginValidation = Yup.object({
        "username": Yup.string().required("Required..!").min(3, "Minimum 3 character required.."),
        "password": Yup.string().required("Required..!").min(3, "Minimum 3 character required.."),
    })

    useEffect(()=>{
        console.log("useEffect :: ",message);
        if(isLogin){
            login();
        }

    },[message]);


    const loginSubmit = (obj) => {
        console.log("login obj ", obj);
        dispatch(loginValidateInDbAction(obj));
    }
    const signUpForm = async (obj) => {
        dispatch(register(obj))
    };

    return (
        <Tabs
            defaultActiveKey="Login"
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="Login" title="Login">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                        <span className="text-success" >{message}</span>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={loginValidation}
                                onSubmit={loginSubmit}
                            >
                                {
                                    formik => {
                                        return (
                                            <Form>
                                                <FormikController
                                                    control="input"
                                                    type="text"
                                                    name="username"
                                                    label="User Name"
                                                    id="usernameId"
                                                    className="form-control"
                                                />

                                                <FormikController
                                                    control="input"
                                                    type="text"
                                                    name="password"
                                                    label="Password"
                                                    id="passwordId"
                                                    className="form-control"
                                                />
                                                <br />
                                                <button type="submit" disabled={!formik.isValid} className="btn btn-primary"> Save </button>&nbsp;&nbsp;
                                                <button type="reset" className="btn btn-primary"> Clear </button>
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="SignUp" title="SignUp">

                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                            <span className="text-success" >{message}</span>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validation}
                                onSubmit={signUpForm}
                            >
                                {
                                    formik => {
                                        return (
                                            <Form>
                                                <FormikController
                                                    control="input"
                                                    type="text"
                                                    name="username"
                                                    label="User Name"
                                                    id="usernameId"
                                                    className="form-control"
                                                />

                                                <FormikController
                                                    control="input"
                                                    type="text"
                                                    name="email"
                                                    label="Email"
                                                    id="emailId"
                                                    className="form-control"
                                                />

                                                <FormikController
                                                    control="input"
                                                    type="text"
                                                    name="password"
                                                    label="Password"
                                                    id="passwordId"
                                                    className="form-control"
                                                />
                                                <br />
                                                <button type="submit" disabled={!formik.isValid} className="btn btn-primary"> Save </button>&nbsp;&nbsp;
                                                <button type="reset" className="btn btn-primary"> Clear </button>
                                            </Form>
                                        )
                                    }
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </Tab>
        </Tabs>
    );
}

export default Login_SignUp;
