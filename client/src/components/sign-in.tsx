// import custom styles
import {  Email,WelcomeText, 
          LogoContainer, LogoImage, 
          PhoneNumber, SignInContainer,
          SmallerContainer, TopHeader,
          SmallerText, LoginForm, 
          SignInInput, LoginButton,
          SignInInputCont, ImgIcon, ForgotPassword 
        } from "../styles/form/sign-in.styles";

import { AlreadySignedUp, SignText 
       } from "../styles/form/sign-up.styles";
    
import { Logo } from "../styles/landing/header.styles";
import { LeftImageContainer } from "../styles/landing/header.styles";

// icons
import logo from '../../assets/logo.png';
import LockIcon from '../../assets/LockIcon.png'
import emailIcon from '../../assets/emailIcon.png'
 
import {  useState } from "react";
import InputWithLabel from "./input-field";


const SignIn : () => JSX.Element = () => {
  const [showDiv, setShowDiv] = useState(true);

  const handleClick = () => {
    setShowDiv(true);
  };

  const handleClick2 = () => {
    setShowDiv(false);
  };

  

  const bgColor = showDiv ? '#3F00FF' : 'rgba(0, 0, 0, 0.3)';
  const bgColor1 = !showDiv ? '#3F00FF' : 'rgba(0, 0, 0, 0.3)';

  return (
    <SignInContainer>
      <LogoContainer>
          <LeftImageContainer>
                <Logo src ="/assets/png/logo.png" />
          </LeftImageContainer>
        <span className="text">Connect</span>
      </LogoContainer>

      <WelcomeText>Welcome Back</WelcomeText>
      <SmallerText>Sign into your account to continue</SmallerText>
      <SmallerContainer>
      <TopHeader>
          <PhoneNumber
           onClick={() => handleClick() } 
           style={{ backgroundColor: bgColor }}>
           Phone Number
          </PhoneNumber>
          <Email
            onClick={() => handleClick2()} 
            style={{ backgroundColor: bgColor1 }}>
            Email
          </Email>
        </TopHeader>
        <LoginForm>
          <SignInInputCont>
            {showDiv ? (
              <InputWithLabel
                type="text"
                logo="/assets/png/emailIcon.png"
                theLabel="Phone Number"
                onChange = {() => {}}
              />
            ) : (
              <InputWithLabel
                type="email"
                logo="/assets/png/emailIcon.png"
                theLabel="Email"
                onChange = {() => {}}
              />
            )}
          </SignInInputCont>
          <SignInInputCont>
            <InputWithLabel
              type="password"
              logo="/assets/png/LockIcon.png"
              theLabel="Password"
              onChange = {() => {}}
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




