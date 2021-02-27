import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories : Category[] = [];  

  constructor(private categoriesService : CategoriesService
              ){}

  ngOnInit() {
    this.load();
  }

  load(){
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  onCreate(){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("t");
  }

  onEdit(category : Category){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("A");
  }

  onDelete(category : Category){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("b");
  }
  
  onDetails(category : Category){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("c");
  }

  handlePanel(action : string){
    this.load();
  }
}
