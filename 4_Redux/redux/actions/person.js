import { ADDPERSON } from "../constant";

export const createAddPersonAction = (personObj) => ({
  type: ADDPERSON,
  data: personObj,
});