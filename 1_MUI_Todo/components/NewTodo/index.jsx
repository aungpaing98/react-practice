import React from "react";
import { useRef } from "react";

import { Grid, Typography, TextField, Button } from "@mui/material";

import { nanoid } from "nanoid";

export default function NewTodo(props) {
  const newInput = useRef();
  const addHandler = () => {
    if (newInput.current.value) {
      props.addNewTodo({
        id: nanoid(),
        task: newInput.current.value,
        done: false,
      });
    }
    newInput.current.value = "";
  };

  return (
    <>
      <Typography variant="h3">Todo List</Typography>
      <Grid container alignItems="flex-end">
        <TextField
          inputRef={newInput}
          label="Type in to add new Todo"
          variant="filled"
          color="success"
          focused
          sx={{mr:2}}
        />
        <Button variant="contained" onClick={addHandler}>
          Add
        </Button>
      </Grid>
    </>
  );
}
