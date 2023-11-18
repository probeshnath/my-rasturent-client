import { useEffect, useState } from "react"
import { createContext } from "react"
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import {app} from '../firebase/firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]= useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    
    const loginUser = (email,password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    const logoutUser = (email,password) =>{
      setLoading(true)
      return signOut(auth)
    }

    const updateUserProfile = (name,photo) =>{
      return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photo
      })
    }


    useEffect(()=>{
    const useSubscribe =  onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        setLoading(false)
        console.log("current User", currentUser)
      })
      return () =>{
        return useSubscribe()
      }
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        googleLogin
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider