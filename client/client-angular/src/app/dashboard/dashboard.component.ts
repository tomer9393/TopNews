import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { RealTimeService } from '../services/real-time.service';
import { ArticlesService } from '../services/articles.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  activeUsersCounter : Number = 0;
  categoriesCounter : Number;
  articlesCounter : Number;

  constructor(private service : RealTimeService, private articlesService : ArticlesService, private categoriesService : CategoriesService){

  }

  ngOnInit() {
    this.articlesService.getNumOfArticles().subscribe((count) => {
      this.articlesCounter = count;
    });
    this.categoriesService.getNumOfCategories().subscribe((count) => {
      this.categoriesCounter = count;
    });
    this.load();
  }

  load() {
    this.service.currentActiveUsersCounter.subscribe(counter => this.activeUsersCounter = counter);
    this.service.currentCategoriesCounter.subscribe(counter => this.categoriesCounter = counter);
    this.service.currentArticlesCounter.subscribe(counter => this.articlesCounter = counter);
  }
}
