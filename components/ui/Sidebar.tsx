import React,{ useContext } from 'react';
// MATERIAL UI
import { Box, Drawer, List, Typography } from '@mui/material'
import { UIContext } from '../../context/ui'

const menuItems: { name: string, path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
]

export const Sidebar = () => {

    const { sidebarOpen, closeSidebar } = useContext( UIContext )

  return (
    <>
    </>
  )
}
