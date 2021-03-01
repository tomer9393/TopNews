import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../models/article';
import { ArticlesService } from '../../services/articles.service';
//import { CurrentArticleService } from 'src/app/services/current-article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articles : Article[] = [];  
  @Input() listFor: String = '';

  constructor(private articlesService : ArticlesService, private router: Router){}

  ngOnInit() {
    if(this.listFor === '')
      this.loadAll();
    else if (this.listFor !== '')
    {
      this.loadForCategory(this.listFor);
    }
  }

  loadAll(){
    this.articlesService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  loadForCategory(category: String){
    this.articlesService.getArticlesByCategory(category).subscribe(data => {
      this.articles = data;
    });
  }

  onCreate(){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/CreateArticle', { state: {category: this.listFor}});
  }

  onEdit(article : Article){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/EditArticle', { state: article });
  }
  onDelete(article : Article){
    //this.currentArticleService.changeCurrentArticle(article);
    this.articlesService.deleteArticle(article._id).subscribe(data => {
            this.articles.splice(this.articles.indexOf(article),1);
    });
  }
  onDetails(article : Article){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/DetailsArticle', { state: article });
  }

  handlePanel(action : string){
    this.loadAll();
  }
}
