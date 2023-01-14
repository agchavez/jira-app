import { FC, useReducer } from 'react'
import { EntriesContext, entriesReducer } from './'
import { Entry } from '../../interfaces/entry';

export interface EntriesState {
    entries: Entry[];
}

interface Props {
    children: React.ReactNode;
}


const NAME_INITIAL_STATE: EntriesState = {
    entries: [],
}

export const EntriesProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, NAME_INITIAL_STATE)
    return (
        <EntriesContext.Provider value={{
            entries: []
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

