import Header from "./header";
import { ProfileImageCont,ProfileIcon, 
         ProfileInterest,ProfileImage, 
         ProfileInterests, ProfilePageContainer,
         ProfilePageLeft, ProfilePageRight, 
         ProfileInterestsHeader, ProfileName, 
         ProfileTitle, ProfileOption,
         ProfileAboutOption, ProfileInfoItem,
         ProfileInfoLeft, ProfileInfoRight, 
         ProfileInfoCont, ProfileTopContainer, BackgroundLayer 
      } from "../styles/profile/profile.styles";


import EditProfile from "./edit";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { handleGetProfile } from "../utils/requests";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Spinner from "./spinner";

// profile JSX component
const Profile : () => JSX.Element = () => {
    const [isOpen, setIsOpen] : [boolean , Dispatch<SetStateAction<boolean>>] = useState(false);
    const [profileDetails, setProfileDetails] : any = useState([])
    const currentUser : string = useSelector((state : RootState) => 
       state?.currentUser?.currentUser?.token  
    )
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        setProfileDetails(handleGetProfile(currentUser))
    }, [])
  return (
      <>
        <Header />
           {
            profileDetails ? 
            <ProfilePageContainer isOpen= {isOpen}>
            {
                isOpen ? (<BackgroundLayer />) : <></>
            }
            <ProfilePageLeft>
                <ProfileImageCont>
                    <ProfileImage src ="/assets/jpg/background.jpg"/>
                </ProfileImageCont>
                <ProfileInterests>
                    <ProfileInterestsHeader>Interests</ProfileInterestsHeader>
                    <ProfileInterest>
                        BasketBall
                    </ProfileInterest>
                    <ProfileInterest>
                        VolleyBall
                    </ProfileInterest>
                    <ProfileInterest>
                        Table Tennis
                    </ProfileInterest>
                </ProfileInterests>
            </ProfilePageLeft>
            <ProfilePageRight>
                <ProfileName> Segunmaru Faozan</ProfileName>
                <ProfileTitle>Software Developer</ProfileTitle>

                <ProfileOption>
                    <ProfileAboutOption><ProfileIcon src ="/assets/png/Vector.png" /> About</ProfileAboutOption>
                </ProfileOption>

                <ProfileInfoCont>
                    <ProfileTopContainer>
                        <span className="ProfileText">CONTACT INFORMATION</span>
                        <span className="EditProfileText" onClick={() => handleClick()}>Edit Profile</span>
                    </ProfileTopContainer>
                    <ProfileInfoItem>
                        <ProfileInfoLeft>Username: </ProfileInfoLeft>
                        <ProfileInfoRight>Faozy</ProfileInfoRight>
                    </ProfileInfoItem>
                    <ProfileInfoItem>
                        <ProfileInfoLeft>Phone: </ProfileInfoLeft>
                        <ProfileInfoRight>+234 80 7875 4215</ProfileInfoRight>
                    </ProfileInfoItem>
                    <ProfileInfoItem>
                        <ProfileInfoLeft>Email: </ProfileInfoLeft>
                        <ProfileInfoRight>Segunfaozan112@gmail.com</ProfileInfoRight>
                    </ProfileInfoItem>
                </ProfileInfoCont>
            </ProfilePageRight>
             {
                isOpen ? (<EditProfile setIsOpen = {setIsOpen} isOpen = {isOpen} />) : <></>
             }  
           </ProfilePageContainer>
           : 
           <Spinner/>
           }
        
    </>
  )
}

export default Profile;