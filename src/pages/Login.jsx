import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function StateTextFields() {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 10, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="email"
        placeholder={"exemple@gmail.com"}
        type="email"
        required
      />
      <TextField
        id="outlined-uncontrolled"
        label="Password"
        placeholder="********"
        type="password"
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </Box>
  );
}
