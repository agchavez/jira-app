
export type EntryStatus = 'PENDING' | 'IN_PROGRESS' | 'DONE';

export interface Entry {
    _id: string;
    title: string;
    description: string;
    status: EntryStatus;
    createdAt: Date;
}