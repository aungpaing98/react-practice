import { INCREMENT, DECREMENT } from "../constants";

const initState = 0;

export default function CountReducer(preState = initState, actions) {
  const { type, data } = actions;

  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;

    default:
      return preState;
  }
}
