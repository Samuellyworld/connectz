//importing nessecary modules
import { Dispatch, SetStateAction } from 'react';

// sign up input change types
export interface signUpInputChangeTypes {
    username : string,
    email : string,
    password : string,
    confirm_password : string,
    phone : string,
    textReveal : string,
    interests : []
}

// options types
export interface interestListTypes {
    value : string,
    label : string
}

// code verification types
export interface codeVerificationTypes {
    first : string,
    second : string,
    third : string,
    fourth : string
}

//profile open useState types
export interface editProfileProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
  }

export interface headerTypes {
    bool : boolean
}
  