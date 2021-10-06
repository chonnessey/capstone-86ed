import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export const useAuth = () => {
  return (
    useContext(AuthContext)
  ) 
}

export const AuthProvider = () => {
  const [currentUser, setCurrentUser] = useState()

  const signup = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])
  

  const value = {
    currentUser,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      
    </AuthContext.Provider>
  )
}


