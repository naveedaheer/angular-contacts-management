export interface Contact {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export interface AddContact {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}