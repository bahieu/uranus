import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import customImg from 'src/assets/imgs/customized/customized.png';
import { Description, Title } from 'src/styles/Title';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 72px;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .custom-des {
    max-width: 302px;
  }
`;
const ImgCustom = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Customized: React.FC = () => (
  <Wrapper>
    <Row className="justify-content-around m-0">
      <Col xs={4} className="content">
        <Title lineHeight="38px" fontSize="25px">
          Make colors work for you.
        </Title>
        <Description lineHeight="21px" fontSize="14px" className="custom-des">
          {"You're"} just a few minutes away from an endless color combination
          generator designed by you.
        </Description>
      </Col>
      <Col xs={5}>
        <ImgCustom src={customImg} />
      </Col>
    </Row>
  </Wrapper>
);

export default Customized;
