import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UsersCounterComponent } from './users-counter/users-counter.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UsersCounterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
