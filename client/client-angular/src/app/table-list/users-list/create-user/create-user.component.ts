import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
    user : User;  
  
    constructor(private usersService : UsersService, private router: Router) { }
  
    ngOnInit(): void {
    }
    
    onCreate(firstName: String, lastName: String, email: String, password: String, phone: String){
      this.usersService.addUser(firstName, lastName, email, password, phone, true).subscribe(data => {
        this.user = data;
        this.router.navigate(['/table-list']);
      });
    }
}
