import React from "react";
import styled from "styled-components";
import BrandLogo from "../../components/brandLogo";
import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import TheBestSpecialistImage from "../../images/Work only with the best.png";
import Button from "../../components/button/";
import deviceWidth from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0 -140px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
`;
const StandoutImg = styled.div`
  width: 45em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
  line-height: 1.7;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SloganText = styled.h3`
  color: white;
  line-height: 1.4;
  font-size: 30px;
  font-weight: 300;
  /* we can use also normal mediaquery here */ 
  @media (max-width: ${deviceWidth.mobile}px ) {
    font-size: 20px;
  }
`;

const TestingText = styled.p`
  font-size: 1.5em;
  color: green;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

function TopSection(props) {
  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isMobile = useMediaQuery({ maxWidth: deviceWidth.mobile });
  console.log(isMobile)
  // this variable return a boolean value

  return (
    <>
      {isMobile && <TestingText>IM IN MOBILE</TestingText>}
      {!isMobile && <TestingText>IM IN PC</TestingText>}

      <TopSectionContainer>
        {props.children}
        <BackgroundFilter>
          <LogoContainer>
            <BrandLogo
              logoSize={isMobile ? "40" : "80"}
              textSize={isMobile ? "39" : "55"}
            />
            <SloganText>Find the right Specialist</SloganText>
            <SloganText>Do Right job</SloganText>
            <Button>Read More</Button>
          </LogoContainer>

          { !isMobile && <StandoutImg>
            <img src={TheBestSpecialistImage} alt="" />
          </StandoutImg> }
        </BackgroundFilter>
      </TopSectionContainer>
    </>
  );
}

export default TopSection;
