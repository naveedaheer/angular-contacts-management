export interface ContactData {
    data: Contact[];
    pageInfo: PageInfo;
}

export interface Contact {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

interface PageInfo {
    currentPage: number;
    pageSize: number;
    totalContacts: number;
    totalPages: number;
}

export interface AddContact {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}