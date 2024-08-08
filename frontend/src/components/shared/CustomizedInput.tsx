// Imports
import { TextField } from '@mui/material';
import React from 'react'

// Types for Info management
type Props = {
    name: string;
    type: string;
    label: string;
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField 
    name={props.name} 
    label={props.label} 
    type={props.type} 
    margin="normal" 
    InputLabelProps={{style:{color: "white"}}} 
    InputProps={{style:{color: "white", width: "400px", borderRadius: 10, fontSize: 20}}}
/> 
  );
};

export default CustomizedInput;