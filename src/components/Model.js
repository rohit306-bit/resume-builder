import  React,{useState} from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// const Signup = () => {
//   const paperStyle = { padding: 20, width: 350, height: "80vh", margin: "100px auto" };
//   const headerStyle = { margin: 0 };
//   const avatarStyle = { backgroundColor: "#2D59A7" };
//   const marginTop = { marginTop: 5 };
// };

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Model() {
  const [open, setOpen] = React.useState(true);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
  };
  // const url ="http://localhost:8000/createBusiness"
  // const[data, setData] = useState({
  //   clientName: "",
  //   domainName: "",
  //   globalAdminEmailID: "",
  //   globalAdminPassword: ""
  // });
  // function submit(e){
  //   e.preventDefault();
  //   Axios.post(url,{
  //     clientName: data.clientName,
  //     domainName: data.domainName,
  //     globalAdminEmailID: data.globalAdminEmailID,
  //     globalAdminPassword: data.globalAdminPassword
  //   })
  //   .then(res =>{
  //     console.log(res.data)
  //   })
  // }
  // function handle(e){
  //   const newdata={...data}     
  //   newdata[e.target.id] = e.target.value
  //   setData(newdata)
  //   console.log(newdata)
  // }

  const[clientName, setclientName] = useState("");
  const[domainName, setdomainName] = useState("");
  const[globalAdminEmailID, setglobalAdminEmailID] = useState("");
  const[globalAdminPassword, setglobalAdminPassword] = useState("");

  function submit(){
    console.warn({clientName, domainName, globalAdminEmailID, globalAdminPassword});
    let data={clientName, domainName, globalAdminEmailID, globalAdminPassword}
    fetch("http://localhost:8000/createBusiness",{
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      // console.warn("result", result);
      result.json().then((resp)=>{
        console.warn("resp", resp)
      })
    })
  }

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add User
      </Button> */}
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add New Education
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            // onSumbmit={this.submitHandler}
            onSubmit={(e) => submit(e)}
            sx={{
              "& > :not(style)": { m: 2, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              // onChange={(e) =>handle(e)}
              onChangeCapture={(e)=>{setclientName(e.target.value)}}
              // value={data.clientName}
              value={clientName}
              // id="clientName"
              label="Institution*"
              color="primary"
              focused
              placeholder="Enter Institution Name"
            />
            <TextField
              // onChange={(e) =>handle(e)}
              onChangeCapture={(e)=>{setdomainName(e.target.value)}}
              // value={data.domainName}
              value={domainName}
              // id="domainName"
              label="Degree*"
              color="primary"
              focused
              placeholder="Enter Degree Name"
            />
            <TextField
              // onChange={(e) =>handle(e)}
              onChangeCapture={(e)=>{setglobalAdminEmailID(e.target.value)}}
              // value={data.globalAdminEmailID}
              value={globalAdminEmailID}
              // id="globalAdminEmailID"
              label="Start Date"
              color="primary"
              focused
              placeholder="Start Date"
            />
            <TextField
              // onChange={(e) =>handle(e)}
              onChangeCapture={(e)=>{setglobalAdminPassword(e.target.value)}}
              // value={data.globalAdminPassword}
              value={globalAdminPassword}
              // id="globalAdminPassword"
              label="End Date"
              color="primary"
              focused
              placeholder="Enter End Date"
            />
            <TextField
              // onChange={(e) =>handle(e)}
              onChangeCapture={(e)=>{setglobalAdminPassword(e.target.value)}}
              // value={data.globalAdminPassword}
              value={globalAdminPassword}
              // id="globalAdminPassword"
              label="Description"
              color="primary"
              focused
              placeholder="Description"
              multiline
              maxRows={8}
              width="200px"
            />
            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={submit} variant="contained" color="primary">
            SAVE
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
