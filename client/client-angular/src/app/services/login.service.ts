import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token = '';
  public isLogin = new BehaviorSubject(false);
  public showLoginComponent = new BehaviorSubject(false);
  public loginUserDetails = new Subject<User>();
  private connectedUser: User;
  error;

  constructor(private http: HttpClient) { }
  onLogin(data) {
    return this.http.post('http://localhost:8081/user/adminLogin', data);
  }
  onUpdate(data) {
    return this.http.put('http://localhost:8081/user/updateAdmin', data);
  }
  setIsLogin(isLoggedIn , userDetails) {
    console.log(userDetails);
    this.connectedUser = userDetails;
    this.isLogin.next(isLoggedIn);
    if (isLoggedIn === false) {
      // localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    this.loginUserDetails.next(userDetails);
  }
  getConnectedUser() {
    return this.connectedUser;
  }

  showLogin(data: boolean) {
      this.showLoginComponent.next(data);
  }
  setShowLoginComp(data: boolean){
    this.showLoginComponent.next(data);
  }
}
