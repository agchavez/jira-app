import { List, Paper } from '@mui/material'
import React, { FC } from 'react'
import { Entry } from '../../interfaces';
import { EntryCard } from './EntryCard';

interface EntryListProps {
    entries: Entry[]
}

export const EntryList: FC<EntryListProps> = ({ entries }) => {
  return (
    <div>
        <Paper sx={{
        height: 'calc(100vh - 250px)',
        overflow: 'auto',
        background: 'transparent',
        padding: 1,
        }}>
            <List sx={{ opacity: 1 , }}>
                {
                    entries.map( entry => (
                    <EntryCard  key={entry._id} entry={entry} />
                    ))
                }
            </List>

        </Paper>
    </div>
  )
}
