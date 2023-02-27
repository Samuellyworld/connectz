// import custom styles
import styled from "styled-components";
import { Link } from "react-router-dom";

// signIn container styles
export const SignInContainer = styled.div`
    height: 100%;
    width:100%;
    padding:1rem 1.5rem ;
    position:relative ;
    display: flex;
    flex-direction:column ;
`
 
// logo container styles
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap : 0.2rem;

    .text {
        font-size: 1.5rem;
        font-weight: 800;
        background: linear-gradient(to right, blue, red);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
// logo image styles
export const LogoImage = styled.img`
    height:25px ;
`
// welcome text styles
export const WelcomeText = styled.span`
    font-size: 2rem;
    letter-spacing:1px ;
    font-weight: 600;
    margin:auto ;
    color : #3F00FF;
`

// smaller text styles
export const SmallerText = styled.span`
    font-size:0.8rem ;
    font-weight: 300;
    color:grey ;
    margin: auto ;
    
`
// smaller container styles
export const SmallerContainer = styled.div`
    margin:auto ;
    margin-top:2rem ;
    width:40% ;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    padding-bottom:1rem ;
`
// top header styles
export const TopHeader = styled.div`
    display: flex;
    flex-direction:row ;
    width : 100%;
    margin-bottom:1.5rem ;

`
// phone number styles
export const PhoneNumber = styled.div`
    width : 50%;
    text-align:center ;
    background-color:rgba(0, 0, 0, 0.3);
    padding:0.7rem 0 ;
    cursor:pointer ;
    color:white ;
`

// email styles
export const Email = styled.div`
    width : 50%;
    text-align:center ;
    background-color:rgba(0, 0, 0, 0.3) ;
    padding:0.7rem 0 ;
    cursor:pointer ;
    color:white ;
`
// login form styles
export const LoginForm = styled.form`
    display: flex;
    flex-direction:column ;
    width:100% ;
    gap : 1.5rem;
    padding:0 1rem ;
`
//sign in input container styles
export const SignInInputCont = styled.div`
    position:relative ;

`
// img icon styles
export const ImgIcon = styled.img`
    position:absolute ;
    top : 50%;
    transform:translateY(-50%) ;
    left : 3%;
`
// sign in input styles
export const SignInInput = styled.input`
    width: 100% ;
    padding: 0.9rem 2.5rem;
    border-radius:5px ;
    border:none ;
    outline:none ;
    background-color:rgba(0, 0, 0, 0.5) ;
`

// forgot password styles
export const ForgotPassword = styled(Link)`
    color : rgba(0, 0, 0, 0.5);
    text-decoration:none ;
    display: block;
    text-align:right ;
    cursor: pointer ;
    margin-top:-0.5rem ;
    font-weight: 400;
`
// login button styles
export const LoginButton = styled.button`
    width:100% ;
    letter-spacing:1px ;
    background-color: #3F00FF;
    color : white;
    padding : 0.8rem 1.3rem;
    font-weight:500 ;
    font-size:0.9rem ;
    outline : none;
    border: none;
    border-radius:10px ;
    cursor: pointer;
    letter-spacing:1px ;
    text-transform:uppercase ;
`

