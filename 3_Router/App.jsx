import React from "react";
import { Grid } from "@mui/material";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <Grid container rowSpacing={10} columnSpacing={20}>
      <Grid item xs={12}>
        <Layout />
      </Grid>
      <Grid item xs={6}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="home" />
        </Switch>
      </Grid>
    </Grid>
  );
}
