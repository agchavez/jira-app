import React, { FC } from 'react'

// MATERIAL UI
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

// ICONS
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

interface Props {
}

export const Navbar: FC<Props> = () => {
  return (
    <>
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} size="large">
                    <MenuOutlinedIcon />
                </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        JiraApp
                    </Typography>
            </Toolbar>
        </AppBar>
        

    </>
  )
}
