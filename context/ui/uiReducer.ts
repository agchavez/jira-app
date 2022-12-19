import { UIState } from './';

type UIActionType = 
    { type: '[ACTION] OPEN-SIDEBAR'; } | 
    { type: '[ACTION] CLOSE-SIDEBAR'; } | 
    { type: 'SET_SUCCESS'; payload: string };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
        case '[ACTION] OPEN-SIDEBAR':
            return { 
                ...state, 
                sidebarOpen: true 
            };
        case '[ACTION] CLOSE-SIDEBAR':
            return { 
                ...state, 
                sidebarOpen: false 
            };
        default:
        return state;
    }


}