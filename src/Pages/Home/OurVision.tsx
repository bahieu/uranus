import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import view01 from 'src/assets/imgs/views/view01.png';
import view02 from 'src/assets/imgs/views/view02.png';
import view03 from 'src/assets/imgs/views/view03.png';
import next from 'src/assets/imgs/views/next.png';
import { Title } from 'src/styles/Title';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .content {
    padding: 123px 0 50px 116px;
    margin: 0;
  }
`;
const ViewList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1.5fr;
  .grid__item-3 {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const ImgView = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonOutVision = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.desTextColor};
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    color: #000;
  }
  .img {
    width: 16px;
    height: 16px;
    padding-left: 8px;
  }
`;

const OurVision: React.FC = () => {
  const viewImgList: any[] = [view01, view02, view03];
  return (
    <Wrapper>
      <div>
        <ViewList>
          {viewImgList.map((v, i) => {
            return (
              <div key={i} className={i === 2 ? 'grid__item-3' : undefined}>
                <ImgView src={v} />
              </div>
            );
          })}
        </ViewList>
        <Row className="justify-content-between align-items-center content">
          <Col xs={5}>
            <Title lineHeight="52px" fontSize="35px">
              We grow businesses
              <br />
              by creating unified brand experiences people love.
            </Title>
          </Col>
          <Col xs={2}>
            <ButtonOutVision>
              Our Vision <img src={next} className="img" />
            </ButtonOutVision>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default OurVision;
