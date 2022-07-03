import { WORKORDERS } from "../../app/shared/WORKORDERS";

export const selectAllWorkOrdersBySiteId = (id) => {
  return WORKORDERS.filter((wo) => wo.siteId === id);
};
