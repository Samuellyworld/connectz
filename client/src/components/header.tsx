// import custom styles
import { Button, DropdownWrapper,
         DropdownOptions,DropdownOption, 
         HeaderContainer,HeaderLinkItem,
         HeaderProfileImg, LeftSide, Logo, 
         RightSide, LeftImageContainer } from "../styles/landing/header.styles";

//  import relevant react hooks and for types
import { Dispatch, SetStateAction, useState } from "react";
import {Link} from 'react-router-dom';
import { headerTypes } from "../types/components.types";

// JSX Component
const Header = (props : headerTypes) => {
  
// react state initial boolean
const [isOpen, setIsOpen] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

//


  return (
    <>
        <HeaderContainer>
            <LeftSide>
              <LeftImageContainer>
                <Link to = "/"><Logo src ='/assets/png/logo.png' alt="landing icon" /></Link>
              </LeftImageContainer>
            </LeftSide>
            {
              props?.bool ? (
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
                        <Link to={"/profile"} >
                         <DropdownOption >My Profile</DropdownOption>
                        </Link>
                        
                        {/* <DropdownOption onClick={() => props?.click}>EditProfile</DropdownOption> */}
                        <button 
                         className="logOutButton"
                         onClick={() => {
                           localStorage.clear()
                            window.location.reload()
                          }}
                         >
                          Log Out
                         </button>
                      </DropdownOptions>
                    </DropdownWrapper> 
                </RightSide>
              ):
              (
                <RightSide>
                  <Link to = "/signin"><Button >Sign In</Button></Link>
                  <Link to = "/signup"><Button >Sign Up</Button></Link>
                </RightSide>
              )
            }
        </HeaderContainer>
    </>
  )
}

export default Header;