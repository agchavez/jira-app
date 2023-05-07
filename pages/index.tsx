
import { Typography, Grid, Card, CardHeader, CardContent } from '@mui/material';
import { Inter } from '@next/font/google'
import { Layout } from '../components/layouts'
import { UIProvider } from '../context/ui'
import { EntryList } from '../components/ui/EntryList';
import { useContext } from 'react';
import { EntriesContext } from '../context/entries/EntriesContext';
import { EntryStatus } from '../interfaces/entry';
import { NewEntry } from '../components/ui';

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const { entries } = useContext( EntriesContext );
  return (
    <>
      <UIProvider>
        <Layout>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ p: 0, m: 2, height: 'calc(100vh - 120px)' }}>
                <CardHeader title="Pendientes" />
                <CardContent>
                  <NewEntry />
                  <EntryList entries={entries.filter( entry => entry.status === 'PENDING' )} status={'PENDING'} />
                </CardContent>
              </Card>
              
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ p: 0, m: 2, height: 'calc(100vh - 120px)' }}>
                <CardHeader title="En progreso" />
                <CardContent>
                  <EntryList entries={entries.filter( entry => entry.status === 'IN_PROGRESS' )} status={'IN_PROGRESS'} />
                </CardContent>
              </Card>
              
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ p: 0, m: 2, height: 'calc(100vh - 120px)' }}>
                <CardHeader title="Finalizadas" />
                <CardContent>
                  <EntryList entries={entries.filter( entry => entry.status === 'DONE' )} status={'DONE'} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Layout>
      </UIProvider>

    </>
  )
}
