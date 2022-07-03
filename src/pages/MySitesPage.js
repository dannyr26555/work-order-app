import React from "react";
import { Container } from "reactstrap";
import SitesList from "../components/home/SitesList";

const MySitesPage = () => {
  return (
    <Container className="p-5 mt-5">
      <SitesList />
    </Container>
  );
};

export default MySitesPage;
