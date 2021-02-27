import { Component, OnInit } from '@angular/core';
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

  constructor(private articlesService : ArticlesService
              ){}

  ngOnInit() {
    this.load();
  }

  load(){
    this.articlesService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  onEdit(article : Article){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("A");
  }
  onDelete(article : Article){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("b");
  }
  onDetails(article : Article){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("c");
  }

  handlePanel(action : string){
    this.load();
  }
}
