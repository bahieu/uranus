import React from 'react';
import styled from 'styled-components';

import dsner01 from 'src/assets/imgs/dsner/dsner01.png';
import dsner02 from 'src/assets/imgs/dsner/dsner02.png';
import dsner03 from 'src/assets/imgs/dsner/dsner03.png';
import { Col, Container, Row } from 'react-bootstrap';
import { Description, Title } from 'src/styles/Title';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

// List designer
const DsnerList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 50px 0 32px 300px;
  gap: 34px;
  .grid__item-4 {
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 1;
  }
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
      <div>
        <DsnerList>
          {imgDsnerList.map((v, i) => {
            return (
              <div key={i} className={i === 3 ? 'grid__item-4' : undefined}>
                <ImgDsner src={v} />
              </div>
            );
          })}
        </DsnerList>
        <Container>
          <Row className="d-flex justify-content-between">
            <Col xs={2}>
              <Title lineHeight="38px" fontSize="25px">
                Designer
              </Title>
              <Description lineHeight="21px" fontSize="14px">
                We exist to serve organizations that are making a positive
                social impact.
              </Description>
            </Col>
            <Col xs={2}>
              <Title lineHeight="38px" fontSize="25px">
                Designer
              </Title>
              <Description lineHeight="21px" fontSize="14px">
                We exist to serve organizations that are making a positive
                social impact.
              </Description>
            </Col>
            <Col xs={2}>
              <Title lineHeight="38px" fontSize="25px">
                Designer
              </Title>
              <Description lineHeight="21px" fontSize="14px">
                We exist to serve organizations that are making a positive
                social impact.
              </Description>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Designer;
