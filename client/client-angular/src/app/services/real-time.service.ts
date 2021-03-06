import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RealTimeService {
  
  currentActiveUsersCounter = this.socket.fromEvent<Number>('countActiveUsers');
  currentCategoriesCounter = this.socket.fromEvent<Number>('countCategories');
  currentArticlesCounter = this.socket.fromEvent<Number>('countArticles');
  private filterUrl = environment.filtersUrl;

  constructor(private socket: Socket, private http: HttpClient) {
  }

  getNumOfActiveUsers(): Observable<Number> {
    const url = `${this.filterUrl}/activeUsers`;
    return this.http.get<Number>(url);
  }
}
