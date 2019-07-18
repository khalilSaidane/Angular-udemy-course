import { Component, OnInit } from '@angular/core';
import {Post} from '../../module/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean;
  constructor(private postService: PostService) { }

  ngOnInit() {
  this.postService.getPosts().subscribe((posts) => {
    this.posts = posts ;
    }
  );
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(p: Post) {
    this.currentPost = p;
    this.isEdit = true ;
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if ( post.id === cur.id) {
        this.posts.splice(index , 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: '' ,
        };
      }
    });

  }

  remove(post: Post) {
    this.postService.remove(post).subscribe((p) => {
      this.posts.forEach((curr, index) => {
        if (curr.id === p.id) {
          this.posts.splice(index, 1) ;
          console.log(this.posts.length);
        }
        }
      );
    });
  }
}
