import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(undefined);

  useEffect(() => {
    // Try to fetch and parse the user from localStorage
    const initialAuthUser = localStorage.getItem("Users");
    if (initialAuthUser) {
      try {
        setAuthUser(JSON.parse(initialAuthUser));
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

