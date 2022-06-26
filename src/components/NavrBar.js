import { AppBar, Toolbar,Typography,Button } from "@mui/material"
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import React from "react";



const NavBar = ()  =>{
    return(
        <React.Fragment>
        <AppBar  sx={{background: "#FFFFFF"}} position="static">
            <Toolbar>
            <ContentPasteOutlinedIcon  sx={{ color:"#5050C5",fontSize: "10"}}/>
                <Typography sx={{marginLeft: "15px",color:"#5050C5"}} > Resume Builder </Typography>
                {/* marginleft="300px" color="#5050C5" */}
               <Button sx={{ marginLeft: "auto",borderColor: 'black', color: "black"}}variant="outlined">Import</Button>
               <Button sx={{ marginLeft: "10px",color: 'white', borderColor: 'red', backgroundColor: "red"}}variant="contained">Export</Button>
            </Toolbar>
        </AppBar>
        </React.Fragment>

    )

}
export default NavBar;
