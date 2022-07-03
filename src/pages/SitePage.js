import React from "react";
import { useParams } from "react-router-dom";
import { selectSiteById } from "../components/home/sitesSlice";
import SiteDetail from "../components/mysites/SiteDetail";
import DetailHeader from "../components/mysites/DetailHeader";

const SitePage = () => {
  const { siteId } = useParams();
  const site = selectSiteById(siteId);
  return (
    <>
      <DetailHeader site={site} />
      <SiteDetail site={site} />
    </>
  );
};

export default SitePage;

/* <div>
  <div className="progress-wrapper">
    <div className="progress-info">
      <div className="progress-label">
        <span>Task completed</span>
      </div>
      <div className="progress-percentage">
        <span>60%</span>
      </div>
    </div>
    <Progress max="100" value="50" color="default" />
  </div>
</div>; */

// PROGRESS BAR ^^^
