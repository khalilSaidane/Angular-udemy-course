import { Component, OnInit , EventEmitter , Output , Input} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../module/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost;
  @Input() isEdit:boolean;
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();


  constructor(private posetService: PostService) { }

  ngOnInit() {
  }

  addPost(title: string, body: string) {
    if (!title && ! body) {
      alert('Please add post');
    } else {
      this.posetService.savePost({title, body} as Post).subscribe((post) => {
        this.newPost.emit(post);
      });
    }
  }

  ediPost(currentPost: Post) {
    this.posetService.edit(currentPost).subscribe((p) => {
      this.isEdit = false ;
      this.updatedPost.emit(p);
    });
  }
}
