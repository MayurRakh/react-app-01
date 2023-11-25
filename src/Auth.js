import React, { createContext, useContext, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const CreateContext = createContext(null);

const Auth = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const location = useLocation();
    const redirect = useNavigate();

    const login = async () => {
        console.log("login ...");
        setIsLogin(true);
            redirect("../home",{replace :true});
            // return <Navigate to F= "../home" state={{path: location.pathname}}></Navigate>

    }
    const logout = () => {
        console.log("logout");
        setIsLogin(false);
        localStorage.clear();
    }
    return (
        <CreateContext.Provider value={{ login, logout, isLogin, setIsLogin }}>{children}</CreateContext.Provider>
    )
}
    
export default Auth;
export const useAuth = () => useContext(CreateContext);
