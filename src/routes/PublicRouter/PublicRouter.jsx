/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";
import { Navigate } from "react-router-dom";

function PublicRouter({children}) {
    const {user } = useContext(AuthContext)
    if(!user){
        return children
    }
    return <Navigate to="/"></Navigate>
}

export default PublicRouter;