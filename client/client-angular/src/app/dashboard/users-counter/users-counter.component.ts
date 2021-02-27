import { Component, OnInit } from '@angular/core';
import { RealTimeService } from '../../services/real-time.service';

@Component({
  selector: 'app-users-counter',
  templateUrl: './users-counter.component.html',
  styleUrls: ['./users-counter.component.css']
})
export class UsersCounterComponent implements OnInit {

  counter : Number = 0;

  constructor(private service : RealTimeService){
    //service.currentCounter.subscribe(counter => this.counter = counter);
  }
  ngOnInit(): void {
  } 

}
