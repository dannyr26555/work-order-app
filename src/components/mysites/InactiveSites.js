import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import {
  selectAllInactiveSites,
  countAllInactiveSites,
} from "../home/sitesSlice";

const InactiveSites = () => {
  const inactiveSites = selectAllInactiveSites();
  const numInactive = countAllInactiveSites();
  return (
    <Table className="align-items-center" responsive>
      <thead className="thead-light table-head">
        <tr>
          <th scope="col">Inactive Sites {`(${numInactive})`}</th>
          <th scope="col">Type</th>
          <th scope="col">Status</th>
          <th scope="col">Total WOs</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {inactiveSites.map((site) => {
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

export default InactiveSites;
