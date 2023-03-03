// import custom styles
import styled from "styled-components";

//import Link from react-router-dom
import { Link } from "react-router-dom";


//  verfiy page container styles
export const VerifyPageContainer = styled.div`
    padding : 2rem;
    position:relative ;
    height:100vh ;
    
    .result {
        position: absolute;
        top: 73%;
        left: 50%;
        font-weight : bold;
        transform:translate(-50%, -50%) ;
        color : green;
        font-family : TT Firs, "sans-serif";

        @media screen and (max-width : 614px) and (min-width : 509px) {
            width : 60%;
        }
        @media screen and (max-width : 509px) and (min-width : 425px) {
            width : 70%;
        }
        @media screen and (max-width : 425px) and (min-width : 380px) {
            width : 80%;
        }
        @media screen and (max-width : 380px) {
            width : 90%;
            margin-top : 5px;
        }
    }

    .error {
        position: absolute;
        top: 77%;
        left: 50%;
        font-weight : bold;
        transform:translate(-50%, -50%) ;
        color : red;
        font-family : TT Firs, "sans-serif";

        @media screen and (max-width : 614px) and (min-width : 509px) {
            width : 60%;
        }
        @media screen and (max-width : 509px) and (min-width : 425px) {
            width : 70%;
        }
        @media screen and (max-width : 425px) and (min-width : 380px) {
            width : 80%;
        }
        @media screen and (max-width : 380px) {
            width : 90%;
            margin-top : 5px;
        }
    }
`
// logo container styles
export const LogoContainer = styled(Link)`
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




// verify innner container styles
export const VerifyInnerContainer = styled.div`
    position:absolute;
    box-shadow: 0 0px 2px 2px rgba(0, 0, 0, 0.2);
    top:50% ;
    left : 50%;
    transform:translate(-50%, -50%) ;
    width: 35% ;
    display: flex;
    flex-direction:column ;
    align-items: center;
    padding: 2rem;
    border-radius:5px ;

    .button_verify {
        position: absolute;
        top: -53px;
        left: 0px;
        padding: 0.5rem 2rem;
    }

    .react-tel-input .form-control {
          background: whitesmoke;
    }

    @media screen and (max-width : 1000px) and (min-width : 750px) {
        width : 50%;
    }
    @media screen and (max-width : 750px) and (min-width: 613px) {
        width : 65%;
    }
    @media screen and (max-width: 613px) and (min-width : 511px) {
        width : 75%;
    }
    @media screen and (max-width: 511px) and (min-width: 450px) {
        width : 85%;
    }
    @media screen and (max-width : 450px) {
        width : 90%;
    }
`
// verify big text styles
export const VerifyBigText = styled.span`
    font-size:1.5rem ;
    font-weight: 400;
    margin-bottom:1rem ;
    color :#3F00FF;
    font-weight: 500;

    @media screen and  (max-width: 450px) {
        font-size : 1.2rem;
    }
`

// verify small text styles
export const VerifySmallText = styled.span`
    font-size:0.8rem ;
    font-weight: 300;
    color :rgba(0, 0, 0, 0.5);
`
// verify second div styles
export const VerifySecondDiv = styled.div`
    display: flex;
    flex-direction:row ;
    gap : 1rem;
    justify-content: space-around;
    margin-top:2rem ;

`
// verify method styles
export const VerifyMethod = styled.div`
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    width:40% ;
    font-size:0.8rem ;
    font-weight: 300;
    cursor: pointer;
    text-align:center ;
    justify-content: center;
    padding:1rem ;
    border-radius:5px ;
    color : rgba(0, 0, 0, 0.5);
`

// verify input container styles
export const VerifyInputCont = styled.div`
    position:relative ;
    margin-top:1rem ;
    width: 100%;
    display: flex;
    border-bottom:1px solid rgba(0, 0, 0, 0.5) ;
    padding: 0.5rem;

`

// verify img icon styles
export const VerifyImgIcon = styled.img`
    position:absolute ;
    top : 50%;
    transform:translateY(-50%) ;
    left : 10%;
`

// verify input styles
export const VerifyInput = styled.input`
    width: 100% ;
    border-radius:5px ;
    border:none ;
    outline:none ;
`

// verify button container styles
export const VerifyButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 2rem;
`

// verify next button styles
export const VerifyNextButton = styled.button`
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
// little boxes container 
export const LittleBoxesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:100% ;
    margin-top:3rem ;
`
// little box styles
export const LittleBox = styled.input`
    width : 15%;
    aspect-ratio : 1;
    text-align:center ;
    outline:none ;
    font-size: 1.3rem;
`