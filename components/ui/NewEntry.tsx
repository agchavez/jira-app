import React, { useState } from 'react'

import { Box, Button } from '@mui/material'
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import { EntryForm } from './EntryForm';

export const NewEntry = () => { 
    const [isAdding, setisAdding] = useState(false)
    return (
        <>
            <Box width="100%" sx={{  paddingleft: 1, paddingRight: 1}}>
                {
                    !isAdding ?
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            onClick={() => setisAdding(true)}
                            sx={{ m: 1, width: '100%' }}
                            startIcon={<AddToPhotosOutlinedIcon />} >
                            Agregar tarea
                        </Button>
                        : <EntryForm setisAdding={setisAdding} />
                }
            </Box>
        </>
    )
}
