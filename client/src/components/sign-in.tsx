// import custom styles
import {  Email,WelcomeText, 
          LogoContainer, 
          PhoneNumber, SignInContainer,
          SmallerContainer, TopHeader,
          SmallerText, LoginForm, 
           LoginButton,SignInInputCont, ForgotPassword 
        } from "../styles/form/sign-in.styles";
import { AlreadySignedUp, SignText 
       } from "../styles/form/sign-up.styles";
import { Logo } from "../styles/landing/header.styles";
import { LeftImageContainer } from "../styles/landing/header.styles";

// import dispatch
import { useDispatch } from "react-redux";

// importing use state 
import {  useState } from "react";

// input check function
import { checkInputs } from "../utils/check";

//import input field component 
import InputWithLabel from "./input-field";
import { signUpInputChangeTypes } from "../types/components.types";
import { handleSignInRequest } from "../utils/requests";


// JSX Component
const SignIn : () => JSX.Element = () => {
    // setting dispatch
    const dispatch = useDispatch();
    // set div toggle logic
  const [showDiv, setShowDiv] = useState(true);

    // server error message
 const [error, setError] = useState('');

  // set input value
  const [values, setValues] = useState({
      email : "",
      phone : "",
      password : ""
  } as signUpInputChangeTypes)

// handle input change
const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name] : value,
    })
  }

 const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
     // prevent default 
     e.preventDefault();
     console.log(showDiv, values)
     // check inputs before submitting to server
     let check = checkInputs(values, setError, showDiv)  
     if(check) return 
    await handleSignInRequest(values, showDiv,setError, dispatch )
 }

  const bgColor = showDiv ? '#3F00FF' : 'rgba(0, 0, 0, 0.3)';
  const bgColor1 = !showDiv ? '#3F00FF' : 'rgba(0, 0, 0, 0.3)';

  return (
    <SignInContainer>
      <LogoContainer>
          <LeftImageContainer>
                <Logo className="logo" src ="/assets/png/logo.png" />
          </LeftImageContainer>
        <span className="text">Connect</span>
      </LogoContainer>

      <WelcomeText>Welcome Back</WelcomeText>
      <SmallerText>Sign into your account to continue</SmallerText>
      <p className="error"> {error}</p>
      <SmallerContainer>
      <TopHeader>
          <PhoneNumber
           onClick={() => setShowDiv(true)} 
           style={{ backgroundColor: bgColor }}>
           Phone Number
          </PhoneNumber>
          <Email
            onClick={() => setShowDiv(false)} 
            style={{ backgroundColor: bgColor1 }}>
            Email
          </Email>
        </TopHeader>
        <LoginForm onSubmit={handleSubmit}>
          <SignInInputCont>
            {showDiv ? (
              <InputWithLabel
                type="text"
                logo="/assets/png/emailIcon.png"
                theLabel="Phone Number"
                onChange = {handleChange}
                name="phone"
              />
            ) : (
              <InputWithLabel
                type="email"
                logo="/assets/png/emailIcon.png"
                theLabel="Email"
                onChange = {handleChange}
                name="email"
              />
            )}
          </SignInInputCont>
          <SignInInputCont>
            <InputWithLabel
              type="password"
              logo="/assets/png/LockIcon.png"
              theLabel="Password"
              onChange = {handleChange}
              name="password"
            />
          </SignInInputCont>
          <ForgotPassword to = "/forgot-password" >Forgot Password?</ForgotPassword>
          <LoginButton >LOGIN</LoginButton>
        </LoginForm>
        <AlreadySignedUp>Don't have an account?    
          <SignText to="/register">Sign Up Now</SignText>
        </AlreadySignedUp>
      </SmallerContainer>
    </SignInContainer>
  );
};

export default SignIn




