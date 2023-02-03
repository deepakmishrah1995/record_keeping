import React from 'react'
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import { Stack } from '@mui/system';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Stack } from '@mui/system';

const fields = ({name, email, index}) => {
  return (
    
    <div className='data_value'>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Stack>
        <Button variant="contained" color="error">
        <DeleteForeverRoundedIcon/>
      </Button>
      </Stack>
       </div>

    
  );
};

export default fields