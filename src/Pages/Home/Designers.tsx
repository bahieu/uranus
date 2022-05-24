import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import { designers } from '../../data/designer';
import { Title, Description } from 'src/styles/Title';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0px 0 32px 140px;
  .dsner-content {
    display: flex;
    flex-direction: column;
  }
  .dsner-des {
    max-width: 200px;
  }
`;

const ImgDsner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Designer: React.FC = () => {
  return (
    <Wrapper>
      <Row className="justify-content-between">
        {designers.map((v, i) => (
          <Col key={i} className="dsner-content">
            <ImgDsner src={v.img} />
            <Title fontSize="25px" lineHeight="38px">
              {v.title}
            </Title>
            <Description
              fontSize="14px"
              lineHeight="21px"
              className="dsner-des"
            >
              {v.description}
            </Description>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default Designer;
