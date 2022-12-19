import { createContext } from 'react';
interface UIContext {
    sidebarOpen: boolean,

    // ACTIONS
    openSidebar: () => void;
    closeSidebar: () => void;
}

export const UIContext = createContext({} as UIContext);

