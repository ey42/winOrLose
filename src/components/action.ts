"use server"
import { signIn, signOut } from "auth"

export const signOutf = (async() => {
  
 await signOut()
}) 

export const signInf = async() => {
   
    await signIn()
}