import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: inline-block;
    padding-top: 100px;
    padding-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
`;

const Banner = styled.h1`
    font-family: Calibre-Medium;
    font-size: 150px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 150px;
    font-weight: normal;
    margin: 0px;
`;

const Subtitle = styled.h2`
    font-family: Calibre-Medium;
    font-size: 48px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: right;
    font-weight: normal;
    margin: 0px;
`;

const Title = () => (
    <Container>
      <Banner>Revision</Banner>
      <Subtitle>W/ Supply</Subtitle>
    </Container>
  );

export default Title;