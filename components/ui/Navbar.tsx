import React, { FC, useContext } from 'react'

// MATERIAL UI
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

// ICONS
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '../../context/ui';

interface Props {
}

export const Navbar: FC<Props> = () => {

    const { openSidebar } = useContext( UIContext );


  return (
    <>
        <AppBar position="static" elevation={0}>
            <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        JiraApp Gabriel Chavez
                    </Typography>
            </Toolbar>
        </AppBar>
        

    </>
  )
}
