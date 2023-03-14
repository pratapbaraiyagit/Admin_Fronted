import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    let isLoggedIn = false

    const token = JSON.parse(localStorage.getItem("ProServAdminToken"));
    if (token) {
        isLoggedIn = true
    }
    useEffect(() => {
        if (!isLoggedIn) navigate('/admin/login', { replace: true })
    }, [isLoggedIn, navigate])

    return (
        <>
            {children}
        </>
    )
}

export default AuthGuard