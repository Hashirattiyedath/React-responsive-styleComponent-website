import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import {PageContainer, InnerPageContainer } from "../../components/pageContainer/";
import TopSection from "./TopSection";
import deviceWidth from "../../components/responsive/";
import ServiceCard from "../../components/serviceCard/";
import Services from "./services";
import SpecialistAd from "../../components/specialistAd";
import Footer from "../../components/footer";



const ContentContainer = styled.div `
  width: 100%;
  max-width: ${deviceWidth.laptop}px;
  margin: auto;
  padding: 2em 0;
`;

// jst testing purposes
// const service =  {
//       "id": 1,
//       "title": "I will landscape your garden",
//       "thumbnailUrl": "http://localhost:9000/garden.jpg",
//       "rate": 34,
//       "rating": 4,
//       "specialist": {
//         "id": 1,
//         "fullName": "Sara Wilson"
//       }
//   };

const HomePage = () => {
    {/* oru fucntional componeninte akath mattoru functional component add
        cheyyuka aanenkil Ath "props.children" vachitte access cheyyan kazhiyu */}
  return (
    <>
      <PageContainer>
        <TopSection>
          <Navbar useTransparent/>
        </TopSection>
        <InnerPageContainer>
          <ContentContainer>
            <Services />
          </ContentContainer>
          <SpecialistAd />
        </InnerPageContainer>

        <Footer />
      </PageContainer>
    </>
  );
};

export default HomePage;
