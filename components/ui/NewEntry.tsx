import React, { useContext, useState } from 'react'

import { Box, Button } from '@mui/material'
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import { EntryForm } from './EntryForm';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => { 
    const { isAdding , setIsAddinEntry} = useContext(UIContext)
    return (
        <>
            <Box width="100%" sx={{  paddingleft: 1, paddingRight: 1}}>
                {
                    !isAdding ?
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            onClick={() => setIsAddinEntry(true)}
                            sx={{ m: 1, width: '100%' }}
                            startIcon={<AddToPhotosOutlinedIcon />} >
                            Agregar tarea
                        </Button>
                        : <EntryForm setisAdding={setIsAddinEntry} />
                }
            </Box>
        </>
    )
}
