import axios from "axios";
import { MESSAGE_FAILED, MESSAGE_SUCCESS, USER_CLEAR_STATE } from "./Constants";

import { doLoginValidateInDb, doRegisterService, getProductDetails } from "../service/Services"
import { LOGIN_MSG, SUCCESS } from "../constants/MessageConstants";

export const clearState = () => {
    return async (dispatch) => {
        dispatch({
            type: USER_CLEAR_STATE,
        });
    }
}

export const loginValidateInDbAction = (obj) => {
    return async (dispatch) => {
        try {
            doLoginValidateInDb(obj)
                .then(
                    user => {
                        localStorage.setItem("user-details", JSON.stringify(obj));
                        dispatch({
                            type: MESSAGE_SUCCESS,
                            message: LOGIN_MSG,
                            isLogin: true
                        });
                    },
                    error => {
                        console.log("Error ", error);
                        dispatch({
                            type: MESSAGE_FAILED,
                            error: error.message
                        });
                    }
                );
        }
        catch (err) {
            dispatch({
                type: MESSAGE_FAILED,
                error: err.message
            });
        }
    }

}
export const register = (userObject) => {
    console.log(userObject);
    return async (dispatch) => {
        try {
            doRegisterService(userObject)
                .then(
                    user => {
                        dispatch({
                            type: MESSAGE_SUCCESS,
                            message: SUCCESS
                        });
                    },
                    error => {
                        console.log("Error ", error);
                        dispatch({
                            type: MESSAGE_FAILED,
                            error: error.message
                        });
                    }
                );
        }
        catch (err) {
            dispatch({
                type: MESSAGE_FAILED,
                error: err.message
            });
        }
    }

}

export const getProductList = () => {
    return async (dispatch) => {

        try {
            getProductDetails()
                .then(
                    data => {
                        dispatch({
                            type: MESSAGE_SUCCESS,
                            data: data.data,
                        });
                                },
                    error => {
                        console.log("Error ", error);
                        dispatch({
                            type: MESSAGE_FAILED,
                            error: error.message
                        });
                    }
                );
        }
        catch (err) {
            dispatch({
                type: MESSAGE_FAILED,
                error: err.message
            });
        }
    }



}
