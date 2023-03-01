//importing sytles from styles folder
import { VerifyPageContainer,LogoContainer,
         LogoImage, VerifyInnerContainer, 
         VerifyBigText, VerifySmallText, 
         VerifySecondDiv, VerifyMethod, 
         VerifyInputCont, VerifyNextButton, 
         VerifyButtonContainer, LittleBoxesContainer, 
         LittleBox
       } from "../styles/verify/verify.styles";

 // usestate from react
import { useState } from "react"

//importing 3rd party libraries
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


// verifyPage
const Verify : () => JSX.Element = () => {
    const [choosen, setChoosen] = useState(1);
    const [value, setValue] : any = useState()


    const handleClick = (input : any) => {
        setChoosen(input)
    }
    
    const handleSubmit = () => {

    }

    const ChooseVerify = () => {
        return (
            <>    
                    <VerifyInnerContainer>
                     <VerifyNextButton
                        className="button_verify"
                        onClick = {() => window.history.back()}
                     >Back
                     </VerifyNextButton> 
                      <VerifyBigText>Verify your account</VerifyBigText>
                        <VerifySmallText>How would you like to verify your account</VerifySmallText>

                        <VerifySecondDiv>
                            <VerifyMethod >Verify account with email</VerifyMethod>
                            <VerifyMethod onClick = {() => handleClick(3)}>Verify account with Phone Number</VerifyMethod>
                        </VerifySecondDiv>
                    </VerifyInnerContainer>
            </>
        )
    }

    // phone number verify
    const PhoneNumberVerify = () => {
        return (
          <> 
           <VerifyInnerContainer>
           <VerifyNextButton
              className="button_verify" 
              onClick = {() => handleClick(1)}
              >
              Back
            </VerifyNextButton> 
                <VerifyBigText>Verify your phone number</VerifyBigText>
                <VerifySmallText>Verify your phone number so we can help you if you forget the password to your account</VerifySmallText>

                <VerifyInputCont>
                    <PhoneInput placeholder = "Phone Number" country="ng" value={value}
                        onChange={setValue} inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                        }} inputStyle = {{width : "100%", border : "none"} }/>

                
                </VerifyInputCont>            

                <VerifyButtonContainer>
                    <VerifyNextButton  
                      onClick = {() => handleClick(2)
                      }>
                     Submit
                    </VerifyNextButton>    
                </VerifyButtonContainer>
            </VerifyInnerContainer>
          </>
          
        )
    }

    const CodeVerify = () => {
        return (
            <VerifyInnerContainer>
                 <VerifyNextButton 
                   className="button_verify" 
                   onClick = {() => handleClick(3)}
                >
                    Back
                 </VerifyNextButton> 
                <VerifyBigText>Verify your phone number</VerifyBigText>
                <VerifySmallText>Enter the 6-digit code sent to +{value} </VerifySmallText>

                    <LittleBoxesContainer>
                        <LittleBox type= "text" placeholder="*"/>
                        <LittleBox type= "text" placeholder="*"/>
                        <LittleBox type= "text" placeholder="*"/>
                        <LittleBox type= "text" placeholder="*"/>
                    </LittleBoxesContainer>
                           

                <VerifyButtonContainer>
                    <VerifyNextButton onClick={handleSubmit}>Submit</VerifyNextButton>    
                </VerifyButtonContainer>
            </VerifyInnerContainer>
        )
    }

  return (
    <VerifyPageContainer>
        <LogoContainer>
        <LogoImage src ="/assets/png/logo.png" />
        <span className="text">Connect</span>
      </LogoContainer>
        {
            choosen == 1 ? (
                <ChooseVerify />
            ) : choosen == 2 ? (
                <CodeVerify />
            ) : (
                <PhoneNumberVerify />
            )
        }
    </VerifyPageContainer>
  )
}

export default Verify;