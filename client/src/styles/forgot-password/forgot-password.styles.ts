import styled from "styled-components";
import { Link } from "react-router-dom";

export const ForgotPasswordBigContainer = styled.div`
    position:relative ;
    width:100vw ;
    height:100vh ;
    padding : 1rem;
`


export const ForgotPasswordContainer = styled.div`
    position:absolute ;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    padding:2rem 1rem;
    width:30%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    background-color:white ;
`
export const ForgotPasswordHeader = styled.span`
    display: block;
    text-align:center ;
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom:0.5rem ;
    color : #3F00FF;
`

export const ForgotPasswordSubText = styled.span`
    display: block;
    text-align:center ;
    font-size: 0.8rem;
    font-weight: 300;
    color : grey;
`

export const ForgotPasswordInputContainer = styled.div`
    margin-top:3rem ;
`

export const ForgotPButtonCont = styled.div`
    display: flex;
    justify-content: flex-end;
    width:100% ;
    margin-top:1rem ;
`


export const ForgotSubmitButton = styled.button`
    background-color: #3F00FF;
    color : white;
    padding : 0.4rem 1.3rem;
    font-weight:500 ;
    font-size:0.8rem ;
    outline : none;
    border: none;
    border-radius:10px ;
    cursor: pointer;
`

export const BackToLoginLink = styled(Link)`
    font-size:0.9rem ;
    font-weight:300 ;
    position:absolute ;
    padding:0 0.2rem ;
    text-decoration:none ;
    top : 80%;
    left : 50%;
    transform: translate(-50%, -50%);
    color:#3F00FF ;
`