import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scrape } from '../models/scrape';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScrapesService {
  private scrapesUrl = environment.scrapesUrl;
  private filterUrl = environment.filtersUrl;

  constructor(private http: HttpClient) {}
  
  filter(key: string): Observable<Scrape[]> {
    const url = `${this.filterUrl}/scrapes/${key}`;
    return this.http.get<Scrape[]>(url);
  }

  getScrapes(): Observable<Scrape[]> {
    return this.http.get<Scrape[]>(this.scrapesUrl);
  }

  addScrape(title: String, img: String, published: String,time: Date): Observable<Scrape> {
    return this.http.post<Scrape>(this.scrapesUrl, { title: title, img: img ,published: published ,time: time});
  }

  getScrape(id: number): Observable<Scrape> {
    const url = `${this.scrapesUrl}/${id}`;
    return this.http.get<Scrape>(url);
  }

  updateScrape(scrape: Scrape): Observable<Scrape> {
    const url = `${this.scrapesUrl}/${scrape._id}`;
    return this.http.patch<Scrape>(url, { title: scrape.title, img: scrape.img  , published: scrape.published ,time: scrape.time});
  }

  deleteScrape(id: number): Observable<Scrape> {
    const url = `${this.scrapesUrl}/${id}`;
    return this.http.delete<Scrape>(url);
  }

  deleteAllScrape(): Observable<Scrape> {
    return this.http.delete<Scrape>(this.scrapesUrl);
  }

  scrape(): Observable<Scrape[]> {
    const url = `${this.scrapesUrl}/scrape`;
    return this.http.get<Scrape[]>(url);
  }
}