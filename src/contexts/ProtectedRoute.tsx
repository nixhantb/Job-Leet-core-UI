import { FC } from "react";
import { useAuth } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute: FC = () => {

    const {user} = useAuth();

    return user? <Outlet /> : <Navigate to = "/login"/>
}

export default ProtectedRoute;