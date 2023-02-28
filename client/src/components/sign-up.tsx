// import custom react hook
import {
        useState, useEffect, 
        SetStateAction, 
        ChangeEvent
       } from "react";

// import custom styles
import { ImgIcon, AlreadySignedUp,
         LogoContainer, SignText, 
         LogoImage, SignUpButton,
         SignUpContainer, SignUpForm, 
         SignUpInput, SmallerContainer, 
         WelcomeText, SignUpLeft, 
         SignUpRight, RightImage,
         SignUpRightMini
         } from "../styles/form/sign-up.styles";

import { SignInInputCont } from "../styles/form/sign-in.styles";

// import logo styles
import {
       Logo , LeftImageContainer 
       } from "../styles/landing/header.styles";

// import input field
import InputWithLabel from "./input-field";

// types
import { signUpInputChangeTypes } from "../types/components.types";

// sign up JSX building block
const SignUp : () => JSX.Element = () => {

 // initial values
  const [values, setValues] = useState({
    username : "",
    email : "",
    password : "",
    confirm_password : "",
    textReveal : ""
  } as signUpInputChangeTypes)

  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');

   // validate
  const theFunction = (event: { target: { value: string | any[]; }; }) => {
      if(newPassword !== event.target.value) {
        setConfirmPasswordErrorMessage("Passwords do not match")
      } else if (newPassword == event.target.value) {
        setConfirmPasswordErrorMessage('')
      } else if (event.target.value.length === 0) {
        setConfirmPasswordErrorMessage('')
      }
    }


  // handle input change
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name] : value,
    })
    console.log(values?.password , values?.confirm_password)
  }

  // building block
  return (
    <SignUpContainer>
      <SignUpLeft>
      <LogoContainer>
          <LeftImageContainer>
                <Logo src ='/assets/png/logo.png' 
                 style={{ width : "3rem"}}
                 />
          </LeftImageContainer>
        <span className="text">Connect</span>
      </LogoContainer>
    <WelcomeText>Welcome!</WelcomeText>  
    <SmallerContainer>
      <SignUpForm>
        <SignInInputCont>
          <InputWithLabel 
            type = "text" 
            logo = '/assets/png/Vector.png'
            onChange = {handleChange}
            theLabel="Username" 
            toValidate = {true}
            name = "username"
        />
        </SignInInputCont>

        <SignInInputCont>
          <InputWithLabel 
            type = "email" 
            logo='/assets/png/emailIcon.png' 
            onChange = {handleChange} 
            theLabel="Email" 
            toValidate = {true}
            name = "email"
            />
        </SignInInputCont>
        
        <SignInInputCont>
          <InputWithLabel 
            type = "text" 
            logo='/assets/png/emailIcon.png'
            onChange = {handleChange} 
            theLabel="Phone Number"
            toValidate = {true}
            name = "phone"
           />
        </SignInInputCont>

        <SignInInputCont>
          <InputWithLabel 
             type = "password" 
             logo='/assets/png/LockIcon.png' 
             onChange = {handleChange} 
              theLabel="Password" 
              toValidate = {true}
              name = "password"
            />
        </SignInInputCont>

        <SignInInputCont>
          <InputWithLabel 
             type = "password" 
             logo='/assets/png/LockIcon.png' 
             errorMessage = {confirmPasswordErrorMessage} 
             onChange = 
             {
               (e: ChangeEvent<HTMLInputElement>) => {
                handleChange(e)
                console.log(values?.password === values?.confirm_password)
              if(values?.password !== values?.confirm_password) {
                setConfirmPasswordErrorMessage("password do not match")   
              } else {
                setConfirmPasswordErrorMessage('')
              }
            
             }}
             theLabel="Confirm Password" 
             toValidate = {true}
             name = "confirm_password"
            />
        </SignInInputCont>

      <SignUpButton>Sign Up</SignUpButton>
      </SignUpForm>
      <AlreadySignedUp>Already Signed Up?    
          <SignText to = "/signin">Sign In Now</SignText>
        </AlreadySignedUp>
    </SmallerContainer> 
        </SignUpLeft>   
      <SignUpRight>
        <SignUpRightMini>
          <RightImage src="/assets/jpg/connect.jpg" />
        </SignUpRightMini>
      </SignUpRight>
    </SignUpContainer>
  )
}

export default SignUp