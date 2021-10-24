import { Grid } from "@mui/material";
import { NavLink, Route, Redirect } from "react-router-dom";
import News from './News'
import Message from './Message'

export default function Home(props) {
  return (
    <div>
      <h2>This is Home Component</h2>
      <Grid container rowSpacing={5} columnSpacing={5}>
        <Grid item xs={6}>
          <NavLink to="/home/news">News</NavLink>
        </Grid>
        <Grid item xs={6}>
          <NavLink to="/home/message">Message</NavLink>
        </Grid>
        <Grid item xs={12}>
            <Route path='/home/news' component={News} />
            <Route path='/home/message' component={Message} />
            <Redirect to='/home/news'></Redirect>
        </Grid>
      </Grid>
    </div>
  );
}
