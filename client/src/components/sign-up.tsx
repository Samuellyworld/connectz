// import custom react hook
import {
        useState, useEffect, 
        SetStateAction, 
        ChangeEvent
       } from "react";
      
//importing Link from react router dom
import {Link } from "react-router-dom"


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
import { InputLabel } from "../styles/form/input-field.styles";
import { SignInInputCont } from "../styles/form/sign-in.styles";

// import dispatch
import { useDispatch } from "react-redux";

// import external inputs
import { handleSignUpRequest } from "../utils/requests";

// import select 
import Select from 'react-select';

// import logo styles
import {
       Logo , LeftImageContainer 
       } from "../styles/landing/header.styles";

// import input field
import InputWithLabel from "./input-field";

// types
import { signUpInputChangeTypes } from "../types/components.types";
import { interestOptions } from "../utils/interest-list";
import { checkInputs } from "../utils/check";
import { Dispatch } from "redux";

// sign up JSX building block
const SignUp : () => JSX.Element = () => {
  // setting dispatch
  const dispatch : Dispatch = useDispatch()
  //
  const [intVal, setIntVal] = useState("")

 // initial values
  const [values, setValues] = useState({
    username : "",
    email : "",
    password : "",
    confirm_password : "",
    phone : "",
    textReveal : "",
    interests : []
  } as signUpInputChangeTypes)

 // set password do not match - error
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');
  // server error message
  const [error, setError] = useState('');

  // handle input change
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name] : value,
    })
  }

  // handle submit 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       // prevent default
       e.preventDefault()

       // check inputs before submitting to server
      let check = checkInputs(values, setError, true || false)  
       if(check) return 

      // convert obj to array
       let convertInterestsToArr : string[]= values?.interests.map(
             (val : {value : string, label : string}) => {
              return val.value
             })

      // sign up request
      await handleSignUpRequest(values, convertInterestsToArr, 
                                setError, dispatch)
        
  }

  // building block
  return (
    <SignUpContainer>
      <SignUpLeft>
      <LogoContainer>
      <Link to = "/">
          <LeftImageContainer>
            <Logo src ='/assets/png/logo.png' className = "logo" alt="landing icon" />
            <span className="text">Connect</span>
          </LeftImageContainer>
      </Link>

      </LogoContainer>
    <WelcomeText>Welcome!</WelcomeText>  
     <p className="error"> {error}</p>
    <SmallerContainer>
      <SignUpForm onSubmit={handleSubmit}>
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
              if(values?.password !== e.target.value) {
                setConfirmPasswordErrorMessage("password do not match")   
              } else if(values?.password === e.target.value) {
                setConfirmPasswordErrorMessage('')
              } 
              if (!e.target.value) {
                setConfirmPasswordErrorMessage('')
              }
             }}
             theLabel="Confirm Password" 
             toValidate = {true}
             name = "confirm_password"
            />
        </SignInInputCont>
        <SignInInputCont>
           <img className="img" src="/assets/svg/intercom-alt (1).svg"/>
           <Select 
             onChange={(e : any) => {
                setValues({
                  ...values,
                  interests : e
                })

             }}
              onInputChange ={(e : any) => {
                  setIntVal(e) 
              }}
              className="interests"
              isMulti
              placeholder="Interests"
              name="Interests"
              options={interestOptions}
             />
             <InputLabel 
               className="label" 
               htmlFor="input-field"
               >
                {
                intVal.length > 0 ?
                 "Interests" : 
                 values?.interests.length > 0 
                 && "Interests"
               }
             </InputLabel>
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