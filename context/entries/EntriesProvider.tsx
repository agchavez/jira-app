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
        {
            _id: uuidv4(),
            title: 'My first entry',
            status: 'PENDING',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        },{
            _id: uuidv4(),
            title: 'My first entry',
            status: 'PENDING',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        },{
            _id: uuidv4(),
            title: 'My first entry',
            status: 'PENDING',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        },{
            _id: uuidv4(),
            title: 'My first entry',
            status: 'PENDING',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        },{
            _id: uuidv4(),
            title: 'My first entry',
            status: 'PENDING',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        },{
            _id: uuidv4(),
            title: 'My first entry',
            status: 'PENDING',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        },{
            _id: uuidv4(),
            title: 'My first entry',
            status: 'PENDING',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        },
        {
            _id: uuidv4(),
            title: 'My first entry',
            status: 'PENDING',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        },
        {
            _id: uuidv4(),
            title: 'My first entry',
            status: 'PENDING',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        },
        {
            _id: uuidv4(),
            title: 'My first entry',
            status: 'IN_PROGRESS',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        },
        {
            _id: uuidv4(),
            title: 'My first entry',
            status: 'DONE',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: new Date(),
        }
    ],
}

export const EntriesProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, NAME_INITIAL_STATE)
    return (
        <EntriesContext.Provider value={{
            ...state,
        }}>
            {children}
        </EntriesContext.Provider>
    )
}

