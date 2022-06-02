import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import icon from 'src/assets/imgs/header/Union.png';
import { navbar } from '../../data/navbar';
import navIcon from 'src/assets/imgs/header/menuIcon.png';
import timesIcon from 'src/assets/imgs/header/times.png';
import { breakpoint } from 'src/constant/devices';

const Wrapper = styled.header`
  background-color: transparent;
  padding-top: 50px;
  transition: color 0.3s linear;
  position: absolute;
  z-index: 2;
  width: 100%;
  @media ${breakpoint.mobile} {
    .navIcon-mobile {
      position: absolute;
      left: 7%;
      transform: translateX(-10%);
    }
  }
`;

const ImgIcon = styled.img`
  width: 110px;
  cursor: pointer;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    filter: brightness(0) invert(1);
    -webkit-filter: brightness(0) invert(1);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  @media ${breakpoint.tablet} {
    width: 150px;
  }
`;

const StyleLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding-left: 45px;
`;

const NavbarIcon = styled.label``;
const NavbarImg = styled.img`
  position: absolute;
  width: 24px;
  height: 17px;
  top: 50px;
  opacity: 1;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  @media ${breakpoint.tablet} {
    width: 30px;
  }
  @media ${breakpoint.pc} {
    display: none;
  }
`;
const NavInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
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
    padding: 32px;
    text-align: center;
    &:hover {
      background-color: #ccc;
    }
  }
  @media ${breakpoint.pc} {
    display: none;
  }
  ${NavInput}:checked ~ && {
    transform: translateX(0);
  }
`;
const Overlay = styled.label`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  ${NavInput}:checked ~ && {
    display: block;
  }
`;

const NavPC = styled.ul`
  text-align: right;
  @media ${breakpoint.mobile}, ${breakpoint.tablet} {
    display: none;
  }
`;

const TimesIcon = styled.label``;
const TimesIconImg = styled.img`
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
            <NavbarIcon htmlFor="nav-mb-input">
              <NavbarImg src={navIcon} className="navIcon-mobile" />
            </NavbarIcon>
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
            <NavInput id="nav-mb-input" className="nav-input" />
            <Overlay htmlFor="nav-mb-input" />
            <NavMobile>
              <TimesIcon htmlFor="nav-mb-input">
                <TimesIconImg src={timesIcon} />
              </TimesIcon>
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
