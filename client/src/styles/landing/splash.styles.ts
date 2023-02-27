import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
    width : 100%;
    display: flex;
    flex-direction: row ;
    height:89vh ;
    background: url(../../assets/background.jpg) ;
    justify-content: center;
    margin: auto;
    
`

export const MainLeft = styled.div`
      width : 50%;
      margin: 3.5rem auto;

      @media screen and (max-width: 900px) {
        width : 100%;
      }
`

export const MainRight = styled.div`
       width : 50%;
       margin: auto;

    @media screen and (max-width : 900px) {
        display : none;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction : column;
    margin: auto;
    width: 79%;
    gap: 1rem;

    @media screen and (max-width: 600px) {
        width : 94%;
    }
`

export const BigText = styled.span`
    font-size: 2.9rem;
    font-weight: 500;
    text-align:center ;background: linear-gradient(to right, blue, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width : 600px) {
        font-size : 2rem;
    }
`

export const SmallText = styled.span`
    font-size: 1rem;
    color : rgba(0, 0, 0);
    font-family : TT firs, "sans-serif";
    text-align : justify;
`

export const ImageContainer = styled.div`
    width : 60%;
    margin: auto;
    height : 30rem;
    background-color:rgba(0, 0, 0, 0.1) ;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    overflow : hidden;

    @media screen and (max-width: 1100px) and (min-width : 900px) {
        width : 80%;
    }


`


export const RightImage = styled.img`
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  width : 100%;
  height: 100%;
  


`
