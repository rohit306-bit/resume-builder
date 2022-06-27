// import * as React from 'react';
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import React from "react";

export default function PanelForm() {
  return (
    <div>
      <Box
        marginLeft={50}
        marginTop={-40}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 4, width: "60ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            placeholder="Name"
            multiline
            maxRows={4}
            //   value={value}
            //   onChange={handleChange}
          />

          {/* <TextField
          id="outlined-multiline-static"
          label="Short Bio"
          placeholder='Short-Bio'
          multiline
          rows={8}
        /> */}
          {/* <TextField
          id="outlined-textarea"
          label="Email-Id"
          marginTop="-10"
          placeholder="Email-Id"
          multiline
        /> */}
          <TextField
            id="outlined-textarea"
            label="Short Bio"
            marginTop="-10"
            placeholder="Short-Bio"
            multiline
            // rows={2}
          />
          <TextField
            id="outlined-textarea"
            label="Email-Id"
            marginTop="-10"
            placeholder="Email-Id"
            multiline
          />
        </div>
        <Button variant="contained" size="small" marginLeft="50px">
          Save
        </Button>
      </Box>
    </div>
  );
}
