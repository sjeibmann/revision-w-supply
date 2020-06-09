import React from "react";
import styled from "styled-components";
import logo from '../images/SupplyLogoWhite.png';
// import Logo from './images/SupplyLogoWhite.svg';

const Container = styled.div`
    align-items: left;
    padding: 60px 0 0;

    img{
        top: 50px;
        left: 40px;
        margin-left: 40px;
        max-width: 104px;
    }
`;

const Header = () => (
    <Container>
        <img src={logo} alt="Logo" />
    </Container>
  );

export default Header;