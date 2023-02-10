import React, { FC, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import { useEntryContext } from '../../hooks/useEntryContext';

interface EntryFormProps {
    setisAdding: (isAdding: boolean) => void;
}

export const EntryForm: FC<EntryFormProps> = ({ setisAdding }) => {
    const [value, setvalue] = useState('')
    const [error, seterror] = useState<string | null>(null)
    const [isTouch, setisTouch] = useState(false)

    const { addEntry } = useEntryContext()
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        if (error && value.length > 3) {
            seterror(null)
        }else if (value.length < 1) {
            seterror('El campo debe tener al menos 3 caracteres')
        }
        setvalue(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (value.trim().length < 1) {
            setisTouch(true)
            return seterror('El campo no puede estar vacio')
        }
        addEntry(value)
        seterror(null)
        setvalue('')
        setisAdding(false)
    }

    
    return (
        <>
         <form onSubmit={handleSubmit}>
            <TextField
                id="outlined-basic"
                label="Tarea"
                variant="outlined"
                autoComplete='off'
                multiline
                onBlur={() => setisTouch(true)}
                rows={3}
                sx={{ m: 1, width: '100%' }}
                value={value}
                onChange={handleInputChange}
                error={!!error && isTouch}
                helperText={error && isTouch ? error : null}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                <Button
                    variant="outlined"
                    color="error"
                    size="small" sx={{ m: 1 }}
                    onClick={() => setisAdding(false)}
                >
                    Cancelar
                </Button>
                <Button 
                    variant="outlined" 
                    color="success" 
                    size="small" sx={{ m: 1 }}
                    type="submit"
                    startIcon={<AddToPhotosOutlinedIcon />} >
                    Guardar
                </Button>
            </Box>

        </form>

        </>
    )
}
