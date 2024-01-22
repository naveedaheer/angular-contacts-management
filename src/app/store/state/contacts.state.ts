import { Contact } from "../../models/contact.model";

export interface ContactState {
    contacts: Contact[];
    loading: boolean;
    error: string | null;
    adding: boolean;
    deleting: boolean
}

export const initialState: ContactState = {
    contacts: [],
    loading: false,
    error: null,
    adding: false,
    deleting: false
};