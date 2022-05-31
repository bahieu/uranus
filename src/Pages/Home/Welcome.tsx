import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

import person1 from 'src/assets/imgs/person/person1.png';
import person2 from 'src/assets/imgs/person/person2.png';
import person3 from 'src/assets/imgs/person/person3.png';
import person4 from 'src/assets/imgs/person/person4.png';
import person5 from 'src/assets/imgs/person/person5.png';
import { Title, Description } from 'src/styles/Title';

const Wrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: -150px;
  width: 800px;

  @media only screen and (max-width: 739px) {
    width: auto;
    top: -190px;
  }

  @media only screen and (max-width: 739px) {
    .content-mobile {
      flex-direction: column;
      justify-content: center;
    }
  }
  .title-mobile {
    font-size: 32px;
    line-height: 48px;
    text-align: center;
  }

  .des-mobile {
    text-align: center !important;
    font-size: 18px;
    line-height: 27px;
  }
`;

const WebSmall = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.backgroundColorWebSmall};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 60px;
  @media only screen and (max-width: 739px) {
    margin-bottom: 40px;
  }
`;

const Url = styled.div`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #fff;
  padding: 12px 20px;
`;

const Circle = styled.div<{ color: string; index: number }>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
  margin-left: ${({ index }) => (index === 1 ? '8px' : undefined)};
  margin-right: ${({ index }) => (index === 1 ? '8px' : undefined)};
  display: inline-block;
`;

const PersonList = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 16px;
  .grid__item-2 {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const ImgPerson = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Welcome: React.FC = () => {
  const colorCircleList: string[] = ['#F56565', '#EE9A1C', '#57DA42'];
  const imgList: any[] = [person1, person2, person3, person4, person5];

  return (
    <Wrapper>
      <div>
        <Container>
          <WebSmall>
            <Url>
              {colorCircleList.map((v, i) => {
                return <Circle key={i} color={v} index={i} />;
              })}
            </Url>
            <PersonList>
              {imgList.map((v, i) => {
                return (
                  <div key={i} className={i === 1 ? 'grid__item-2' : undefined}>
                    <ImgPerson src={v} />
                  </div>
                );
              })}
            </PersonList>
          </WebSmall>
          <Row className="justify-content-between align-items-center content-mobile">
            <Col xs={6} sm={4} md={6}>
              <Title lineHeight="81px" fontSize="54px" className="title-mobile">
                Welcome Uranus.
              </Title>
            </Col>
            <Col xs={6} sm={8} md={6}>
              <Description
                fontSize="18px"
                fontWeight="400"
                lineHeight="27px"
                className="text-end des-mobile"
              >
                By choosing a set of colors, {"you'll"} train a neural network
                powered algorithm to generate colors you like and block ones you
                don’t, right in your browser.
              </Description>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Welcome;
