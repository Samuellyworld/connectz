// import relevant react hooks
import React, { useEffect, useState } from 'react';

// import validate functions
import { isValidEmail, regex,
         isStrongPassword, containsSpaceOrSymbol
        } from '../utils/validate';

// import styles
import { 
        InputContainer, InputField, 
        InputLabel, IconPNG, ErrorMessage
        } from '../styles/form/input-field.styles';

  // JSX Component
const InputWithLabel : (props: any) => JSX.Element = (props : any) => {
 
    // initial use state values 
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

   // handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

   //  has value 
  const hasValue : boolean = inputValue.length > 0;
   
  // use effect 
  useEffect(() => {
    // to validate is true
    if(props.toValidate === true) {
      // when label is phone number
      if(props.theLabel === "Phone Number") {
        if(regex.test(inputValue)) {
          setError("Phone number cannot contain letters")
        } else if(inputValue.length > 0 && inputValue.length < 11 && inputValue.length > 14) {
          setError("Phone Number Invalid")  
        }
        else {
          setError('')
        } 
      }
     //when label is email
      if(props.theLabel === "Email") {
        if(!isValidEmail(inputValue) && inputValue.length > 0) {
          setError("Invalid Email")
        }
        else {
          setError('')
        } 
      }

      // when label is password
      if(props.theLabel === "Password") {
        if(!isStrongPassword(inputValue) && inputValue.length > 0) {
          setError("Password not strong enough")
        } else  {
          setError('')
        }
      }
     // when label is username
      if(props.theLabel === "Username") {
        if(containsSpaceOrSymbol(inputValue) && inputValue.length > 0) {
          setError("Username cannot contain symbols")
        } else if (inputValue.length > 0 && inputValue.length < 5) {
          setError("Username too short")
        }
        else  {
          setError('')
        }
      }
    }
  }, [inputValue])

  // building block
  return (
    <InputContainer>
     <IconPNG src={props.logo} /> 
     <InputField
      type={props.type}
      name={props.name}
      value={inputValue}
      onChange={(event) => {
        props.onChange(event);
        handleInputChange(event);
      }}
      hasValue={hasValue}
      toValidate = {props.toValidate}
      placeholder = {!inputValue ? props.theLabel : ""}
     />
     <InputLabel htmlFor="input-field">{inputValue && props.theLabel}</InputLabel>
     <ErrorMessage>{error}</ErrorMessage>
     {props.errorMessage ? <ErrorMessage>{props.errorMessage}</ErrorMessage> : <></>}
    </InputContainer>
  );
};

export default InputWithLabel; 