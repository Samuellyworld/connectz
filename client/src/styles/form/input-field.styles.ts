
// import custom styles
import styled, {css} from "styled-components";

// props types
interface Props {
   hasValue : boolean,
   toValidate :  boolean,
}


// input container styles
export const InputContainer = styled.div`
  position: relative;
`;

// input field styles field
export const InputField = styled.input<Props>`
  display : flex;
  justify-content : center;
  align-items: center;
  border: none;
  font-size: 1rem;
  padding: 10px;
  width: 90%;
  outline: none;
  background-color: whitesmoke;
  border-bottom : solid 1px grey;
  padding-left: 2.5rem;

  margin: auto;
  font-family : TT firs, "sans-serif";


  &:focus {
    background-color:whitesmoke ;
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      & ~ label {
        transform: translateY(-20px);
        font-size: 0.8rem;
        color: black;
        padding:0.1rem 0.2rem ;
        border-radius:1px ;
        top : 1px;
        font-family : TT firs, "sans-serif";
      }
    `}
`;
// input label styles
export const InputLabel = styled.label`
  position: absolute;
  padding-left:1.8rem ;
  top: 10px;
  left: 10px;
  font-size: 1rem;
  color: #999;
  transition: all 0.2s ease-out;
  font-family : TT firs, "sans-serif";
`;

// icon png styles
export const IconPNG = styled.img`
  position:absolute ;
  top : 50%;
  transform:translateY(-50%) ;
  left:  5% ;
`
// error message styles
export const ErrorMessage = styled.div`
  position: absolute;
  right: 0;
  top: -1.1rem; /* adjust this value to align with the input field */
  color: red; /* or any other color that you prefer */
  font-size: 0.8rem;
  font-weight: 200;
  font-family : TT firs, "sans-serif";
`;