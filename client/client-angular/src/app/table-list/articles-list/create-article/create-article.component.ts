import { Component, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { ArticlesService } from '../../../services/articles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Article = null;

  constructor(private articlesService : ArticlesService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(title: String, subTitle: String, img: String, category: String, body: String){
    this.articlesService.addArticle(title, subTitle, img, category, body).subscribe(data => {
      this.article = data;
    });
    this.router.navigate(['/table-list']);
  }
}
