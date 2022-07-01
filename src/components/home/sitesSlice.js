import { SITES } from "../../app/shared/SITES";

export const selectAllSites = () => {
  return SITES;
};

export const selectAllActiveSites = () => {
  return SITES.filter((site) => site.status === "Active");
};
