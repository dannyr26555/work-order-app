import React from "react";
import { Container } from "reactstrap";
import ActiveSites from "../mysites/ActiveSites";
import InactiveSites from "../mysites/InactiveSites";

const SitesList = () => {
  return (
    <Container>
      <ActiveSites />
      <InactiveSites />
    </Container>
  );
};

export default SitesList;
