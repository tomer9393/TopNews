import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';



@NgModule({
  declarations: [
    TableListComponent,
    ArticlesListComponent,
    CategoriesListComponent,
    UsersListComponent,
    ContactsListComponent,
    ArticlesListComponent,
    ],
  imports: [
    CommonModule
  ]
})
export class TableListModule { } 
