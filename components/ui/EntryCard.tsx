import React, { FC, useContext } from 'react'

import { formatDistance, subDays, format } from 'date-fns'
import { Avatar, Card, CardActionArea, CardActions, CardContent, Divider, Typography } from '@mui/material'

import { Entry } from '../../interfaces'
import { UIContext } from '../../context/ui';

interface EntryCardProps {
    entry: Entry;

}
export const EntryCard: FC<EntryCardProps> = ({ entry }) => {

    const { setIsDragging } = useContext(UIContext);
    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(true);
        e.dataTransfer.setData('text/plain', entry._id);
    }
    
    const onDradEnd = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(false);
    }
    
  return (
    <>
        <Card sx ={{
            marginBottom: 1,
        }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDradEnd}    
        >
            <CardActionArea>

            <CardContent sx={{ whiteSpace: 'pre-line' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" component="div" color="primary">
                    {entry.title}
                </Typography>
                <Avatar sx={{ bgcolor: 'primary.main' , color: 'primary.contrastText', width: 24, height: 24, fontSize: 12 }}>
                    AC
                </Avatar>
                </div>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" component="div">
                    {entry.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Typography variant="body2" component="div">
                    {format(entry.createdAt, 'dd/MM/yyyy')}
                </Typography>
            </CardActions>
            </CardActionArea>
        </Card>
    </>
  )
}
