import React from "react";
import { useState } from "react";

import { Grid } from "@mui/material";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default function App() {
  const [todos, setTodos] = useState(() => {
    return [
      { id: "0", task: "Get up", done: false },
      { id: "1", task: "Wash Face", done: true },
      { id: "2", task: "Go to School", done: false },
    ];
  });

  const addNewTodo = (newTodoObj) => {
    setTodos((preTodos) => [newTodoObj, ...preTodos]);
  };

  const toggleCheckTodo = (id) => {
    setTodos((preTodos) =>
      preTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    if (window.confirm("Do you really wanna delete that todo?")) {
      setTodos((preTodos) => preTodos.filter((todo) => todo.id !== id));
    }
  };

  const toggleAllTodo = (flag) => {
    setTodos((preTodos) => preTodos.map((todo) => ({ ...todo, done: !flag })));
  };

  const deleteAllChecked = () => {
    if (window.confirm("Do you really wanna delete all checked Todo ?")) {
      setTodos((preTodos) => preTodos.filter((todo) => todo.done !== true));
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="flex-start"
      spacing={4}
      sx={{m:3}}
    >
      {/* <> */}
      <Grid item xs={12}>
        <NewTodo addNewTodo={addNewTodo} />
      </Grid>
      <Grid item xs={12} sx={{width:"100%"}}>
        <TodoList
          todos={todos}
          toggleCheckTodo={toggleCheckTodo}
          deleteTodo={deleteTodo}
        />
      </Grid>
      <Grid item xs={12}>
        <Footer
          todos={todos}
          toggleAllTodo={toggleAllTodo}
          deleteAllChecked={deleteAllChecked}
        />
      </Grid>
      {/* </> */}
    </Grid>
  );
}
