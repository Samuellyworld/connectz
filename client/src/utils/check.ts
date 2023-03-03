// check input values 

// custom types from modules
import { SetStateAction } from "react";
import { signUpInputChangeTypes } from "../types/components.types";
import { isValidEmail, isStrongPassword, regex } from "./validate";

// if empty
export const isEmpty : (valuesObj: signUpInputChangeTypes) => boolean = (valuesObj : any) => {
    return Object.keys(valuesObj).every(key => {
        const value = valuesObj[key];
        return (typeof value === "string" && value.trim() === "") ||
               (Array.isArray(value) && value.length === 0);
      });
}

// check inputs values
export const checkInputs = (values: signUpInputChangeTypes, 
                            setError: { (value: SetStateAction<string>): void; (arg0: string): void; },
                            boolean : boolean
                            ) => {
  //// check if values is empty
   let empty = isEmpty(values)
   if(empty) {
       setError("All Fields Cannot be Empty")
       return  setTimeout(() => {
        setError('');
       }, 2000)
   }
  // username 
    if(values?.username !== undefined && values?.username.length === 0) {
        setError('Username field cannot be empty')
        return  setTimeout(() => {
          setError('');
          }, 2000)
    }
    
  // if username is too short
  if(values?.username !== undefined && values.username.length > 0 && values?.username.length < 5) {
    setError("Username is too short")
    return  setTimeout(() => {
      setError('');
      }, 2000)
  }
   // email
   if(!boolean && values?.email !== undefined && values?.email.length === 0) {
       setError("Email Address cannot be empty")
       return  setTimeout(() => {
       setError('');
      }, 2000)
   }

   // check email
   if(!boolean && values?.email !== undefined && !isValidEmail(values?.email) && values?.email.length > 0) {
        setError("Invalid Email")
        return  setTimeout(() => {
        setError('');
        }, 2000)
  }

 //  check if phone number is not empty
 if(boolean && values?.phone !== undefined && values?.phone.length === 0) {
    setError("Phone number field cannot be empty")
    return  setTimeout(() => {
      setError('');
      }, 2000)
  }

  // check phone number contains symbol
  if(boolean && values?.phone !== undefined && regex.test(values?.phone)) {
      setError("Phone number cannot contain letters")
      return  setTimeout(() => {
        setError('');
        }, 2000)
  }
  
  // check if phone number is valid
  if(boolean && values?.phone !== undefined && values?.phone.length < 11 && values?.phone.length > 14) {
      setError("Phone Number Invalid") 
      return  setTimeout(() => {
        setError('');
        }, 2000)
  }
  
  // password
  if(values?.password !== undefined && values?.password.length === 0 || values?.confirm_password !== undefined && values?.confirm_password.length === 0)  {
    setError("Password field cannot be empty")
    return  setTimeout(() => {
        setError('');
        }, 2000)
  }

  // if password is not strong enough
  if(values?.password !== undefined && !isStrongPassword(values?.password)) {
    setError("Password is not strong enough")
    return  setTimeout(() => {
        setError('');
        }, 2000)
  }

  // if passwords do not match
  if(values?.password !== undefined && values?.confirm_password !== undefined && values?.password !== values?.confirm_password) {
     setError("Passwords do not match")
     return  setTimeout(() => {
        setError('');
        }, 2000)
  }

     // check if interests is not empty
  if( values?.interests !== undefined && values?.interests.length === 0) {
        setError('Select an interest you enjoy!');
        return  setTimeout(() => {
            setError('');
           }, 2000)
        }

  return false
} 

