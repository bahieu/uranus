import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import bg from 'src/assets/imgs/pricing/bg.png';
import next from 'src/assets/imgs/views/next_white.png';
import arrow from 'src/assets/imgs/pricing/arrow_back.svg';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  background: url(${bg}) center no-repeat;
  background-size: 100% 100%;
  background-position: top center;
  .content {
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
  }
`;

const Content = styled.div`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 300px;
`;
const BtnOutVision = styled.span`
  cursor: pointer;
  color: #fff;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    color: #000;
  }
  .img {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }
`;

const BtnBack = styled.span`
  cursor: pointer;
  color: #fff;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    color: #000;
  }
  .img {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }
`;

const Carousel: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Container className="content">
          <BtnBack>
            <img src={arrow} />
            Back
          </BtnBack>
          <BtnOutVision>
            Our Vision <img src={next} className="img" />
          </BtnOutVision>
        </Container>
      </Content>
    </Wrapper>
  );
};

export default Carousel;
