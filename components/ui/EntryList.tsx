import { List, Paper } from '@mui/material'
import React, { FC, useContext } from 'react'
import { UIContext } from '../../context/ui';
import { Entry, EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';

import styles from '../../styles/Entry.module.css'
import { useEntryContext } from '../../hooks';
interface EntryListProps {
    entries: Entry[],
    status: EntryStatus,
}

export const EntryList: FC<EntryListProps> = ({ entries, status }) => {
  
    const onDrogEntry = (e: React.DragEvent<HTMLDivElement>) => {
        const id = e.dataTransfer.getData('text/plain');
        draginEntry(id, status);
        setIsDragging(false);

    }

    const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const { isDragging, setIsDragging } = useContext(UIContext);
    const { draginEntry } = useEntryContext()
    return (
    <div
        onDrop={onDrogEntry}
        onDragOver={allowDrop}
        className={ isDragging ? styles.dragging : "" }
        >
        <Paper sx={{
        height: 'calc(100vh - 250px)',
        overflow: 'auto',
        background: 'transparent',
        }}>
            <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 0.3s ease' }}>
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
