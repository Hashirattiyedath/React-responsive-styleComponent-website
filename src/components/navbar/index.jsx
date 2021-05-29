import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BrandLogo from "../brandLogo";
import Button from "../button";
import deviceWidth from "../responsive";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  background: ${(props)=> props.transparent ? "rgba(0, 0, 0, 0.658)" : "#2a9d8f" };
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorTag = styled.a`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  display: inline-block;
  padding-inline: 15px;
  text-transform: uppercase;

  &:hover {
    filter: contrast(0.8);
  }
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;


function Navbar(props) {
  const {useTransparent} = props;

  const isMobile = useMediaQuery({ maxWidth: deviceWidth.mobile });
  console.log(isMobile)

  return (
    <>
      <NavbarContainer transparent={useTransparent}>
        <BrandLogo logoSize="40" textSize="30" />
        {!isMobile &&
        <AccessibilityContainer>
          <AnchorTag>Specialist Portal</AnchorTag>
          <Seperator />
          <Link to="/customer/access?action=register">
            <Button size="14" margin="none">Register</Button>
          </Link>
          <AnchorTag>Specialist Portal</AnchorTag>
        </AccessibilityContainer>
        }
      </NavbarContainer>
    </>
  );
}

export default Navbar;