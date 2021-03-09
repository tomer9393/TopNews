import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users : User[] = [];  
  @Input() search: string = '';

  constructor(private usersService : UsersService,  private router: Router){}

  ngOnInit() {
    this.loadAll();
  }

  ngOnChanges(changes: String) {
    // changes.prop contains the old and the new value...
    if(this.search === "")
    { 
      this.loadAll();
    }
    else
    { 
      this.usersService.filter(this.search).subscribe(data =>{
        this.users = data;
      })
    }
  }

  loadAll(){
    this.usersService.getUsers().subscribe(data => {
      this.users = data.users;
    });
  }

  onCreate(){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/CreateUser');
  }

  onEdit(user : User){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/EditUser', { state: user });
  }
  onDelete(user : User){
    //this.currentArticleService.changeCurrentArticle(article);
    this.usersService.deleteUser(user._id).subscribe(data => {
            this.users.splice(this.users.indexOf(user),1);
    });
  }
  onDetails(user : User){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/DetailsUser', { state: user });
  }

  handlePanel(action : string){
    this.loadAll();
  }
}
