import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ServiceCard from "../../components/serviceCard/";
import Loader from "../../images/loader.gif";
import Button from "../../components/button/"


const ServiceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-weight: 900;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LoaderGif = styled.div `
  width: 200px;
  height: auto;
  img {
    width : 100%;
  }
`;

const WarningText = styled.h3`
  color: #ff2d2d;
  font-weight: 500;
`;

const BottomContainer = styled.div `
  width: 100%;
  text-align: center;
`;

const ViewMoreBtn = styled(Button) `
  background-color: #dfdfdf;
  color: #262626;

  &:hover {
    filter: contrast(0.8);
  }
`;


function Services() {
  const [offerServices, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);

  let isServicesEmpty = !offerServices || offerServices.length === 0;

  // null or undefined || no length in arrary
  const fetchServices = async () => {
    setLoading(true)
    try {
      const response = await Axios.get("http://localhost:9000/services");

      if (response) {
        setServices(response.data);
      }
    } catch (err) {
      console.log("error is :", err);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      <ServiceContainer>
        <Title>Most used Services and More</Title>
        <ServicesWrapper>
          {isServicesEmpty && !isLoading ? (
          <WarningText>Data is not available</WarningText>
          ) : null}

          {isLoading?  ( 
            // loader
            <LoaderGif><img src={Loader} alt="" /></LoaderGif>
            ) : (
              offerServices.map((service, idx)=> {
                return <ServiceCard key={idx} {...service}/>
              })
          )}
        </ServicesWrapper>
        {!isLoading ?  ( <BottomContainer>
          <ViewMoreBtn>Show More</ViewMoreBtn> 
          </BottomContainer>
          ) : (null) }
        
      </ServiceContainer>
    </>
  );
}

export default Services;
