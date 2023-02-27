import styled from "styled-components";


interface Props {
    isOpen : boolean
}

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row ;
    padding: 1rem 3rem;
    justify-content:space-between ;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    height:11vh ;
`

export const LeftSide = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
`
export const RightSide = styled.div`
    flex : 0.4;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Logo = styled.img`
    max-height:2.5rem ;
`
export const LeftImageContainer = styled.div ``
export const Button = styled.button`
    margin-right:3rem ;
    padding:0.5rem 1.5rem ;
    font-size:0.9rem ;
    border-radius:10px ;
    outline:none ;
    border:none ;
    background-color:black ;
    color:white ;
    cursor: pointer;
`

export const HeaderProfileImg = styled.img`
    height:8vh ;
    aspect-ratio: 1;
    border-radius: 50%;
    cursor: pointer;
`

export const DropDownMenu = styled.div`
    position: relative;
`

export const HeaderLinkItem = styled.a`
    font-size :0.9rem;
    font-weight: 500;
    cursor:pointer ;
    letter-spacing:1px ;
    color : rgba(0, 0, 0, 0.5);
`

export const DropDownCont = styled.ul`
 position: absolute;
  top: 3.5rem;
  left: 50%;
  transform:translateX(-50%) ;
  list-style: none;
  border-radius: 5px;
  background-color:green ;
`

export const DropDownItem = styled.li`
    cursor: pointer;
`

export const DropdownOption = styled.a`
  width: 100%;
  display: block;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  cursor: pointer;
  text-align:center ;
  padding : 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-bottom:1px solid #3F00FF;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const DropdownOptions = styled.div<Props>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  left: 50%;
  transform:translateX(-50%) ;
  width: 10rem;
  z-index: 1;
  background-color: #f9f9f9;
  padding: 1rem 1rem;
  border: 1px solid #ddd;
  border-top: none;
  border-radius:15px ;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);


  

  .logOutButton {
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    outline : 1px solid rgba(0, 0, 0, 0.15);
    margin: auto;
    margin-top: 1rem;
    background-color: #3F00FF;
    color : white;
    padding : 0.4rem 1.3rem;
    font-weight:500 ;
    font-size:0.8rem ;
    outline : none;
    border: none;
    border-radius:10px ;
    cursor: pointer;
  }
`;



export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width:fit-content;

  &:hover ${DropdownOptions} {
    display: block;
  }
`;
