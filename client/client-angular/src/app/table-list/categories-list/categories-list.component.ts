import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories : Category[] = [];  
  @Input() listFor: String = '';

  constructor(private categoriesService : CategoriesService, private router: Router) {}

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
    this.router.navigateByUrl('/CreateCategory', { state: {article: this.listFor}});
  }
  
  onEdit(category : Category){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/EditCategory', { state: category });
  }
  onDelete(category : Category){
    //this.currentArticleService.changeCurrentArticle(article);
    this.categoriesService.deleteCategory(category._id).subscribe(data => {
            this.categories.splice(this.categories.indexOf(category),1);
    });
  }
  onDetails(category : Category){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/DetailsCategory', { state: category });
  }

  handlePanel(action : string){
    this.load();
  }
}
