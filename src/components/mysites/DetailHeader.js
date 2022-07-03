import React from "react";
import { Container } from "reactstrap";

const DetailHeader = ({ site }) => {
  const { siteName, siteStatus, type, address, city, state, zip } = site;
  return (
    <Container>
      <header className="detail-header rounded d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 my-4">
        <h2>{siteName}</h2>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className="nav-item px-2">
            <strong className="text-dark">Status:</strong> <br /> {siteStatus}
          </li>
          <li className="nav-item px-2">
            <strong className="text-dark">Type:</strong> <br /> {type}
          </li>
          <li className="nav-item px-2">
            <strong className="text-dark">Location:</strong> <br /> {address}{" "}
            {city}, {state} {zip}
          </li>
        </ul>
      </header>
    </Container>
  );
};

export default DetailHeader;
