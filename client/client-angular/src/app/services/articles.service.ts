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
  private filterUrl = environment.filtersUrl;

  constructor(private http: HttpClient) { }
  
  filter(key: string): Observable<Article[]> {
    const url = `${this.filterUrl}/articles/${key}`;
    return this.http.get<Article[]>(url);
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

  getNumOfArticles(): Observable<Number> {
    const url = `${this.articlesUrl}/articles/count`;
    return this.http.get<Number>(url);
  }

  getArticlesByCategory(category: String): Observable<Article[]> {
    const url = `${this.articlesUrl}/${category}`;
    return this.http.get<Article[]>(url);
  }

  addArticle(title: String, subTitle: String, img: String, category: String, body: String): Observable<Article> {
    return this.http.post<Article>(this.articlesUrl, { 
      title: title, 
      subTitle: subTitle, 
      category: category, 
      img: img, 
      body: body });

  }

  getArticle(id: String): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<Article>(url);
  }

  updateArticle(article: Article): Observable<Article> {
    const url = `${this.articlesUrl}/id/${article._id}`;
    return this.http.patch<Article>(url, { 
      title: article.title, 
      subTitle: article.subTitle, 
      category: article.category, 
      img: article.img, 
      body: article.body });
  }

  deleteArticle(id: String): Observable<Article> {
    const url = `${this.articlesUrl}/id/${id}`;
    return this.http.delete<Article>(url);
  }
}