import React from "react";
import { Container } from "reactstrap";

const SiteDetail = ({ site }) => {
  const { siteName, type, address, city, state, zip } = site;
  // const workOrders = selectAllWorkOrders();
  return (
    <Container fluid className="bg-dark text-white">
      HELLO
    </Container>
  );
};

export default SiteDetail;
