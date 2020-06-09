import React from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import { Icon } from "../../images/SupplyLogoWhite.svg";

const Container = styled.div`
    align
    padding-top: 100px;
    padding-bottom: 100px;
`;

const Statement = styled.h3`
    font-family: TiemposText-Regular;
    font-size: 24px;
    font-weight: normal;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 34px;
    grid-column:1/3;
`;

const Substatement = styled.h4`
    font-family: Calibre-Semibold;
    font-size: 24px;
    font-weight: normal;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 30px;
    grid-column: 1/3;
`;

const FeatureContainer = styled.div`
    display:grid;
    alignItems:center;
    grid-template-columns: auto auto auto;
    grid-gap: 117px;

    FeatureCard{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Features = () => (
    <Container>
      <Statement>We will help you build and publish your eCommerce website.</Statement>
      <Substatement>Here's how we can help.</Substatement>
      <FeatureContainer>
        <FeatureCard icon= {<g id="SUPLY-/-Desktop13-/-Covid19" transform="translate(-122.000000, -1872.000000)" stroke="#2F808D"><circle id="Oval" cx="213" cy="1963" r="90.5"></circle></g>}
        msg="We will audit your exisiting site to determine the best way to integrate." />
        <FeatureCard icon={Icon} msg="We will audit your exisiting site to determine the best way to integrate." />
        <FeatureCard icon={Icon} msg="We will audit your exisiting site to determine the best way to integrate." />
      </FeatureContainer>
    </Container>
  );

export default Features;