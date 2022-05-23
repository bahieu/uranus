import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import dsner01 from 'src/assets/imgs/dsner/dsner01.png';
import dsner02 from 'src/assets/imgs/dsner/dsner02.png';
import dsner03 from 'src/assets/imgs/dsner/dsner03.png';
import { Description, Title } from 'src/styles/Title';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0px 0 32px 140px;
`;

const ImgDsner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Designer: React.FC = () => {
  const imgDsnerList: any[] = [dsner01, dsner02, dsner03];

  return (
    <Wrapper>
      <Row>
        {imgDsnerList.map((v, i) => {
          return (
            <Col key={i}>
              <ImgDsner src={v} />
            </Col>
          );
        })}
      </Row>
      <Row className="justify-content-between">
        <Col xs={4}>
          <Title fontSize="25px" lineHeight="38px">
            Designer
          </Title>
        </Col>
        <Col xs={4}>
          <Title fontSize="25px" lineHeight="38px">
            Designer
          </Title>
        </Col>
        <Col xs={4}>
          <Title fontSize="25px" lineHeight="38px">
            Designer
          </Title>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Description fontSize="14px" lineHeight="21px">
            We exist to serve <br />
            organizations that are <br />
            making a positive social <br />
            impact.
          </Description>
        </Col>
        <Col xs={4}>
          <Description fontSize="14px" lineHeight="21px">
            We exist to serve <br />
            organizations that are <br />
            making a positive social <br />
            impact.
          </Description>
        </Col>
        <Col xs={4}>
          <Description fontSize="14px" lineHeight="21px">
            We exist to serve <br />
            organizations that are <br />
            making a positive social <br />
            impact.
          </Description>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Designer;
