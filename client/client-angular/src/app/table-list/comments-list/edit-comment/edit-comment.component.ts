import { Component, OnInit } from '@angular/core';
import { Comment } from '../../../models/comment';

import { CommentsService } from '../../../services/comments.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  
    comment: Comment = null;
  
    constructor(private commentsService : CommentsService, private router:Router, private activatedRoute:ActivatedRoute) {
      //this.router.getCurrentNavigation().extras.state;
    }
  
    ngOnInit(): void {
      this.comment=history.state;
    }
  
    onUpdate(name: String, articleId: String, body: String){
      this.comment.name = name;
      this.comment.articleId = articleId;
      this.comment.body = body;
      this.commentsService.updateComment(this.comment).subscribe(data => {
        this.comment = data;
        this.router.navigate(['/table-list']);
      }, err => {
        window.alert(err.error);
        this.router.navigate(['/table-list']);
      });
    }

}
