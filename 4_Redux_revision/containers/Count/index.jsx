import { useRef } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/actions/count";

const StyledButton = styled.button`
  height: 2rem;
  width: 6rem;
  background-color: black;
  color: white;
  margin-left: 1rem;
`;

const StyledHeader = styled.h1`
  margin: 1rem 0 2rem 0;

  + h2 {
    margin-bottom: 1rem;
  }
`;

const Count = (props) => {
  const { count, person, increment, decrement } = props;
  const selectRef = useRef();

  const addCount = () => {
    increment(selectRef.current.value * 1);
  };
  const subCount = () => {
    decrement(selectRef.current.value * 1);
  };
  const addOddCount = () => {
    if (count % 2 !== 0) {
      increment(selectRef.current.value * 1);
    }
  };
  const addAsyncCount = () => {
    setTimeout(() => increment(selectRef.current.value * 1), 500);
  };

  return (
    <>
      <StyledHeader>Count Component</StyledHeader>
      <h2>Current count : {count}</h2>
      <h2>Total Number of Person : {person.length}</h2>

      <select ref={selectRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <StyledButton onClick={addCount}> + </StyledButton>
      <StyledButton onClick={subCount}> - </StyledButton>
      <StyledButton onClick={addOddCount}> Add if Odd </StyledButton>
      <StyledButton onClick={addAsyncCount}> Add Async </StyledButton>
    </>
  );
};

export default connect(
  (state) => ({ count: state.count, person: state.person }),
  // (dispatch) => ({
  //   increment: (data) => dispatch(createIncrementAction(data)),
  //   decrement: (data) => dispatch(createDecrementAction(data)),
  // })
  { increment: createIncrementAction, decrement: createDecrementAction }
)(Count);
