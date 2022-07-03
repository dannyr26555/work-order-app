import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { selectAllActiveSites, countAllActiveSites } from "../home/sitesSlice";

const ActiveSites = () => {
  const activeSites = selectAllActiveSites();
  const numActive = countAllActiveSites();
  return (
    <Table className="align-items-center" responsive>
      <thead className="thead-light table-head">
        <tr>
          <th scope="col">Active Sites {`(${numActive})`}</th>
          <th scope="col">Type</th>
          <th scope="col">Status</th>
          <th scope="col">Total WOs</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {activeSites.map((site) => {
          return (
            <tr>
              <th scope="row">
                <Link to={`${site.id}`}>{site.siteName}</Link>
              </th>
              <td>{site.type}</td>
              <td>{site.siteStatus}</td>
              <td># WOS</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ActiveSites;
