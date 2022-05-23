import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Title } from 'src/styles/Title';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

// const Circle = styled.div`
//   width: 85px;
//   height: 85px;
//   border-radius: 100%;
//   border-color: '#2029FF';
// `;

const WeTeam = () => {
  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-between align-items-center ">
          <Col xs={3}>
            <Title lineHeight="81px" fontSize="54px">
              We team.
            </Title>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};
export default WeTeam;
