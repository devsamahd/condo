import AuthContext from "@/context/main";
import { useContext, useDebugValue } from "react";

const useAuth = () => {
    const { auth }:any = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext)
}

export default useAuth;