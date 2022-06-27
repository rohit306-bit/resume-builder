import * as React from "react";
import Button from "@mui/material/Button";
import Model from "../components/Model";
import { useState } from "react";

// export default function DisableElevation() {

export const DisableElevation = (props) => {
  const { onSidebarOpen, ...other } = props;
  const [openModel, setOpenModel] = useState(false);
  if (openModel) {
    return <Model />;
  }
  return (
    <Button
      sx={{ mx: "0px", color: "black", width: "1520px", marginRight: "10px" }}
      variant="outlined"
      DisableElevation
      onClick={() => setOpenModel(true)}
    >
      Add new
    </Button>
  );
};
