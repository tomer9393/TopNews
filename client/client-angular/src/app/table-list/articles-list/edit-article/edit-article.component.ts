import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article: Article = null;

  constructor(private articlesService : ArticlesService, private router:Router, private activatedRoute:ActivatedRoute) {
    //this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.article=history.state;
  }

  onUpdate(title: String, subTitle: String, img: String, category: String, body: String){
    this.article.title = title;
    this.article.subTitle = subTitle;
    this.article.img = img;
    this.article.category = category;
    this.article.body = body;
    this.articlesService.updateArticle(this.article).subscribe(data => {
      this.article = data;
      this.router.navigate(['/table-list']);
    }, err => {
      window.alert(err.error);
      this.router.navigate(['/table-list']);
    });
  }
}
