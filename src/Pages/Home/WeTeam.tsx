import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

import { Description, Title } from 'src/styles/Title';
import { members } from '../../data/members';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
  .member-des {
    max-width: 163px;
  }
`;

const Circle = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 100%;
  border-color: '#2029FF';
`;

const ImgMember = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WeTeam: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <Title lineHeight="81px" fontSize="54px">
              We team.
            </Title>
          </Col>
        </Row>
        <Row>
          {members.map((v, i) => (
            <Col key={i} className="content ">
              <Circle>
                <ImgMember src={v.img} />
              </Circle>
              <Title lineHeight="24px" fontSize="16px">
                {v.title}
              </Title>
              <Description
                lineHeight="18px"
                fontSize="12px"
                className="member-des"
              >
                {v.description}
              </Description>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};
export default WeTeam;
