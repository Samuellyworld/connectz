// import relevant components that make up the forgot-password page
import {BackToLoginLink, ForgotPasswordBigContainer,
        ForgotPasswordContainer, ForgotPasswordHeader,
        ForgotPasswordInputContainer, ForgotPasswordSubText,
        ForgotPButtonCont, ForgotSubmitButton }
         from "../styles/forgot-password/forgot-password.styles";

import {VerifyInnerContainer,LogoImage,LogoContainer,
        VerifyInputCont,VerifyButtonContainer,VerifyNextButton,
        VerifyBigText, VerifySmallText, VerifySecondDiv, 
        VerifyMethod,  } from "../styles/verify/verify.styles";

import InputWithAnimation from "./input-field";


//importing relevant libraries
import PhoneInput from "react-phone-input-2";

//import relevant React modules
import { useState } from "react";

//JSX component
const ForgotPassword : () => JSX.Element = () => {

    //set choose div logic
  const [choosen, setChoosen] = useState(1);

  //set value logic
  const [value, setValue] = useState()


    const handleClick = (input : number) => {
        setChoosen(input)
    }

    const getBack = () => {
        window.history.back()   
    }

  const ChooseVerify = () =>  {
    return (
        <VerifyInnerContainer>
            <VerifyNextButton
                        className="button_verify"
                        onClick={() => getBack()}
                     >Back
                     </VerifyNextButton> 
            <VerifyBigText>Verify your account</VerifyBigText>
            <VerifySmallText>How would you like to retrieve your account</VerifySmallText>

            <VerifySecondDiv>
                <VerifyMethod onClick = {() => handleClick(2)}>Retrieve account with email</VerifyMethod>
                <VerifyMethod onClick = {() => handleClick(3)}>Retrieve account with Phone Number</VerifyMethod>
            </VerifySecondDiv>
        </VerifyInnerContainer>
    )
}

const PhoneNumberVerify = () => {
  return (
    <>
      <VerifyInnerContainer>
          <VerifyBigText>Forgot Password?</VerifyBigText>
          <VerifySmallText>Enter the phone number associated with your account and we'll send you a verification code to reset your password.</VerifySmallText>

          <VerifyInputCont>
              <PhoneInput placeholder = "Phone Number" country="ng" value={value}
                inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true
                  }} inputStyle = {{width : "100%", border : "none"} }/>

          
          </VerifyInputCont>            

          <VerifyButtonContainer>
              <VerifyNextButton  onClick = {() => handleClick(2)}>Submit</VerifyNextButton>    
          </VerifyButtonContainer>
      </VerifyInnerContainer>

      <BackToLoginLink to = "/signin">Back to Sign In</BackToLoginLink>
        </>
  )
}

  const EmailForgotPassword = () => {
    return (
      <>
      <ForgotPasswordContainer>
          <ForgotPasswordHeader>Forgot Password?</ForgotPasswordHeader>
          <ForgotPasswordSubText>Enter the email address associated with your account and we'll send you a link to reset your password.</ForgotPasswordSubText>

          <ForgotPasswordInputContainer>
              <InputWithAnimation type = "text" onChange = {() => {}} logo = '/assets/png/Icon.png' name = "email"  theLabel= "Email" />
          </ForgotPasswordInputContainer>

          <ForgotPButtonCont>
              <ForgotSubmitButton>Submit</ForgotSubmitButton>
          </ForgotPButtonCont>
      </ForgotPasswordContainer>

      <BackToLoginLink to = "/signin">Back to Sign In</BackToLoginLink>
      </>
    )
  }

  return (
    <ForgotPasswordBigContainer>
      <LogoContainer>
        <LogoImage src = '/assets/png/logo.png' />
        <span className="text">Connect</span>
      </LogoContainer>
        {
            choosen == 1 ? (
                <ChooseVerify />
            ) : choosen == 2 ? (
                <EmailForgotPassword />
            ) : (
                <PhoneNumberVerify />
            )
        }
    </ForgotPasswordBigContainer>
  )
}

export default ForgotPassword