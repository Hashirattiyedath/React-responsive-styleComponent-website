import React from 'react';
import styled from 'styled-components';
import BrandLogo from '../brandLogo';
import FarmingImg from "../../images/farming.png"
import { Marginer } from '../marginer';
import Button from '../../components/button';
import deviceWidth from '../responsive';

const SpecialistAdContainer = styled.div `
    width: 100%;
    height: 500px;
    display: flex;
    background-color: #264653;
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SloganContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 5em;
`;

const Slogan = styled.h2 `
    margin: 0;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    line-height: 1.3;
    text-align: start;

    @media(max-width: ${deviceWidth.mobile}px) {
        font-size: 20px;
    }
`;

const StandoutImg = styled.div `
    width: 35em;
    height: 29em;

    img {
        width: 100%;
        height: 100%;
    }
`;

const SpecialistBtn = styled(Button) `
    background-color: #626262;
`;

const SpecialistAd = () => {
    return (
        <>
            <SpecialistAdContainer>
                <ContentContainer>
                    <SloganContainer>
                        <BrandLogo logoSize="70" textSize="35"/>
                        <Marginer direction="verticle" margin={20}/>
                        <SloganContainer>
                            <Slogan>You are specialist and You</Slogan>
                            <Slogan>Have any outstanding</Slogan>
                            <Slogan>services to offer ?</Slogan>
                        </SloganContainer>
                        <Marginer direction="verticle" margin={10} />
                        <SpecialistBtn>JOIN WITH US</SpecialistBtn>
                    </SloganContainer>

                    <StandoutImg>
                        <img src={FarmingImg} alt="join us specialist"/>
                    </StandoutImg>
                    
                </ContentContainer>
            </SpecialistAdContainer>
        </>
    )
}

export default SpecialistAd;