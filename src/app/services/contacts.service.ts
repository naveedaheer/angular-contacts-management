import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddContact, Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // private apiUrl = environment.apiUrl;
  private apiUrl = "https://contacts-management-a936dcf43aca.herokuapp.com";


  constructor(private http: HttpClient) { }

  getContacts(filters?: Contact): Observable<Contact[]> {
    console.log("fetching contacts ...")
    return this.http.get<Contact[]>(`${this.apiUrl}/contact?pageNumber=${1}&pageSize=${4}`);
  }

  deleteContact(contactId: number): Observable<void> {
    const url = `${this.apiUrl}/contact/${contactId}`;
    return this.http.delete<void>(url);
  }

  addContact(contactData: AddContact): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact`, contactData);
  }

  updateContact(contactId: number, contactData: AddContact): Observable<any> {
    const url = `${this.apiUrl}/contact/${contactId}`;
    return this.http.put<any>(url, contactData);
  }
}
