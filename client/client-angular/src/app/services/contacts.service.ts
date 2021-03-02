import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  private contactsUrl = environment.contactsUrl;

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl);
  }

  addContact(fullName: String, email: String, message: String): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, { fullName: fullName, email: email, message: message });
  }

  getContact(id: String): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url);
  }

  updateContact(contact: Contact): Observable<Contact> {
    const url = `${this.contactsUrl}/${contact._id}`;
    return this.http.patch<Contact>(url, { fullName: contact.fullName, email: contact.email, message: contact.message });
  }

  deleteContact(id: String): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete<Contact>(url);
  }
}
