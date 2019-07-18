import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../module/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private posetService: PostService) { }

  ngOnInit() {
  }

  addPost(title: string, body: string) {
    if (!title && ! body) {
      alert('Please add post');
    } else {
      this.posetService.savePost({title, body} as Post).subscribe((post) => {
        console.log(post);
      });
    }
  }

}
