import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import icon from 'src/assets/imgs/header/Union.png';
import { navbar } from '../../data/navbar';
import navIcon from 'src/assets/imgs/header/menuIcon.png';
import timesIcon from 'src/assets/imgs/header/times.png';

const Wrapper = styled.header`
  background-color: transparent;
  padding-top: 50px;
  transition: color 0.3s linear;
  position: absolute;
  z-index: 2;
  width: 100%;
  @media (max-width: 739px) {
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
  @media (max-width: 739px) {
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

  @media only screen and (max-width: 739px) {
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
  @media (min-width: 740px) {
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
  display: none;
`;

const NavPC = styled.ul`
  text-align: right;
  @media (max-width: 740px) {
    display: none;
  }
`;
const NavMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  max-width: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-flow: column nowrap;
  transform: translateX(-100%);
  .nav__link__mobile {
    font-size: 20px;
    margin-top: 40px;
    padding: 16px 32px;
    &:hover {
      background-color: #ccc;
    }
  }
  @media (min-width: 740px) {
    display: none;
  }
`;
const TimesIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  position: absolute;
  top: 0.4rem;
  right: 1rem;
  opacity: 1;
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-lg-between align-baseline">
          <Col lg={2} className="p-0">
            <NavbarIcon src={navIcon} className="navIcon-mobile" />
            <ImgIcon src={icon} />
          </Col>
          <Col lg={8}>
            <NavPC>
              {navbar.map((v, i) => {
                return (
                  <StyleLink to={v.href} key={i}>
                    {v.navItem}
                  </StyleLink>
                );
              })}
            </NavPC>
            <Overlay />
            <NavMobile>
              <TimesIcon src={timesIcon} />
              {navbar.map((v, i) => {
                return (
                  <StyleLink to={v.href} key={i} className="nav__link__mobile">
                    {v.navItem}
                  </StyleLink>
                );
              })}
            </NavMobile>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
