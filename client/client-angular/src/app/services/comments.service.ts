import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class CommentsService {
  private CommentsUrl = environment.commentsUrl;

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.CommentsUrl);
  }

  getCommentsByArticleID(articleId: String): Observable<Comment[]> {
    const url = `${this.CommentsUrl}/${articleId}`;
    return this.http.get<Comment[]>(url);
  }

  addComment(name: String, articleId: String, body: String): Observable<Comment> {
    return this.http.post<Comment>(this.CommentsUrl, { name: name, articleId: articleId, body: body });
  }

  getComment(id: String): Observable<Comment> {
    const url = `${this.CommentsUrl}/id/${id}`;
    return this.http.get<Comment>(url);
  }

  updateComment(comment: Comment): Observable<Comment> {
    const url = `${this.CommentsUrl}/id/${comment._id}`;
    return this.http.patch<Comment>(url, { name: comment.name, body: comment.body });
  }

  deleteComment(id: String): Observable<Comment> {
    const url = `${this.CommentsUrl}/id/${id}`;
    return this.http.delete<Comment>(url);
  }
}
