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

  constructor(private http: HttpClient) { }

  getScrapes(): Observable<Scrape[]> {
    return this.http.get<Scrape[]>(this.scrapesUrl);
  }

  addScrape(title: String, link: String, rating: String, genre: String, duration: String, img: String): Observable<Scrape> {
    return this.http.post<Scrape>(this.scrapesUrl, { title: title, link: link, rating: rating, genre: genre, duration: duration, img: img  });
  }

  getScrape(id: number): Observable<Scrape> {
    const url = `${this.scrapesUrl}/${id}`;
    return this.http.get<Scrape>(url);
  }

  updateScrape(scrape: Scrape): Observable<Scrape> {
    const url = `${this.scrapesUrl}/${scrape._id}`;
    return this.http.patch<Scrape>(url, { title: scrape.title, link: scrape.link, year: scrape.year, rating: scrape.rating, genre: scrape.genre, duration: scrape.duration, img: scrape.img  });
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