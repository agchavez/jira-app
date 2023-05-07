import { createContext } from 'react';
import { Entry, EntryStatus } from '../../interfaces';
interface EntriesContextProp {
    entries: Entry[] //TODO: Falta definir el tipo de dato
    
    // Funciones
    addEntry: (entry: string) => void;
    draginEntry: (entry: string, status: EntryStatus) => void;
    
}

export const EntriesContext = createContext({} as EntriesContextProp);