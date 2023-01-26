import { Box } from '@mui/material';
import Head from 'next/head';
import React, { FC } from 'react';
import { Navbar, Sidebar } from '../ui';

interface Props {
    title?: string,
    children: React.ReactNode
}

export const Layout: FC<Props> = ({ title = 'JiraApp', children }) => {
    return (
        <>
            <Box sx={{ flexFlow: 1}}>
                <Head>
                    <title>{title}</title>
                </Head>
                <Navbar />
                <Sidebar />

                <Box sx={{ minHeight: '90vh', padding: 2, width: '90vw', margin: '0 auto' }}>
                    { children }

                </Box>
            </Box>

        </>
    )
}
1