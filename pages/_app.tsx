import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { EntriesProvider } from '../context/entries'

import { darkTheme, lightTheme } from '../themes'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("App mounted")
    return () => {
      console.log("App unmounted")
    }
  }, [])
  
  return (
    <EntriesProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </EntriesProvider>
  )
}