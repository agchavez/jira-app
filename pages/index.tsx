
import { Typography } from '@mui/material'
import { Inter } from '@next/font/google'
import { Layout } from '../components/layouts'
import { UIProvider } from '../context/ui'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <UIProvider>
      <Layout>
        <Typography variant="h3" component="h1" sx={{ fontFamily: inter }}>
          Welcome to JiraApp
        </Typography>
      </Layout>
    </UIProvider>
      
    </>
  )
}
