import { UIState } from './';

type UIActionType = 
    { type: '[UI] OPEN-SIDEBAR'; } | 
    { type: '[UI] CLOSE-SIDEBAR'; } | 
    { type: '[UI] - SETISADDING', payload: boolean } |
    { type: 'SET_SUCCESS'; payload: string };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
        case '[UI] OPEN-SIDEBAR':
            return { 
                ...state, 
                sidebarOpen: true 
            };
        case '[UI] CLOSE-SIDEBAR':
            return { 
                ...state, 
                sidebarOpen: false 
            };
        case '[UI] - SETISADDING':
                return {
                   ...state,
                   isAdding: action.payload
                }
        default:
        return state;
    }


}