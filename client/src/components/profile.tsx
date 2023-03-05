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
    // const handleClick = () => {
    //     setIsOpen(!isOpen)
    //     console.log(profileDetails?.interests)
    // }
    useEffect(() => {
        handleGetProfile(currentUser, setProfileDetails)
    }, [])
  return (
      <>
        <Header bool={true}/>
           {
            profileDetails.length === 0 || !profileDetails ? 
             <Spinner/>
           : 
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
                   {
                       profileDetails?.interests?.map(
                         (interest : string, i : number) => (
                           <ProfileInterest key={i}>
                               {interest}
                           </ProfileInterest>
                       ))
                   }
               </ProfileInterests>
           </ProfilePageLeft>
           <ProfilePageRight>
               <ProfileName>@{profileDetails?.username}</ProfileName>
               <ProfileTitle>{profileDetails?.email}</ProfileTitle>

               <ProfileOption>
                   <ProfileAboutOption><ProfileIcon src ="/assets/png/Vector.png" /> About</ProfileAboutOption>
               </ProfileOption>

               <ProfileInfoCont>
                   <ProfileTopContainer>
                       <span className="ProfileText">CONTACT INFORMATION</span>
                       <span className="EditProfileText" onClick={() => setIsOpen(!isOpen)}>Edit Profile</span>
                   </ProfileTopContainer>
                   <ProfileInfoItem>
                       <ProfileInfoLeft>Username: </ProfileInfoLeft>
                       <ProfileInfoRight>{profileDetails?.username}</ProfileInfoRight>
                   </ProfileInfoItem>
                   <ProfileInfoItem>
                       <ProfileInfoLeft>Phone: </ProfileInfoLeft>
                       <ProfileInfoRight>{profileDetails?.phone}</ProfileInfoRight>
                   </ProfileInfoItem>
                   <ProfileInfoItem>
                       <ProfileInfoLeft>Email: </ProfileInfoLeft>
                       <ProfileInfoRight>{profileDetails?.email}</ProfileInfoRight>
                   </ProfileInfoItem>
               </ProfileInfoCont>
           </ProfilePageRight>
            {
               isOpen ? (<EditProfile setIsOpen = {setIsOpen} isOpen = {isOpen} />) : <></>
            }  
          </ProfilePageContainer>
           }
        
    </>
  )
}

export default Profile;