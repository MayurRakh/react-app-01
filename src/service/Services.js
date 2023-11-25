import axios from 'axios';
import { URL } from '../Redux/Constants';
export function doRegisterService(user) {
    console.log("Services :: doRegisterService ",user);
    return axios.post(`${URL}/insert`, user);//.then(resolve());
}
export function doLoginValidateInDb(obj) {
    console.log("Services :: doLoginValidateInDb ",obj);
    return axios.post(`${URL}/loginValidate`, obj);//.then(resolve());
}

export function getProductDetails() {
    console.log("Services :: getProductDetails ");
    return axios.get(`${URL}/products`);//.then(resolve());
}

