import { createContext } from 'react';
interface UIContext {
    sidebarOpen: boolean,
    isAdding: boolean;
    
    // ACTIONS
    openSidebar: () => void;
    closeSidebar: () => void;
    setIsAddinEntry: (isAdding: boolean) => void;
}

export const UIContext = createContext({} as UIContext);

