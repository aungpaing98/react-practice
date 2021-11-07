import { useRef } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";

import styled from "styled-components";

import { createAddPersonAction } from "../../redux/actions/person";

const StyledHeader = styled.h1`
  margin: 1rem 0 2rem 0;

  + h2 {
    margin-bottom: 1rem;
  }
`;
const Person = (props) => {
  const { person, count, addPerson } = props;
  const nameRef = useRef();
  const ageRef = useRef();

  const handleSubmit = (addPerson) => {
    return () => {
      const newPerson = {
        id: nanoid(),
        name: nameRef.current.value,
        age: ageRef.current.value,
      };
      addPerson(newPerson);
    };
  };

  return (
    <>
      <StyledHeader>Person Component</StyledHeader>
      <h2>Total Count : {count}</h2>

      <div>
        <input ref={nameRef} type="text" placeholder="Enter your name" />
        <input ref={ageRef} type="text" placeholder="Enter your age" />
        <button onClick={handleSubmit(addPerson)}>Submit</button>
      </div>
      <ul>
        {person.map((p) => (
          <li key={p.id}>
            name : {p.name} age : {p.age}
          </li>
        ))}
      </ul>
    </>
  );
};

export default connect(
  (state) => ({ person: state.person, count: state.count }),
  (dispatch) => ({
    addPerson: (personObj) => dispatch(createAddPersonAction(personObj)),
  })
)(Person);
