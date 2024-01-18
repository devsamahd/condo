"use client"

import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState(true)
    const [active, setActive] = useState('overview')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Check if localStorage is available (client-side)
        if (typeof window !== 'undefined') {
            const persistData = JSON.parse(localStorage.getItem("persist") || "");
            setPersist(persistData);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist, active, setActive, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;