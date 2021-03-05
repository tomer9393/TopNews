import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ContainerComponent } from './components/container/container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminLayoutRoutes } from './layouts/admin-layout/admin-layout.routing';
import { AppComponent } from './app.component';
//import { ScrapesListComponent } from './table-list/scrapes-list/scrapes-list.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { UserProfileComponent } from './user-profile/user-profile.component';
//import { TableListComponent } from './table-list/table-list.component';
//import { IconsComponent } from './icons/icons.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:8081', options: {} };


@NgModule({ 
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UsersComponent,
    UserCreateComponent,
    UserDeleteComponent,
    LoginComponent,
    ContainerComponent,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }