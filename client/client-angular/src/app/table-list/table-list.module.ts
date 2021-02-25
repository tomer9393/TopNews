import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { TableListComponent } from './table-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';



@NgModule({
  declarations: [
    TableListComponent,
    CategoriesListComponent,
    PostsListComponent,
    UsersListComponent,
    ContactsListComponent,
    ],
  imports: [
    CommonModule
  ]
})
export class TableListModule { } 
