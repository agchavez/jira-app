import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
    sidebarOpen: boolean,
    isAdding: boolean;
}

interface Props {
    children: React.ReactNode;
}


const UI_INITIAL_STATE: UIState = {
    sidebarOpen: false,
    isAdding: false
}

export const UIProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSidebar = () => {
        dispatch({
            type: '[UI] OPEN-SIDEBAR',
        })
    }

    const closeSidebar = () => {
        dispatch({
            type: '[UI] CLOSE-SIDEBAR',
        })
    }

    const setIsAddinEntry = (isAdding: boolean) => {
        dispatch({
            type: '[UI] - SETISADDING',
            payload: isAdding
        })
    }
    
    return (
        <UIContext.Provider value={{
            ...state,

            // ACTIONS
            openSidebar,
            closeSidebar,
            setIsAddinEntry
        }}>
            {children}
        </UIContext.Provider>
    )
}

