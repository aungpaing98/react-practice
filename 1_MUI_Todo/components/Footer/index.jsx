import React from "react";
import { useState } from "react";

import { Grid, Checkbox, Button } from "@mui/material";

export default function Footer(props) {
  const { todos, toggleAllTodo, deleteAllChecked } = props;
  const [allChecked, setAllChecked] = useState(false);

  const handleToggleAllTodo = () => {
    setAllChecked((pre) => !pre);
    toggleAllTodo(allChecked);
  };

  const handleDeleteAllChecked = () => {
    deleteAllChecked();
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item sx={{ mr: 3 }}>
        <Checkbox checked={todos.length===0?false:allChecked} onChange={handleToggleAllTodo} />
        <label>
          Selected / Total :{" "}
          {todos.reduce((totalChecked, todo) => {
            if (todo.done) {
              return totalChecked + 1;
            }
            return totalChecked;
          }, 0)}{" "}
          / {todos.length}
        </label>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteAllChecked}
        >
          Delete Checked
        </Button>
      </Grid>
    </Grid>
  );
}
