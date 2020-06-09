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
    line-height: 32px;
`;

const BodyCopy = styled.p`
    font-family: Calibre-Regular;
    font-size: 21px;
    font-weight: normal;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: Left;
    line-height: 30px;
`;

const ValueBlurb = () => (
    <Container>
      <Statement>We’re offering our services pro bono <br />to support our community.</Statement>
      <BodyCopy>
      The stay-at-home order has helped to flatten the curve in the spread of COVID-19. Unfortunately, that has also meant that businesses and their employees have been hurting as they try to adjust their offerings in this new reality. Even with businesses beginning to re-open in a “stage one” capacity, the desire for a digital eCommerce website remains strong.
<br/><br/>
We want to offer our services to help you build a strong online offering. Your business will only be responsible for small costs related to website hosting and any online services used. In doing this, we strengthen each other and we strengthen our community.
      </BodyCopy>
    </Container>
  );

export default ValueBlurb;