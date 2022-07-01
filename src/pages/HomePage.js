import React from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import SitesList from "../components/home/SitesList";

const HomePage = () => {
  return (
    <Container className="p-5 mt-5">
      <Row>
        <Col md="4">
          <Row className="card-comp p-3 mb-1">
            <h3>Total Sites</h3>
          </Row>
          <Row className="card-comp p-3 mb-1">
            <h3>Total Work Orders</h3>
          </Row>
          <Row className="card-comp p-3 mb-1">
            <h3>Total Complete</h3>
            <div>
              <span>60%</span>
              <Progress max="100" value="50" color="primary" />
            </div>
          </Row>
        </Col>
        <Col md="8">
          <SitesList />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
