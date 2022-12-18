
import { Typography } from '@mui/material'
import { Inter } from '@next/font/google'
import { Layout } from '../components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <Typography variant="h3" component="h1" sx={{ fontFamily: inter }}>
          Welcome to JiraApp
        </Typography>
      </Layout>
      
    </>
  )
}
