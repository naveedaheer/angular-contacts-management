import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { AddContact, APIReponse, Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // private apiUrl = environment.apiUrl;
  private apiUrl = "https://contacts-management-a936dcf43aca.herokuapp.com";


  constructor(private http: HttpClient) { }

  getContacts(filters?: Contact): Observable<Contact[]> {
    return this.http.get<any>(`${this.apiUrl}/contact?pageNumber=${1}&pageSize=${50}&firstName=${filters?.firstName || ''}&lastName=${filters?.lastName || ''}`)
      .pipe(map((response) => (response.data)));
    ;
  }

  deleteContact(contactId: number): Observable<APIReponse> {
    const url = `${this.apiUrl}/contact/${contactId}`;
    return this.http.delete<APIReponse>(url);
  }

  addContact(contactData: AddContact): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact`, contactData);
  }

  updateContact(contactId: number, contactData: AddContact): Observable<any> {
    const url = `${this.apiUrl}/contact/${contactId}`;
    return this.http.put<any>(url, contactData);
  }
}
