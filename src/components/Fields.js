import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RemoveIcon from '@mui/icons-material/Remove';
const Fields=({name,email,index,data})=>{
    console.log(data);
    return(
      
        <div className="data_val">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Stack>
        <Button variant="contained" color="error">
            <RemoveIcon/>
        </Button>
        </Stack>
       </div>
       
    )
}

export default Fields 