// import relevant react hooks and  react custom types
import { Dispatch, SetStateAction, useState } from "react";

// import custom styles
import { BigText, ImageContainer, 
         MainContainer, MainLeft, 
         MainRight, RightImage, 
         SmallText, TextContainer
       } from "../styles/landing/splash.styles";

// import component types

// JXX building block
const Main : () => JSX.Element = () => {

    // set initial 
    const [isHovered, setIsHovered] : [boolean,  Dispatch<SetStateAction<boolean>>] = useState(false);
// building block
  return (
    <MainContainer>
        <MainLeft>
            <TextContainer>
                <BigText>Connectz</BigText>
                <SmallText>As humans, we are inherently social creatures. We crave connection and thrive when we have a sense of community around us. Yet, with the fast-paced nature of our modern lives, it can be challenging to find like-minded individuals who share our passions and interests. This is where our website comes in.Our platform is designed to bring people together based on their individual interests and differences. We believe that diversity and inclusivity are what make communities truly thrive. By connecting individuals who may have otherwise never crossed paths, we hope to foster meaningful relationships and facilitate the exchange of ideas and experiences.Our website is more than just a tool for making new friends or finding people to collaborate with on projects. It is a space where individuals can connect on a deeper level, sharing their personal stories and experiences. We believe that these connections can have a transformative effect not just on individuals, but on society as a whole.</SmallText>
            </TextContainer>
        </MainLeft>
        <MainRight>
            <ImageContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <RightImage src='/assets/jpg/image1.jpg' style={{
              transform: isHovered ? 'translateX(40px)' : 'none',
          }}/>
            </ImageContainer>
        </MainRight>
    </MainContainer>
  )
}

export default Main