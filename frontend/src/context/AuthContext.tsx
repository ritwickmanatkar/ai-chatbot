// Imports
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// Define types for Information Management
type User = {
    name: string;
    email: string;
};

type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};


// Define the Auth Context
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children } : { children: ReactNode }) => {
    // Properties to be used by the children.
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // TODO: Complete after login page is complete. 
    useEffect(() => {
        // Add code to skip login if user's cookies are valid. 
    }, []);

    const login = async (email: string, password: string) => {};
    const signup = async (name: string, email: string, password: string) => {};
    const logout = async () => {};

    // Set the values that need to used by the children.
    const value = {
        user,
        isLoggedIn,
        login,
        logout,
        signup,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);