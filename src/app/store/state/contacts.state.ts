import { AddContact, Contact } from "../../models/contact.model";

export interface ContactState {
    contacts: Contact[];
    AddContact: AddContact | null;
    loading: boolean;
    error: string | null;
    adding: boolean;
    deleting: boolean
}

export const initialState: ContactState = {
    contacts: [],
    AddContact: null,
    loading: false,
    error: null,
    adding: false,
    deleting: false
};