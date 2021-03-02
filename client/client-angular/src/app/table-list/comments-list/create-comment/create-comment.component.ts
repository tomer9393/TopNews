import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../models/comment';

import { CommentsService } from '../../../services/comments.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  
    comment: Comment = null;
    article: String = '';
    isEditable = false;

    constructor(private commentsService : CommentsService, private router:Router, private activatedRoute:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.article=history.state.article;
      if(this.article !== ''){
        this.isEditable = true;
      }
    }

    onCreate(name: String, articleId: String, body: String){
      this.commentsService.addComment(name, articleId, body).subscribe(data => {
        this.comment = data;
        this.router.navigate(['/table-list']);
      });
    }
}
