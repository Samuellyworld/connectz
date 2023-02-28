// import custom styles
import { Button, DropdownWrapper,
         DropdownOptions,DropdownOption, 
         HeaderContainer,HeaderLinkItem,
         HeaderProfileImg, LeftSide, Logo, 
         RightSide, LeftImageContainer } from "../styles/landing/header.styles";

//  import relevant react hooks and for types
import { Dispatch, SetStateAction, useState } from "react";

// JSX Component
const Header: () => JSX.Element = () => {
  
// react state initial boolean
const [isOpen, setIsOpen] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  
//to check if user exists
const user : boolean = false; 

  return (
    <>
        <HeaderContainer>
            <LeftSide>
              <LeftImageContainer>
                <Logo src ='/assets/png/logo.png' alt="landing icon" />
              </LeftImageContainer>
            </LeftSide>
            {
              user ? (
                <RightSide>
                      <HeaderLinkItem>DISCOVER</HeaderLinkItem>
                      <HeaderLinkItem>BODY</HeaderLinkItem>              
                    <DropdownWrapper>
                      <HeaderProfileImg 
                         src = '/assets/jpg/image1.jpg' 
                         alt="splash image" 
                         onMouseEnter={() => setIsOpen(!isOpen)}
                         onMouseLeave={() => setIsOpen(!isOpen)}
                        />
                       <DropdownOptions isOpen={isOpen}>
                        <DropdownOption >My Profile</DropdownOption>
                        <DropdownOption>Settings</DropdownOption>
                        <button className="logOutButton">Log Out</button>
                      </DropdownOptions>
                    </DropdownWrapper> 
                </RightSide>
              ):
              (
                <RightSide>
                  <Button >Sign In</Button>
                  <Button >Sign Up</Button>
                </RightSide>
              )
            }
        </HeaderContainer>
    </>
  )
}

export default Header;