import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommentsService } from '../../services/comments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  comments :  Comment[] = [];  
  @Input() listFor: String = '';

  constructor(private commentsService :  CommentsService, private router: Router){}

  ngOnInit() {
    if(this.listFor === "table-list")
      this.loadAll();
    else if (this.listFor !== '')
    {
      this.loadForArticle(this.listFor);
    }
  }

  loadAll(){
    this.commentsService.getComments().subscribe(data => {
      this.comments = data;
    });
  }

  loadForArticle(articleId: String){
    this.commentsService.getCommentsByArticleID(articleId).subscribe(data => {
      this.comments = data;
    });
  }

  onCreate(){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/CreateComment', { state: {article: this.listFor}});
  }

  onEdit(comment : Comment){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/EditComment', { state: comment });
  }
  onDelete(comment : Comment){
    //this.currentArticleService.changeCurrentArticle(article);
    this.commentsService.deleteComment(comment._id).subscribe(data => {
            this.comments.splice(this.comments.indexOf(comment),1);
    });
  }
  onDetails(comment : Comment){
    //this.currentArticleService.changeCurrentArticle(article);
    this.router.navigateByUrl('/DetailsComment', { state: comment });
  }

  handlePanel(action : string){
    this.loadAll();
  }
}