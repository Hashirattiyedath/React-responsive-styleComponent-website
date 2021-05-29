import React from 'react';
import styled from 'styled-components';
import AccountBox from '../../components/accountBox';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { InnerPageContainer, PageContainer } from '../../components/pageContainer';

const StyledPageContainer = styled(InnerPageContainer) `
    /* default aayit 'InnerPageContainer'il ulla styles ellam ivide edukkum koodathe 
    thazhe ezhuthikoduthathum edukkum */
    margin-top: 2em;
`;

const CustomerAccessPage = () => {
    return (
        <>
            <PageContainer>
                <Navbar />
                <StyledPageContainer>
                    <AccountBox />
                </StyledPageContainer>
                <Footer />
            </PageContainer>
        </>
    )
}

export default CustomerAccessPage;