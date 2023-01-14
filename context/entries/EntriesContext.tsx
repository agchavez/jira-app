import { createContext } from 'react';
import { Entry } from '../../interfaces';
interface EntriesContextProp {
    entries: Entry[] //TODO: Falta definir el tipo de dato
}

export const EntriesContext = createContext({} as EntriesContextProp);