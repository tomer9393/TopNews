import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Article = null;

  constructor(private articlesService : ArticlesService) { }

  ngOnInit(): void {
  }
  //this.article.title, this.article.subTitle, this.article.img, this.article.category, this.article.body
  onCreate(title, subTitle, img, category, body){
      this.articlesService.addArticle(title, subTitle, img, category, body);
    console.log("a");
  }
}
