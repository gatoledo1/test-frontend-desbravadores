import React from "react";
import { WarningCircle } from "phosphor-react";
import { Container, Row, Col, } from "react-bootstrap";
import { GoTo } from "./goTo";

function EmptySearch() {
  return (
    <Container fluid="sm" className="animated fadeInUp" style={{ minHeight: "100vh", maxWidth: 700 }}>
      <GoTo />
      <Row className="m-3 p-4 mx-1 rounded-3 background-500">
        <Col sm={1} className="d-flex justify-content-center mb-3 mb-sm-0" >
          <WarningCircle size={42} />
        </Col>
        <Col sm={11}>
          <h2 className="normalize-text-color text-center">We didn't find any profiles that match</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default EmptySearch;