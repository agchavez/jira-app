import { FC, useReducer } from 'react'
import { EntriesContext, entriesReducer } from './'
import { Entry } from '../../interfaces/entry';
import { v4 as uuidv4 } from 'uuid';
export interface EntriesState {
    entries: Entry[];
    
}

interface Props {
    children: React.ReactNode;
}


const NAME_INITIAL_STATE: EntriesState = {
    entries: [
    ],
    
}

export const EntriesProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, NAME_INITIAL_STATE)
    
    const addEntry = (entry: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            title: entry.split(' ').slice(0, 5).join(' '),
            status: 'PENDING',
            description: entry,
            createdAt: new Date(),
        }
        dispatch({
            type: '[Entries] - ADDNEW',
            payload: newEntry
        })
    }

    
    
    return (
        <EntriesContext.Provider value={{
            ...state,
            addEntry,
            
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

