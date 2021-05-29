import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  /*min-height Need more testing*/
  //padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-block: 2.4em;
`;

 function PageContainer(props) {
  return (
      <>
        {/* oru fucntional componeninte akath mattoru functional/Styled component add
        cheyyuka aanenkil Ath "props.children" vachitt access cheyyan kazhiyu */}
        {props.children}
      </>
  )
}

export {PageContainer, InnerPageContainer};