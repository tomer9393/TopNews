import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
