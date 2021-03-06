import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() search: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: String) {
    // changes.prop contains the old and the new value...
    if(this.search === "")
    { 
      //this.loadAll();
    }
    else
    { 
      // this.scrapesService.filter(this.search).subscribe(data =>{
      //   this.scrapes = data;
      // })
    }
  }
}
