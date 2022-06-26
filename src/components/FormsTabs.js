import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function FormsTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs sx={{marginLeft:"550px", marginTop:"50px"}}value={value} onChange={handleChange} aria-label="disabled tabs example" >
      <Tab label="Education" />
      <Tab label="Work Experience" />
     
      <Tab label="Achivements" />
    </Tabs>
    
  );
}
