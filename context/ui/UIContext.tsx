import { createContext } from 'react';
interface UIContext {
    sidebarOpen: boolean,
    isAdding: boolean;
    isDragging: boolean;
    
    // ACTIONS
    openSidebar: () => void;
    closeSidebar: () => void;
    setIsAddinEntry: (isAdding: boolean) => void;
    setIsDragging: (isDragging: boolean) => void;
}

export const UIContext = createContext({} as UIContext);

