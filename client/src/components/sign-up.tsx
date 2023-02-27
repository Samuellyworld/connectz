// import custom react hook
import {
        useState, useEffect, 
        SetStateAction 
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

// sign up JSX building block
const SignUp : () => JSX.Element = () => {

 // initial values
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

  const doNothing = () => {

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
            onChange = {doNothing}
            theLabel="Username" 
            toValidate = {true}
        />
        </SignInInputCont>

        <SignInInputCont>
          <InputWithLabel 
            type = "email" 
            logo='/assets/png/emailIcon.png' 
            onChange = {doNothing} 
            theLabel="Email" 
            toValidate = {true}
            />
        </SignInInputCont>
        
        <SignInInputCont>
          <InputWithLabel 
            type = "text" 
            logo='/assets/png/emailIcon.png'
            onChange = {doNothing} 
            theLabel="Phone Number"
            toValidate = {true}
           />
        </SignInInputCont>

        <SignInInputCont>
          <InputWithLabel 
             type = "password" 
             logo='/assets/png/LockIcon.png' 
             onChange = {(e: { target: { value: SetStateAction<string>; }; }) => {
                setNewPassword(e.target.value)}} 
              theLabel="Password" 
              toValidate = {true}
            />
        </SignInInputCont>

        <SignInInputCont>
          <InputWithLabel 
             type = "password" 
             logo='/assets/png/LockIcon.png' 
             errorMessage = {confirmPasswordErrorMessage} 
             onChange = {(event: { target: any; } ) => {
             setNewConfirmPassword(event.target.value)
             theFunction(event)
             }
             } 
             theLabel="Confirm Password" 
             toValidate = {true}
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