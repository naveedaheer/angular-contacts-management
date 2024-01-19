import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ContactActions from '../store/contacts.actions';
import { ContactState } from '../store/contacts.state';
import { contact } from '../models/contact.model';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = "https://contacts-management-a936dcf43aca.herokuapp.com";

  constructor(private http: HttpClient, private store: Store<{ contacts: ContactState }>) { }

  getContacts(firstName?: string, lastName?: string, pageSize?: number, pageNumber?: number): Observable<contact[]> {
    const params = {
      firstName: firstName,
      lastName: lastName,
      pageSize: pageSize,
      pageNumber: pageNumber
    }
    return this.http.get<contact[]>(`${this.apiUrl}/contact?${firstName = params?.firstName}&${lastName = params?.lastName}&${pageSize = params?.pageSize}&${pageNumber = params?.pageNumber}`);
  }

  loadContacts() {
    this.store.dispatch(ContactActions.loadContacts());
  }
  deleteContact(contactId: number): Observable<void> {
    const url = `${this.apiUrl}/contact/${contactId}`;
    return this.http.delete<void>(url);
  }
  addContact(contactData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact`, contactData);
  }

  updateContact(contactId: number, contactData: any): Observable<any> {
    const url = `${this.apiUrl}/contact/${contactId}`;
    return this.http.put<any>(url, contactData);
  }
}
