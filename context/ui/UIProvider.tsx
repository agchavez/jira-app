import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
    sidebarOpen: boolean,
}

interface Props {
    children: React.ReactNode;
}


const UI_INITIAL_STATE: UIState = {
    sidebarOpen: false,
}

export const UIProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSidebar = () => {
        dispatch({
            type: '[ACTION] OPEN-SIDEBAR',
        })
    }

    const closeSidebar = () => {
        dispatch({
            type: '[ACTION] CLOSE-SIDEBAR',
        })
    }
    return (
        <UIContext.Provider value={{
            ...state,

            // ACTIONS
            openSidebar,
            closeSidebar,
        }}>
            {children}
        </UIContext.Provider>
    )
}

