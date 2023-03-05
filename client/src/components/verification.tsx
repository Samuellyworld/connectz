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
import { Dispatch, SetStateAction, useState } from "react"

// import relevant function
import { handleConfirmCode, handleSendEmailCode } from "../utils/requests";
import { handleSendPhoneCode } from "../utils/requests";

// import use selector
import { useSelector } from "react-redux";

//importing 3rd party libraries
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RootState } from "../store/store";
import { codeVerificationTypes } from "../types/components.types";




// verifyPage
const Verify : () => JSX.Element = () => {
    const [choosen, setChoosen] = useState(1);
    const [value, setValue] : any = useState()
    
    // using use selector
    const email : string = useSelector((state : RootState) => 
        state?.currentUser?.currentUser?.email
    )
     // handle click
    const handleClick = (input : any) => {
        setChoosen(input)
    }
    
   
    // choose which to verify with
 const ChooseVerify : () => JSX.Element = () => {
       // set result after API call
        const [result, setResult] = useState('')
        return (
            <>    
              <VerifyInnerContainer>
                 <VerifyNextButton
                  className="button_verify"
                  onClick = {() => window.history.back()}>
                  Back
                 </VerifyNextButton> 
                   <VerifyBigText>Verify your account</VerifyBigText>
                   <VerifySmallText>How would you like to verify your account</VerifySmallText>
                     <VerifySecondDiv>
                        <VerifyMethod onClick={() => handleSendEmailCode(email, setResult)} >Verify account with email</VerifyMethod>
                        <VerifyMethod onClick = {() => handleClick(3)}>Verify account with Phone Number</VerifyMethod>
                     </VerifySecondDiv>
               </VerifyInnerContainer>
               <p className="result">{result}</p>
            </>
         )
      }

    // phone number verify
    const PhoneNumberVerify = () => {
           
        // phone number
     const phone :string = useSelector((state : RootState) => 
        state?.currentUser?.currentUser?.phone
        )

       // error
     const [error, setError] : [string, Dispatch<SetStateAction<string>>]= useState("");

        return (
          <> 
           <VerifyInnerContainer>
            <VerifyNextButton
              className="button_verify" 
              onClick = {() => handleClick(1)}>
              Back
             </VerifyNextButton> 
             <VerifyBigText>Verify your phone number</VerifyBigText>
             <VerifySmallText>Verify your phone number so we can help you if you forget the password to your account</VerifySmallText>
               <VerifyInputCont>
                 <PhoneInput
                    placeholder = "Phone Number" 
                    country="ng" value={phone}
                    onChange={
                         setValue(phone)} 
                         inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true
                         }} 
                   inputStyle= {{ width : "100%", border : "none"} }
                  />         
                </VerifyInputCont>            
                <VerifyButtonContainer>
                    <VerifyNextButton  
                      onClick = {
                         () => handleSendPhoneCode(phone, handleClick, setError)   
                      }>
                     Submit
                    </VerifyNextButton>    
                </VerifyButtonContainer>
             </VerifyInnerContainer>
             <p className="error">{error}</p>
          </>
          
        )
    }

    // handle code verify
    const CodeVerify : () => JSX.Element = () => {
        const [values, setValues]= useState({
            first : "",
            second : "",
            third : "",
            fourth : ""
        } as codeVerificationTypes
        );

        // handle error
        const [error, setError] : [string, Dispatch<SetStateAction<string>>]= useState("");

        // handle change
        const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target
            setValues({
              ...values,
              [name] : value,
            })
          }

       /// JSX Building block
        return (
           <>
              <VerifyInnerContainer>
                 <VerifyNextButton 
                   className="button_verify" 
                   onClick = {() => handleClick(3)}
                  >
                  Back
               </VerifyNextButton> 
               <VerifyBigText>Verify your phone number</VerifyBigText>
               <VerifySmallText>Enter the 4-digit code sent to {value} </VerifySmallText>
                 <LittleBoxesContainer>
                     <LittleBox type= "text" placeholder="*" name="first" onChange={handleChange}/>
                     <LittleBox type= "text" placeholder="*" name="second" onChange={handleChange}/>
                     <LittleBox type= "text" placeholder="*" name="third" onChange={handleChange}/>
                     <LittleBox type= "text" placeholder="*" name="fourth" onChange={handleChange}/>
                 </LittleBoxesContainer>
                <VerifyButtonContainer>
                    <VerifyNextButton
                      onClick={() => handleConfirmCode(values,setError)}
                     >
                    Submit
                    </VerifyNextButton>    
                </VerifyButtonContainer>
               </VerifyInnerContainer>
               <p className="error">{error}</p> 
           </>
        )
    }

// conditional verification page routing
   return (
     <VerifyPageContainer>
        <LogoContainer to = "/">
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