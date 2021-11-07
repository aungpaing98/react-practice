import { INCREMENT, DECREMENT } from "../constants";

export function createIncrementAction(data) {
  return { type: INCREMENT, data };
}

export function createDecrementAction(data) {
  return { type: DECREMENT, data };
}
