import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../module/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  httpOption = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(p: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, p , this.httpOption);
  }

  edit(currentPost: Post): Observable<Post> {
    const url = `${this.postsUrl}/${currentPost.id}`
    return this.http.put<Post>(url, currentPost , this.httpOption);
  }

  remove(post: Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`
    return this.http.delete<Post>(url, this.httpOption);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return  this.http.get<Post>(url);
  }
}
