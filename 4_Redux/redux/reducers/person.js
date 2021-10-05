import { ADDPERSON } from "../constant";

const initState = [{id:'001', name:'Aung paing', job:'Engineer'}];
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADDPERSON:
      return [data, ...preState];

    default:
      return preState;
  }
}
