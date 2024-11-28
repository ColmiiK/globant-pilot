import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Prompt() {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Describe your Pokémon"
      multiline
      rows={4}
      defaultValue=""
    />
  );
}
