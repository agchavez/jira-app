
import { Typography, Grid, Card, CardHeader } from '@mui/material';
import { Inter } from '@next/font/google'
import { Layout } from '../components/layouts'
import { UIProvider } from '../context/ui'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <UIProvider>
        <Layout>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ p: 2, m: 2, height: 'calc(100vh - 120px)' }}>
                <CardHeader title="Welcome to Next.js + TypeScript + Material-UI" />
              </Card>
              
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ p: 2, m: 2, height: 'calc(100vh - 120px)' }}>
                <CardHeader title="Welcome to Next.js + TypeScript + Material-UI" />
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ p: 2, m: 2, height: 'calc(100vh - 120px)' }}>
                <CardHeader title="Welcome to Next.js + TypeScript + Material-UI" />
              </Card>
            </Grid>
          </Grid>
        </Layout>
      </UIProvider>

    </>
  )
}
