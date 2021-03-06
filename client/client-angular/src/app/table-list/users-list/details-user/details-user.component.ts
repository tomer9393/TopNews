import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  
    user: User = null;
  
    constructor(private usersService : UsersService, private router:Router, private activatedRoute:ActivatedRoute) {
      //this.router.getCurrentNavigation().extras.state;
    }
  
    ngOnInit(): void {
      this.user=history.state;
    }
  
    onEdit(){
      this.router.navigateByUrl('/EditUser', { state: this.user });
  
    }
    onDelete(){
      this.usersService.deleteUser(this.user._id).subscribe(data => {
        this.router.navigate(['/table-list']);
      });
    }
}
