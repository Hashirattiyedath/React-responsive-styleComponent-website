import { useMediaQuery } from 'react-responsive';
import React from 'react';
import styled from 'styled-components';
import BrandLogo from '../brandLogo/';
import deviceWidth from '../responsive';

const FooterContainer = styled.div `
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 3em;
    padding-bottom: 0;
    border-top: 0.6px solid rgb(0, 0, 0, 0.3);
`;

const TopContainer = styled.div `
    width: 100%;
    display: flex;
    margin-bottom: 1em;
`;

const ContentContainer = styled.div `
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-right: 2em;
    }
`;

const BottomContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-top: 0.6px solid rgb(0, 0, 0, 0.3);
    padding: 0 10px;
`;


const LeftBottomContainer = styled.div`
  display: flex;
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2 `
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`;

const FLink = styled.a `
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;   

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Footer = ()=> {

    const isMobile = useMediaQuery({ maxWidth: deviceWidth.mobile });

    return (
        <>
            <FooterContainer>
                <TopContainer>
                    <ContentContainer>
                        <Title>Categories</Title>
                        <FLink>Car Repair</FLink>
                        <FLink>Carpentry</FLink>
                        <FLink>Landscaping</FLink>
                        <FLink>Cleaning</FLink>
                        <FLink>Home Improvement</FLink>
                        <FLink>Demolition</FLink>
                        <FLink>Management</FLink>
                        <FLink>Others</FLink>
                    </ContentContainer>
                    <ContentContainer>
                        <Title>Access</Title>
                        <FLink>Login</FLink>
                        <FLink>Join Us</FLink>
                        <FLink>Login as Specialist</FLink>
                        <FLink>Become a Specialist</FLink>
                    </ContentContainer>
                </TopContainer>
                    
                <BottomContainer>
                    <LeftBottomContainer>
                        <BrandLogo color="#626262" logoSize="0" textSize="30"/>
                    </LeftBottomContainer>
                    {!isMobile && 
                    <RightBottomContainer>ICON</RightBottomContainer>
                    }
                </BottomContainer>
            </FooterContainer>

        </>
    )
}

export default Footer;