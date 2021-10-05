import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Item from "@mui/material/Item";

export default function App() {
  return (
    <>
      <Button variant="contained" sx={{ mx: "auto" }}>
        Hello World
      </Button>
      <Box
        sx={{
          mx: "auto",
          bgcolor: "primary.main",
          color: "#fff",
          width: 200,
          py: 1,
          m: "auto",
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        Centered element
      </Box>
      <Grid container spacing={3} sx={{m:3}}>
        <Grid item xs={12} sm={4}>
          xs:12, md:4
        </Grid>
        <Grid item xs={12} sm={4}>
          xs:12, md:4
        </Grid>
        <Grid item xs={12} sm={4}>
          xs:12, md:4
        </Grid>
      </Grid>
    </>
  );
}
