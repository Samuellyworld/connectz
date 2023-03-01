// data fetching library
import axios from "axios"
import { Dispatch, SetStateAction } from "react"

// types
import { signUpInputChangeTypes } from "../types/components.types"

// base URL
const baseURL = "http://localhost:8000"
// handle sign up request
export const handleSignUpRequest = async (values: signUpInputChangeTypes,
                                          interests: string[], 
                                          setError: Dispatch<SetStateAction<string>>
                                          ) => {
       axios.post(`${baseURL}/api/v1/user/register`, {
           email : values?.email,
           username : values?.username,
           password : values?.password,
           phoneNumber : values?.phone,
           interests : interests
          }).then(response => {
            if(response) {
                return response.data.data.token
            }
       }).catch(err => {
              setError(err.response.data.message);
              setTimeout(() => {
                setError('')
              }, 2000)
       })
}