import { SITES } from "../../app/shared/SITES";

export const selectAllSites = () => {
  return SITES;
};

export const selectAllActiveSites = () => {
  return SITES.filter((site) => site.siteStatus === "Active");
};

export const selectAllInactiveSites = () => {
  return SITES.filter((site) => site.siteStatus === "Inactive");
};

export const selectSiteById = (id) => {
  return SITES.find((site) => site.id === parseInt(id));
};

export const countAllSites = () => {
  return SITES.length;
};

export const countAllActiveSites = () => {
  return SITES.filter((site) => site.siteStatus === "Active").length;
};

export const countAllInactiveSites = () => {
  return SITES.filter((site) => site.siteStatus === "Inactive").length;
};
