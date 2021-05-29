import React from 'react'
import styled from 'styled-components';
import LogoImg from '../../images/logos/logo.png';

const BrandLogoContainer = styled.div `
    display: flex;
    align-items: center;
`;

const LogoImage = styled.div `
    width: ${ (props)=> props.size ? props.size + "px" : "60px"  };
    height: auto;

    img {
        width: 100%;
        height: 100%;
    } 
`;

const LogoTitle = styled.h2 `
    font-size : ${ (props)=> props.size  ? props.size + "px" : "26px"  };
    color: ${(props)=> props.textColor ? props.textColor : "#fff"};
    font-weight: 600;
    padding-left: 10px;
`;

const SloganContainer = styled.div `
    display: flex;
    flex-direction: column;
`;

const Slogan = styled.h2 `
    margin: 0;
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    line-height: 1.3;
`;

function BrandLogo(props) {

    let {logoSize, textSize, color} = props;

    return (
        <>
            <BrandLogoContainer>
                <LogoImage size={logoSize}>
                    <img src={LogoImg} alt=""/>
                </LogoImage>

                <LogoTitle textColor={color} size={textSize}>Servyces</LogoTitle>
            </BrandLogoContainer>   
        </>
    )
}

export default BrandLogo;
