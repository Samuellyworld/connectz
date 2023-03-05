import styled from "styled-components";

export const EditProfileContainer = styled.div`
    position:absolute ;
    top : 55%;
    left : 50%;
    transform: translate(-50%, -50%);
    padding:1rem ;
    width:40%;
    background-color:whitesmoke ;
    z-index: 100 ;
    border-radius:10px ;
    box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.15);

    .interests {
        flex:5 ;
        padding:0.5rem;
        outline : none;
        border:none ;
        border-radius:5px ;
        font-size : 0.8rem;

        @media screen and (max-width : 400px) {
            width : 100%;
        }
    }

    @media screen and (max-width : 1050px) and (min-width : 800px){
        width : 55%;
    }
    @media screen and (max-width : 800px) and (min-width : 620px) {
        width : 65%;
    }
    @media screen and (max-width : 620px) and (min-width : 522px) {
        width : 75%;
    }
    @media screen and (max-width : 522px) and (min-width: 477px) {
        width : 85%;
        top: 49%;
    }
    @media screen and (max-width : 477px) {
        width : 95%;
        top: 50%;
    }
`

export const EditProfileHeader = styled.span`
    font-size:1.7rem ;
    display: block;
    text-align: center;
    font-weight: bold;
    color : #3F00FF;
`

export const EditProfileInputCont = styled.form`
    display: flex;
    flex-direction:column ;
    gap: 1.5rem;
    padding:1rem ;
`
export const EditProfileSmallerCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap : 1rem;

    @media screen and (max-width : 400px) {
        flex-direction : column;
        gap: 0.5rem;
    }
`

export const EditProfileLeft = styled.span`
    flex:3 ;
    display: block;
    font-size:0.8rem ;
`

export const EditProfileInput = styled.input`
    flex:5 ;
    padding:0.5rem;
    outline : none;
    border:none ;
    border-radius:5px ;
    font-size : 0.8rem;

    @media screen and (max-width : 400px) {
        width : 100%;
    }
`

export const EditButtonContainer = styled.div`
    width:100% ;
    padding:1rem ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top:1rem ;
`
export const EditButton = styled.button`
    background-color: #3F00FF;
    color : white;
    padding : 0.5rem 1.5rem;
    font-weight:500 ;
    font-size:0.9rem ;
    outline : none;
    border: none;
    border-radius:10px ;
    cursor: pointer;
`