import { Entry } from '../../interfaces';
import { EntriesState } from './';


type EntriesActionType =
   | { type: '[Entries] - ADDNEW', payload: Entry }
   


export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

   switch (action.type) {
      case '[Entries] - ADDNEW':
         return {
            ...state,
            entries: [...state.entries, action.payload]
         }
     

      default:
         return state;
   }

}