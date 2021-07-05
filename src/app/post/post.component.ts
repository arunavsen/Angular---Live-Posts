import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post? : Post;
  @Input() index: number;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.post.author);
    console.log(this.index);

  }

  onDelete(){
    this.postService.deletePost(this.index);
  }

  onEdit(){
    this.router.navigate(["/post-edit", this.index]);
  }

  likePost(){
    this.postService.likePost(this.index);
  }

}
