import React from "react";
import styled from "styled-components";

const Container = styled.div`
    // width:200px;
    diplay:inline-grid;
    grid-template-column: auto;
    grid-template-rows: auto auto;
    grid-gap: 20px;
`;

const Icon = styled.svg`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const Description = styled.p`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const FeatureCard = props => (
    <Container>
        <Icon>{props.icon}</Icon>
        <Description>{props.msg}</Description>
    </Container>
  );

export default FeatureCard;