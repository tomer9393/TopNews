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
  
  filter(key: string): Observable<any> {
    const url = `${this.filterUrl}/articles/${key}`;
    return this.http.get<any>(url);
  }

  getArticles(): Observable<any> {
    return this.http.get<any>(this.articlesUrl);
  }

  getNumOfArticles(): Observable<Number> {
    const url = `${this.articlesUrl}/articles/count`;
    return this.http.get<Number>(url);
  }

  getArticlesByCategory(category: String): Observable<any> {
    const url = `${this.articlesUrl}/${category}`;
    return this.http.get<any>(url);
  }

  addArticle(title: String, subTitle: String, img: String, category: String, body: String): Observable<any> {
    return this.http.post<any>(this.articlesUrl, { 
      title: title, 
      subTitle: subTitle, 
      category: category, 
      img: img, 
      body: body });

  }

  getArticle(id: String): Observable<any> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateArticle(article: Article): Observable<any> {
    const url = `${this.articlesUrl}/id/${article._id}`;
    return this.http.patch<any>(url, { 
      title: article.title, 
      subTitle: article.subTitle, 
      category: article.category, 
      img: article.img, 
      body: article.body });
  }

  deleteArticle(id: String): Observable<any> {
    const url = `${this.articlesUrl}/id/${id}`;
    return this.http.delete<any>(url);
  }
}