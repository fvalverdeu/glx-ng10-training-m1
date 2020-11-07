import { Component, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-topic4-validations',
  templateUrl: './topic4-validations.component.html',
  styleUrls: ['./topic4-validations.component.scss']
})
export class Topic4ValidationsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPost().subscribe(response => {
      this.posts = response;
    });
  }

}
