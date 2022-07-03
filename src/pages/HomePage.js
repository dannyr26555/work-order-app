import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { countAllSites } from "../components/home/sitesSlice";

const HomePage = () => {
  const allSites = countAllSites();
  return (
    <Container className="p-5 mt-5">
      <Row>
        <Col md="4">
          <Card className="card-comp p-3 mb-1 text-center">
            <h3>Total Sites: {allSites}</h3>
          </Card>
        </Col>
        <Col md="4">
          <Card className="card-comp p-3 mb-1 text-center">
            <h3>Total Work Orders</h3>
          </Card>
        </Col>
        <Col md="4">
          <Card className="card-comp p-3 mb-1 text-center">
            <h3>Total Complete</h3>
            {/* <div>
              <span>60%</span>
              <Progress max="100" value="50" color="primary" />
            </div> */}
          </Card>
        </Col>
      </Row>
      {/* <Container className="p-5 mt-5">
        <Row>
          <Col sm="12">
            <SitesList />
          </Col>
        </Row>
      </Container> */}
    </Container>
  );
};

export default HomePage;
