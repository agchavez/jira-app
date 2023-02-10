import { createContext } from 'react';
import { Entry } from '../../interfaces';
interface EntriesContextProp {
    entries: Entry[] //TODO: Falta definir el tipo de dato
    
    // Funciones
    addEntry: (entry: string) => void;
    
}

export const EntriesContext = createContext({} as EntriesContextProp);