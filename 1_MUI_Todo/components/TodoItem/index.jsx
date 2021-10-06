import React from "react";
import { useState } from "react";

import { Grid, Checkbox, Button } from "@mui/material";

export default function TodoItem(props) {
  const { todo, toggleCheckTodo, deleteTodo } = props;
  const [showDelete, setShowDelete] = useState(false);

  const checkTodo = (id) => {
    console.log("Check Todo");
    toggleCheckTodo(id);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleMouseHover = (flag) => {
    return () => {
      setShowDelete(flag);
    };
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      onMouseEnter={handleMouseHover(true)}
      onMouseLeave={handleMouseHover(false)}
    >
      <Grid item xs={8}>
        <Checkbox checked={todo.done} onChange={() => checkTodo(todo.id)} />
        <label>{props.todo.task}</label>
      </Grid>
      <Grid item xs={4}>
        {showDelete ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(todo.id)}
          >
            Delete Task
          </Button>
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
}
