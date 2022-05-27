import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import chart from 'src/assets/imgs/pricing/pricing.png';
import { Description, Title } from 'src/styles/Title';
import arrow from 'src/assets/imgs/header/Vector 1.png';

const Wrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: -206px;
  width: 1249px;
  background-color: #fff;
  box-shadow: 0px 11px 10px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  padding: 46px;
  .btn {
    margin-top: 250px;
  }
`;

const ImgChart = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonViewMore = styled.span`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.borderColor};
  padding: 12px 18px 12px 50px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.borderColor};
  }
  .img {
    width: 20px;
    height: 10px;
  }
`;

const Pricing: React.FC = () => (
  <Wrapper>
    <Row className="justify-content-between">
      <Col xs={4} className="content">
        <Title lineHeight="52px" fontSize="35px">
          We grow businesses by creating unified brand experiences people love.
        </Title>
        <Description fontSize="18px" lineHeight="27px">
          By choosing a set of colors, {"you'll"} train a neural network powered
          algorithm to generate colors you like and block ones you don’t, right
          in your browser.
        </Description>
        <ButtonViewMore className="btn">
          View more <img src={arrow} className="img" />
        </ButtonViewMore>
      </Col>
      <Col xs={5}>
        <ImgChart src={chart}></ImgChart>
      </Col>
    </Row>
  </Wrapper>
);
export default Pricing;
