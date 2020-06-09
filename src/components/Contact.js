import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
`;

const BodyCopy = styled.p`
    font-family: Calibre-Regular;
    font-size: 21px;
    font-weight: normal;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 30px;
`;

const Button = styled.button`
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

const Contact = () => (
    <Container>
      <Statement>Let's make it!</Statement>
      <BodyCopy>Supply believes the only way we get there is together. We value supporting your business through these changing times.
<br />
<br />
Whether you're a coffee shop, a full-service restaurant, or a retail store, we want to partner with you to help keep your business running and our community strong.
    </BodyCopy>
      <Button>Let's make it</Button>
    </Container>
  );

export default Contact;