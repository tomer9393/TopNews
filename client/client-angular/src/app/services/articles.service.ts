import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private articlesUrl = environment.articlesUrl;

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

  addArticle(title: string): Observable<Article> {
    return this.http.post<Article>(this.articlesUrl, { title: title });
  }

  getArticle(id: String): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url);
  }

  updateArticle(article: Article): Observable<Article> {
    const url = `${this.articlesUrl}/${article._id}`;
    return this.http.patch<Article>(url, { title: article.title });
  }

  deleteArticle(id: String): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.delete<Article>(url);
  }
}