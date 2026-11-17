import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function StateTextFields({ setIsAdmin }) {
  const navigate = useNavigate();
  const handleClick = () => {
    setIsAdmin(true);
    navigate("/admin");
  };
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 10, width: "25ch" } }}
      style={{ backgroundColor: "#eeeeee" }}
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
      <Button variant="contained" onClick={handleClick}>
        Login
      </Button>
    </Box>
  );
}
