import React, { useContext } from 'react'

const AuthContext = React.createContext()

export const useAuth = () => {
  return (
    useContext(AuthContext)
  ) 
}

export const AuthProvider = () => {

  const value = {
    currentUser
  }
  
  return (
    <AuthContext.Provider value={value}>
      
    </AuthContext.Provider>
  )
}


