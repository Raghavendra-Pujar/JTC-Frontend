import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
   baseUrl = `http://localhost:3000/api/v1`;
  

  getPosts = (): Observable<any>=>{
    return this.http.get(`${this.baseUrl}/posts/list`);
  }

  updateVotes = (postId):Observable<any> => {
    console.log(postId);
    return this.http.post(`${this.baseUrl}/posts/upVote`,{'postId': postId});
  }
  
  createPost = (data): Observable<any> => {
    return this.http.post(`${this.baseUrl}/posts/create`,data);
  }
}
