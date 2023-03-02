// data fetching library
import axios from "axios"
import { Dispatch, SetStateAction } from "react"
import {  AnyAction } from "redux"
import { setCurrentEmail, setCurrentPhone, setCurrentUser } from "../store/user/user.reducer"

// types
import { signUpInputChangeTypes } from "../types/components.types"

// base URL
const baseURL = "https://connectz-server.herokuapp.com"


// handle sign up request
export const handleSignUpRequest = async (values: signUpInputChangeTypes,
                                          interests: string[], 
                                          setError: Dispatch<SetStateAction<string>>,
                                          dispatch: Dispatch<AnyAction> 
                                          ) => {
       axios.post(`${baseURL}/api/v1/user/register`, {
           email : values?.email,
           username : values?.username,
           password : values?.password,
           phoneNumber : values?.phone,
           interests : interests
          }).then(response => {
            if(response) {
                console.log(response?.data?.data)
                dispatch(setCurrentEmail(response?.data?.data?.email))
                 dispatch(setCurrentUser(response.data.data.token))
          
                 dispatch(setCurrentPhone(response?.data?.data?.phone))
                 return window.location.pathname = "/verify"
            }
       })
       .catch(err => {
         console.log(err)
        if(err.response) {
              setError(err.response.data.message);
        }
              
              setTimeout(() => {
                setError('')
              }, 2000)
       })
}

// handle sign in request
export const handleSignInRequest = async (values : signUpInputChangeTypes,
                                          boolean : boolean,
                                          setError : Dispatch<SetStateAction<string>>, 
                                          dispatch: Dispatch<AnyAction> ) => {
          axios.post(`${baseURL}/api/v1/user/login`, {
            identifier : boolean ? values?.phone : values?.email,
            password : values?.password
          }).then(response => {
            if(response?.data.data?.verified) {
                dispatch(setCurrentUser(response.data.data.token))
                dispatch(setCurrentEmail(response?.data?.data?.email))
                dispatch(setCurrentPhone(response?.data?.data?.phone))
                return window.location.pathname = '/profile'
            }
            else if (!response?.data?.data?.verified) {
                dispatch(setCurrentUser(response.data.data.token))
                dispatch(setCurrentEmail(response?.data?.data?.email))
                dispatch(setCurrentPhone(response?.data?.data?.phone))
                return window.location.pathname = "/verify"
            }
          }).catch(err => {
            setError(err.response.data.message);
            setTimeout(() => {
              setError('')
            }, 2000)  
        })                    
      }