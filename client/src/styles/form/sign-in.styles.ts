// import custom styles
import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

interface Props {
    hasValue : boolean
}

// signIn container styles
export const SignInContainer = styled.div`
    height: 100%;
    width:100%;
    padding:1rem 1.5rem ;
    position:relative ;
    display: flex;
    flex-direction:column ;

    @media screen and (max-width : 600px) {
        padding : 1rem 0.5rem;
    }
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
    @media screen and (max-width: 600px) {
        .logo {
            width : 2.8rem;
        }
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
    padding-top: 3rem;

    @media screen and (max-width : 600px) {
        font-size : 1.4rem;
    }
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
    border-radius : 0.5rem;

    @media screen and (max-width : 1000px) and (min-width: 700px) {
        width : 60%;
    }
    @media screen and (max-width: 700px) and (min-width : 600px) {
        width : 70%;
    }
    @media screen and (max-width: 600px) and (min-width : 500px) {
        width : 80%;
    }
    @media screen and (max-width: 500px) and (min-width : 400px) {
        width : 90%;
    }
    @media screen and (max-width: 400px) {
        width : 98%;
    }
`
// top header styles
export const TopHeader = styled.div`
    display: flex;
    flex-direction:row ;
    width : 100%;
    margin-bottom:1.5rem ;
    border-radius : 0.5rem 0.5rem 0rem 0rem;

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

    .interests {
        font-family : TT Firs, "sans-serif";
        border : none;
        outline: none;
        text-decoration : none;
        border-color : unset;
        width : 90%;
        margin : auto;
        font-size : 1rem;


        .css-13cymwt-control {
            background : unset;
            border-color : unset;
            border-radius : unset;
            border-style : unset;
            border-bottom: solid 1px grey;
            
        }
        .css-t3ipsp-control {
            outline : none !important;
            text-decoration : none !important;
            border : none;
            border-radius : unset;
            border-bottom: solid 1px grey;
            background: unset !important;
            box-shadow: unset;
        }
        .css-1u9des2-indicatorSeparator{
          display : none;
        }
        input, input:focus, input:hover, input:after {
            outline : none !important;
            text-decoration : none !important;
            border: none !important;
            background: unset !important;
        }

        .css-qbdosj-Input {
            padding-left: 2rem;
        }
    }
 
   .label {
            transform: translateY(-20px);
            font-size: 0.8rem;
            color: black;
            padding:0.1rem 0.2rem ;
            border-radius:1px ;
            top : 1px;
            font-family : TT firs, "sans-serif";
      }
    
    .img {
        position:absolute ;
        top : 50%;
        transform:translateY(-50%) ;
        left:  5% ;
        width: 1rem;
    }
    .css-1jqq78o-placeholder {
        padding-left: 2rem;
    }
    .css-1p3m7a8-multiValue {
        // margin-left : 16px;
    }
    .css-3w2yfm-ValueContainer {
        margin-left : 12px;
    }
    .css-166bipr-Input {
        padding-left : 2rem;
    }
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
    font-family : TT firs, "sans-serif"
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

