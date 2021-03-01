import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class RealTimeService {

  currentActiveUsersCounter = this.socket.fromEvent<Number>('countActiveUsers');
  currentCategoriesCounter = this.socket.fromEvent<Number>('countCategories');
  currentArticlesCounter = this.socket.fromEvent<Number>('countArticles');

  constructor(private socket: Socket) { }
}
