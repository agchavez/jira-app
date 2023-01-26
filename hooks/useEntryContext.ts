import React from 'react'
import { EntriesContext } from '../context/entries/EntriesContext';

export const useEntryContext = () => {
    const context = React.useContext(EntriesContext)
  return {
    ...context
  }
}
