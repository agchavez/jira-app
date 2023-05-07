import { Entry, EntryStatus } from '../../interfaces';
import { EntriesState } from './';


type EntriesActionType =
   | { type: '[Entries] - ADDNEW', payload: Entry }
   | { type: '[Entries] - DRAGIN', payload: { entryId: string, status: EntryStatus } }
   


export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

   switch (action.type) {
      case '[Entries] - ADDNEW':
         return {
            ...state,
            entries: [...state.entries, action.payload]
         }
     
      case '[Entries] - DRAGIN':
         return {
            ...state,
            entries: state.entries.map(entry => {
               if (entry._id === action.payload.entryId) {
                  return {
                     ...entry,
                     status: action.payload.status
                  }
               }
               return entry;
            })
         }

      default:
         return state;
   }

}