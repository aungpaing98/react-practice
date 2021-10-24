import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Layout() {
  return (
    <>
      <h1>React Router DOM</h1>
      <nav>
        <ul>
          <li>
            <Button><NavLink to="/home">Home</NavLink></Button>
          </li>
          <li>
            <Button><NavLink to="/about">About</NavLink></Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
