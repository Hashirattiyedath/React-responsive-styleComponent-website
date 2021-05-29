import React from "react";
import styled from "styled-components";
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from "react-icons";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;
`;

const TopContainer = styled.div`
  width: 100%;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0 10px;
`;

const Title = styled.div`
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  color: #000;
  text-align: start;
  margin-bottom: 20px;
`;

const SpecialistName = styled.h4`
  margin: 0;
  color: rgba(151, 151, 151, 1);
  font-size: 12px;
  font-weight: 400;
`;

const RatingContainer = styled.div`
  display: flex;
  color: #ebe204;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StartingAtText = styled.h6`
  margin: 0;
  color: rgb(161, 161, 161);
  font-weight: 400;
`;

const PriceText = styled.div`
  margin-left: 3px;
  color: #2ba679;
  font-weight: 700;
`;

const Line = styled.hr `
  color: rgba(0, 0, 0, 0.65);
`;

const ServiceCard = (props) => {

 const {thumbnailUrl, specialist, title, id, rating, rate} = props;

  return (
    <>
      <IconContext.Provider value={{ size : "1em", }}>
        <CardContainer>
          <TopContainer>
            <ServiceThumbnail>
              <img src={thumbnailUrl} alt={title} />
            </ServiceThumbnail>
          </TopContainer>

          <ContentContainer>
            <Title>{title}</Title>
            <SpecialistName>{specialist.fullName}</SpecialistName>
          </ContentContainer>

              <Line />
              
          <BottomContainer>
              <RatingContainer>
                  <AiFillStar/> {rating}
              </RatingContainer>
              <PriceContainer>
                  <StartingAtText>STARTING AT</StartingAtText>
                  <PriceText>{rate}</PriceText>
              </PriceContainer>
          </BottomContainer>
        </CardContainer>
      </IconContext.Provider>
    </>
  );
};

export default ServiceCard;
