import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    // grid-template-columns:960px;
    padding-top: 100px;
    padding-bottom: 100px;
    // max-width: 940px;
    // margin-left: auto;
    // margin-right: auto;
`;

const Statement = styled.h3`
    font-family: TiemposText-Regular;
    font-size: 28px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 42px;
    font-weight: normal;
`;

const Button = styled.button`
    // max-width: 200px;
    font-family: ISOv0.6-Regular;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.4px;
    text-align: center;
    border: 1px solid #FFFFFF;
    border-radius: 19px;
    background-color: Transparent;
    letter-spacing: 0.4px;
    text-align: center;
    padding: 13px 33px 13px 33px;
`;

const Masthead = () => (
    <Container>
      <Statement>Re-open your business online in <br /> just a few days</Statement>
      <Button>Let's make it</Button>
    </Container>
  );

export default Masthead;