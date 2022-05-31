import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import icon from 'src/assets/imgs/header/Union.png';
import { navbar } from '../../data/navbar';
import navIcon from 'src/assets/imgs/header/menuIcon.png';

const Wrapper = styled.header`
  background-color: transparent;
  padding-top: 50px;
  transition: color 0.3s linear;
  position: absolute;
  z-index: 2;
  width: 100%;
  @media only screen and (max-width: 739px) {
    .navIcon-mobile {
      position: absolute;
      left: 7%;
      transform: translateX(-10%);
    }
  }
`;

const ImgIcon = styled.img`
  width: 100px;
  cursor: pointer;
  @media only screen and (max-width: 739px) {
    filter: brightness(0) invert(1);
    -webkit-filter: brightness(0) invert(1);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyleLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding-left: 45px;

  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;

const NavbarIcon = styled.img`
  width: 24px;
  height: 17px;
  opacity: 1;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  @media only screen and (min-width: 740px) {
    display: none;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-lg-between align-baseline">
          <Col lg={2} className="p-0">
            <NavbarIcon src={navIcon} className="navIcon-mobile" />
            <ImgIcon src={icon} />
            <Overlay />
          </Col>
          <Col lg={8}>
            <ul className="text-end">
              {navbar.map((v, i) => {
                return (
                  <StyleLink to={v.href} key={i}>
                    {v.navItem}
                  </StyleLink>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
