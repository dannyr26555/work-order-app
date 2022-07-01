import React from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "reactstrap";
import { selectAllActiveSites } from "./sitesSlice";

const SitesList = () => {
  const sites = selectAllActiveSites();
  return (
    <Container>
      <Table className="align-items-center" responsive>
        <thead className="thead-light table-head">
          <tr>
            <th scope="col">Active Site</th>
            <th scope="col">Type</th>
            <th scope="col">Status</th>
            <th scope="col">Total WOs</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {sites.map((site) => {
            return (
              <tr>
                <th scope="row">
                  <Link to={`id`}>{site.siteName}</Link>
                </th>
                <td>{site.type}</td>
                <td>{site.status}</td>
                <td># WOS</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default SitesList;
